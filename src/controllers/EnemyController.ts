import { Enemy } from "../models/Enemy";
import { EnemyFactory } from "../factories/EnemyFactory";
import { EnemyData } from "../interfaces/EnemyData";
import enemyDatabase from "../data/enemies.json";

export class EnemyController {
  private enemyTemplates: EnemyData[];

  constructor() {
    this.enemyTemplates = enemyDatabase;
  }

  /**
   * Cria uma lista de inimigos aleatórios.
   * @param count O número de inimigos a serem criados.
   * @returns Um array de instâncias da classe Enemy.
   */
  public createRandomEnemies(count: number): Enemy[] {
    const enemies: Enemy[] = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(
        Math.random() * this.enemyTemplates.length
      );
      const randomEnemyData = this.enemyTemplates[randomIndex];
      const newEnemy = EnemyFactory.createFromData(randomEnemyData);
      enemies.push(newEnemy);
    }
    return enemies;
  }

  /**
   * Gera um inimigo com base em um id.
   * @param id O id do inimigo (definido no JSON).
   * @returns Uma instância do Enemy ou null se não for encontrado.
   */
  public createEnemyById(id: string): Enemy | null {
    const enemyData = this.enemyTemplates.find((e) => e.id === id);
    if (enemyData) {
      return EnemyFactory.createFromData(enemyData);
    }
    return null;
  }
}
