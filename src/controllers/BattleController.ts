import { InvalidEnemiesLength } from "../errors/InvalidEnemiesLength";
import { InvalidStatError } from "../errors/InvalidStatError";
import { Player } from "../models/Player";
import { Enemy } from "../models/Enemy";
import { Boss } from "../models/Boss";
import { BattleTurnController } from "./BattleTurnController";
import { ViewBattle } from "../views/ViewBattle";
import { ViewUtils } from "../views/ViewUtils";

export class BattleController {
  private _battleTurn!: BattleTurnController;
  private _player: Player;
  private _enemy: Enemy[];
  private _boss: Boss[];
  private _viewBattle: ViewBattle;

  public constructor(player: Player, enemy: Enemy[], boss: Boss[]) {
    if (!player.isAlive) {
      throw new InvalidStatError("O jogador fornecido é inválido");
    }
    if (enemy.length < 1) {
      throw new InvalidEnemiesLength(
        "Não é possível iniciar uma batalha sem inimigos."
      );
    }

    if (enemy.some((e) => !e.isAlive)) {
      throw new InvalidStatError(
        "Alguns inimigos fornecidos já foram derrotados."
      );
    }

    if (boss.length < 1) {
      throw new InvalidEnemiesLength(
        "Não é possível iniciar uma batalha sem chefes."
      );
    }

    if (boss.some((b) => !b.isAlive)) {
      throw new InvalidStatError(
        "Alguns chefes fornecidos já foram derrotados."
      );
    }

    this._player = player;
    this._enemy = enemy;
    this._boss = boss;
    this._viewBattle = new ViewBattle(this._player, this._enemy[0]);
  }

  public startBattle(): void {
    try {
      this.roundSetup();
    } catch (error) {
      console.error(error);
    }
  }

  private roundSetup(): void {
    for (let index = 0; index < this._boss.length; index++) {
      for (let j = 0; j < this._enemy.length; j++) {
        this._battleTurn = new BattleTurnController(
          this._player,
          this._enemy[j]
        );

        this.roundStart();
      }

      this._viewBattle.displayBossFight(this._boss[index]);
      ViewUtils.isRigth();

      this._battleTurn = new BattleTurnController(
        this._player,
        this._boss[index]
      );

      this.roundStart();
    }

    if (this._player.isAlive) {
      this._viewBattle.displayVictory();
    } else {
      this._viewBattle.displayDefeat();
    }
  }

  private roundStart(): void {
    this._battleTurn.battleTurn();
  }
}
