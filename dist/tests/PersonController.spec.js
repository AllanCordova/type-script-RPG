"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PersonController_1 = require("../controllers/PersonController");
const EnemyController_1 = require("../controllers/EnemyController");
const PlayerController_1 = require("../controllers/PlayerController");
// Mocks
jest.mock("../controllers/EnemyController");
jest.mock("../controllers/PlayerController");
describe("PersonController", () => {
    let personController;
    let mockEnemyController;
    let mockPlayerController;
    beforeEach(() => {
        EnemyController_1.EnemyController.mockClear();
        PlayerController_1.PlayerController.mockClear();
        mockEnemyController = new EnemyController_1.EnemyController();
        mockPlayerController = new PlayerController_1.PlayerController();
        EnemyController_1.EnemyController.mockImplementation(() => mockEnemyController);
        PlayerController_1.PlayerController.mockImplementation(() => mockPlayerController);
        personController = new PersonController_1.PersonController();
    });
    it("should create a player using PlayerController", () => {
        const fakePlayer = {};
        mockPlayerController.createPlayer.mockReturnValue(fakePlayer);
        const player = personController.player;
        expect(mockPlayerController.createPlayer).toHaveBeenCalled();
        expect(player).toBe(fakePlayer);
    });
    it("should create 3 random enemies using EnemyController", () => {
        const fakeEnemies = [{}, {}, {}];
        mockEnemyController.createRandomEnemies.mockReturnValue(fakeEnemies);
        const enemies = personController.enemy;
        expect(mockEnemyController.createRandomEnemies).toHaveBeenCalledWith(3);
        expect(enemies).toBe(fakeEnemies);
    });
    it("should create boss enemies using EnemyController", () => {
        const fakeBosses = [{}];
        mockEnemyController.createBossEnemy.mockReturnValue(fakeBosses);
        const bosses = personController.boss;
        expect(mockEnemyController.createBossEnemy).toHaveBeenCalled();
        expect(bosses).toBe(fakeBosses);
    });
});
