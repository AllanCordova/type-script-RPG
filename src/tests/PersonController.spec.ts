import { EnemyController } from "../controllers/EnemyController";
import { Enemy } from "../models/Enemy";

const enemyController: EnemyController = new EnemyController();

describe("Test build enemys for Controller", () => {
  it("createRandomEnemies verify", () => {
    const enemies: Enemy[] = enemyController.createRandomEnemies(3);
    expect(enemies.length).toBe(3);
  });
});
