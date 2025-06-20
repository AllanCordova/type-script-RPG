import { Player } from "../models/Player";
import { DefaultPlayerStat } from "../enums/DefaultPlayerStat";

export class PlayerFactory {
  public static createDefaultPlayer(name: string): Player {
    const initialHp = DefaultPlayerStat.Hp;
    const initialAttack = DefaultPlayerStat.Attack;
    const initialDefense = DefaultPlayerStat.Defense;
    const initialArthPath = DefaultPlayerStat.ArtPath;

    return new Player(
      name,
      initialHp,
      initialAttack,
      initialDefense,
      initialArthPath
    );
  }
}
