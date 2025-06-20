"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BattleController_1 = require("../controllers/BattleController");
const InvalidEnemiesLength_1 = require("../errors/InvalidEnemiesLength");
const InvalidStatError_1 = require("../errors/InvalidStatError");
const BattleTurnController_1 = require("../controllers/BattleTurnController");
const ViewBattle_1 = require("../views/ViewBattle");
const ViewUtils_1 = require("../views/ViewUtils");
// Mocks
jest.mock("../controllers/BattleTurnController");
jest.mock("../views/ViewBattle");
jest.mock("../views/ViewUtils", () => ({
    ViewUtils: { isRigth: jest.fn() },
}));
const mockPlayer = (isAlive = true) => ({ isAlive });
const mockEnemy = (isAlive = true) => ({ isAlive });
const mockBoss = (isAlive = true) => ({ isAlive });
describe("BattleController", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should throw InvalidStatError if player is not alive", () => {
        expect(() => new BattleController_1.BattleController(mockPlayer(false), [mockEnemy()], [mockBoss()])).toThrow(InvalidStatError_1.InvalidStatError);
    });
    it("should throw InvalidEnemiesLength if enemy array is empty", () => {
        expect(() => new BattleController_1.BattleController(mockPlayer(), [], [mockBoss()])).toThrow(InvalidEnemiesLength_1.InvalidEnemiesLength);
    });
    it("should throw InvalidStatError if any enemy is not alive", () => {
        expect(() => new BattleController_1.BattleController(mockPlayer(), [mockEnemy(), mockEnemy(false)], [mockBoss()])).toThrow(InvalidStatError_1.InvalidStatError);
    });
    it("should throw InvalidEnemiesLength if boss array is empty", () => {
        expect(() => new BattleController_1.BattleController(mockPlayer(), [mockEnemy()], [])).toThrow(InvalidEnemiesLength_1.InvalidEnemiesLength);
    });
    it("should throw InvalidStatError if any boss is not alive", () => {
        expect(() => new BattleController_1.BattleController(mockPlayer(), [mockEnemy()], [mockBoss(), mockBoss(false)])).toThrow(InvalidStatError_1.InvalidStatError);
    });
    it("should initialize without errors with valid player, enemies, and bosses", () => {
        expect(() => new BattleController_1.BattleController(mockPlayer(), [mockEnemy()], [mockBoss()])).not.toThrow();
    });
    it("should call roundSetup and displayVictory if player is alive after battle", () => {
        const player = mockPlayer();
        const enemy = mockEnemy();
        const boss = mockBoss();
        // @ts-ignore
        BattleTurnController_1.BattleTurnController.mockImplementation(() => ({
            battleTurn: jest.fn(),
        }));
        // @ts-ignore
        ViewBattle_1.ViewBattle.mockImplementation(() => ({
            displayBossFight: jest.fn(),
            displayVictory: jest.fn(),
            displayDefeat: jest.fn(),
        }));
        const controller = new BattleController_1.BattleController(player, [enemy], [boss]);
        controller["roundSetup"] = jest.fn(function () {
            this._player.isAlive = true;
            this._viewBattle.displayVictory();
        });
        controller.startBattle();
        expect(controller["roundSetup"]).toHaveBeenCalled();
        expect(controller["_viewBattle"].displayVictory).toHaveBeenCalled();
    });
    it("should call displayDefeat if player is dead after battle", () => {
        const player = mockPlayer();
        const enemy = mockEnemy();
        const boss = mockBoss();
        // @ts-ignore
        BattleTurnController_1.BattleTurnController.mockImplementation(() => ({
            battleTurn: jest.fn(),
        }));
        // @ts-ignore
        ViewBattle_1.ViewBattle.mockImplementation(() => ({
            displayBossFight: jest.fn(),
            displayVictory: jest.fn(),
            displayDefeat: jest.fn(),
        }));
        const controller = new BattleController_1.BattleController(player, [enemy], [boss]);
        controller["roundSetup"] = jest.fn(function () {
            this._player.isAlive = false;
            this._viewBattle.displayDefeat();
        });
        controller.startBattle();
        expect(controller["roundSetup"]).toHaveBeenCalled();
        expect(controller["_viewBattle"].displayDefeat).toHaveBeenCalled();
    });
    it("should call BattleTurnController and roundStart for each enemy and boss", () => {
        const player = mockPlayer();
        const enemies = [mockEnemy(), mockEnemy()];
        const bosses = [mockBoss(), mockBoss()];
        const battleTurnMock = { battleTurn: jest.fn() };
        // @ts-ignore
        BattleTurnController_1.BattleTurnController.mockImplementation(() => battleTurnMock);
        // @ts-ignore
        ViewBattle_1.ViewBattle.mockImplementation(() => ({
            displayBossFight: jest.fn(),
            displayVictory: jest.fn(),
            displayDefeat: jest.fn(),
        }));
        const controller = new BattleController_1.BattleController(player, enemies, bosses);
        controller.startBattle();
        // 2 bosses * 2 enemies + 2 bosses = 6 battleTurn calls
        // (each enemy per boss, then boss per boss)
        expect(battleTurnMock.battleTurn).toHaveBeenCalledTimes(6);
        expect(controller["_viewBattle"].displayBossFight).toHaveBeenCalledTimes(2);
        expect(ViewUtils_1.ViewUtils.isRigth).toHaveBeenCalledTimes(2);
    });
});
