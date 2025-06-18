import { Enemy } from "../models/Enemy";
import { EnemyData } from "../interfaces/EnemyData";
export class EnemyFactory {
  /**
   * Cria uma instância de Enemy a partir de um objeto de dados.
   * @param data O objeto contendo os stats do inimigo (vindo do JSON).
   * @returns Uma instância da classe Enemy.
   */
  public static createFromData(data: EnemyData): Enemy {
    return new Enemy(data.name, data.hp, data.attack, data.defense);
  }
}
