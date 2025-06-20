import { Enemy } from "../models/Enemy";
import { Boss } from "../models/Boss";
import { EnemyFactory } from "../factories/EnemyFactory";
import { BossFactory } from "../factories/BossFactory";
import { EnemyData } from "../interfaces/EnemyData";
import enemyDatabase from "../data/enemies.json";
import { InvalidEnemiesLength } from "../errors/InvalidEnemiesLength";

export class EnemyController {
  private enemyTemplates: EnemyData[];

  constructor() {
    this.enemyTemplates = enemyDatabase;
  }

  public createRandomEnemies(count: number): Enemy[] {
    const enemies: Enemy[] = [];
    if (count < 1) {
      throw new InvalidEnemiesLength(
        "should throw InvalidEnemiesLength if enemies array is empty"
      );
    }
    for (let i = 0; i < count; i++) {
      const enemys = this.enemyTemplates.filter((e) => !e.isBoss);

      if (enemys.length === 0) {
        throw new InvalidEnemiesLength("No valid enemy templates available.");
      }

      const randomIndex = Math.floor(Math.random() * enemys.length);
      const randomEnemyData = enemys[randomIndex];
      const newEnemy = EnemyFactory.createFromData(randomEnemyData);
      enemies.push(newEnemy);
    }

    return enemies;
  }

  public createEnemyById(id: string): Enemy | null {
    const enemyData = this.enemyTemplates.find((e) => e.id === id);
    if (enemyData) {
      return EnemyFactory.createFromData(enemyData);
    }
    return null;
  }

  public createBossEnemy(): Boss[] {
    const bossData: EnemyData[] = this.enemyTemplates.filter(
      (enemy) => enemy.isBoss
    );

    const bossEnemies: Boss[] = [];

    if (bossData.length > 0) {
      for (const boss of bossData) {
        const newBossEnemy = BossFactory.createFromData(boss);
        bossEnemies.push(newBossEnemy);
      }

      return bossEnemies;
    }

    throw new Error("No boss enemy found in the database.");
  }
}
