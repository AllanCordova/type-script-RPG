import { PersonController } from "../controllers/PersonController";
import { EnemyController } from "../controllers/EnemyController";
import { PlayerController } from "../controllers/PlayerController";
import { Enemy } from "../models/Enemy";
import { Boss } from "../models/Boss";
import { Player } from "../models/Player";

// Mocks
jest.mock("../controllers/EnemyController");
jest.mock("../controllers/PlayerController");

describe("PersonController", () => {
  let personController: PersonController;
  let mockEnemyController: jest.Mocked<EnemyController>;
  let mockPlayerController: jest.Mocked<PlayerController>;

  beforeEach(() => {
    (EnemyController as jest.Mock).mockClear();
    (PlayerController as jest.Mock).mockClear();

    mockEnemyController = new (EnemyController as any)();
    mockPlayerController = new (PlayerController as any)();

    (EnemyController as jest.Mock).mockImplementation(
      () => mockEnemyController
    );
    (PlayerController as jest.Mock).mockImplementation(
      () => mockPlayerController
    );

    personController = new PersonController();
  });

  it("should create a player using PlayerController", () => {
    const fakePlayer = {} as Player;
    mockPlayerController.createPlayer.mockReturnValue(fakePlayer);

    const player = personController.player;

    expect(mockPlayerController.createPlayer).toHaveBeenCalled();
    expect(player).toBe(fakePlayer);
  });

  it("should create 3 random enemies using EnemyController", () => {
    const fakeEnemies = [{}, {}, {}] as Enemy[];
    mockEnemyController.createRandomEnemies.mockReturnValue(fakeEnemies);

    const enemies = personController.enemy;

    expect(mockEnemyController.createRandomEnemies).toHaveBeenCalledWith(3);
    expect(enemies).toBe(fakeEnemies);
  });

  it("should create boss enemies using EnemyController", () => {
    const fakeBosses = [{}] as Boss[];
    mockEnemyController.createBossEnemy.mockReturnValue(fakeBosses);

    const bosses = personController.boss;

    expect(mockEnemyController.createBossEnemy).toHaveBeenCalled();
    expect(bosses).toBe(fakeBosses);
  });
});
