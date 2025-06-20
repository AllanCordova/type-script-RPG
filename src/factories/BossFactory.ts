import { Boss } from "../models/Boss";
import { EnemyData } from "../interfaces/EnemyData";

export class BossFactory {
  public static createFromData(data: EnemyData): Boss {
    return new Boss(
      data.name,
      data.hp,
      data.attack,
      data.defense,
      data.artPath
    );
  }
}
