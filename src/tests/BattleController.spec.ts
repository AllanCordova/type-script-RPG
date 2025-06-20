import { BattleController } from "../controllers/BattleController";
import { InvalidEnemiesLength } from "../errors/InvalidEnemiesLength";
import { InvalidStatError } from "../errors/InvalidStatError";
import { Player } from "../models/Player";
import { Enemy } from "../models/Enemy";
import { Boss } from "../models/Boss";
import { BattleTurnController } from "../controllers/BattleTurnController";
import { ViewBattle } from "../views/ViewBattle";
import { ViewUtils } from "../views/ViewUtils";

// Mocks
jest.mock("../controllers/BattleTurnController");
jest.mock("../views/ViewBattle");
jest.mock("../views/ViewUtils", () => ({
  ViewUtils: { isRigth: jest.fn() },
}));

const mockPlayer = (isAlive = true): Player =>
  ({ isAlive } as unknown as Player);

const mockEnemy = (isAlive = true): Enemy => ({ isAlive } as unknown as Enemy);

const mockBoss = (isAlive = true): Boss => ({ isAlive } as unknown as Boss);

describe("BattleController", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should throw InvalidStatError if player is not alive", () => {
    expect(
      () => new BattleController(mockPlayer(false), [mockEnemy()], [mockBoss()])
    ).toThrow(InvalidStatError);
  });

  it("should throw InvalidEnemiesLength if enemy array is empty", () => {
    expect(() => new BattleController(mockPlayer(), [], [mockBoss()])).toThrow(
      InvalidEnemiesLength
    );
  });

  it("should throw InvalidStatError if any enemy is not alive", () => {
    expect(
      () =>
        new BattleController(
          mockPlayer(),
          [mockEnemy(), mockEnemy(false)],
          [mockBoss()]
        )
    ).toThrow(InvalidStatError);
  });

  it("should throw InvalidEnemiesLength if boss array is empty", () => {
    expect(() => new BattleController(mockPlayer(), [mockEnemy()], [])).toThrow(
      InvalidEnemiesLength
    );
  });

  it("should throw InvalidStatError if any boss is not alive", () => {
    expect(
      () =>
        new BattleController(
          mockPlayer(),
          [mockEnemy()],
          [mockBoss(), mockBoss(false)]
        )
    ).toThrow(InvalidStatError);
  });

  it("should initialize without errors with valid player, enemies, and bosses", () => {
    expect(
      () => new BattleController(mockPlayer(), [mockEnemy()], [mockBoss()])
    ).not.toThrow();
  });

  it("should call roundSetup and displayVictory if player is alive after battle", () => {
    const player = mockPlayer();
    const enemy = mockEnemy();
    const boss = mockBoss();

    // @ts-ignore
    BattleTurnController.mockImplementation(() => ({
      battleTurn: jest.fn(),
    }));

    // @ts-ignore
    ViewBattle.mockImplementation(() => ({
      displayBossFight: jest.fn(),
      displayVictory: jest.fn(),
      displayDefeat: jest.fn(),
    }));

    const controller = new BattleController(player, [enemy], [boss]);
    controller["roundSetup"] = jest.fn(function (this: any) {
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
    BattleTurnController.mockImplementation(() => ({
      battleTurn: jest.fn(),
    }));

    // @ts-ignore
    ViewBattle.mockImplementation(() => ({
      displayBossFight: jest.fn(),
      displayVictory: jest.fn(),
      displayDefeat: jest.fn(),
    }));

    const controller = new BattleController(player, [enemy], [boss]);
    controller["roundSetup"] = jest.fn(function (this: any) {
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
    BattleTurnController.mockImplementation(() => battleTurnMock);

    // @ts-ignore
    ViewBattle.mockImplementation(() => ({
      displayBossFight: jest.fn(),
      displayVictory: jest.fn(),
      displayDefeat: jest.fn(),
    }));

    const controller = new BattleController(player, enemies, bosses);

    controller.startBattle();

    // 2 bosses * 2 enemies + 2 bosses = 6 battleTurn calls
    // (each enemy per boss, then boss per boss)
    expect(battleTurnMock.battleTurn).toHaveBeenCalledTimes(6);
    expect(controller["_viewBattle"].displayBossFight).toHaveBeenCalledTimes(2);
    expect(ViewUtils.isRigth).toHaveBeenCalledTimes(2);
  });
});
