import { Enemy } from "../models/Enemy";
import { EnemyData } from "../interfaces/EnemyData";
export class EnemyFactory {
  public static createFromData(data: EnemyData): Enemy {
    return new Enemy(
      data.name,
      data.hp,
      data.attack,
      data.defense,
      data.artPath
    );
  }
}
