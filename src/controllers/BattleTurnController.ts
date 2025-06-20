import { Player } from "../models/Player";
import Persons from "../models/Persons";
import { ViewBattle } from "../views/ViewBattle";
import { BattleOptions } from "../enums/BattleOptions";
import { ViewArt } from "../views/ViewArt";
import { ViewUtils } from "../views/ViewUtils";

export class BattleTurnController {
  private _player: Player;
  private _enemy: Persons;
  private _viewBattle: ViewBattle;

  public constructor(player: Player, enemy: Persons) {
    this._player = player;
    this._enemy = enemy;

    this._viewBattle = new ViewBattle(player, enemy);
  }

  public battleTurn(): void {
    try {
      while (this._player.isAlive && this._enemy.isAlive) {
        if (this._enemy.isAlive) {
          this.battleTurnChoice();
        }

        if (this._player.isAlive && this._enemy.isAlive) {
          this.enemyTurnChoice();
        }

        if (!this._enemy.isAlive) {
          this._viewBattle.displayEnemyDefeat();
        }

        this._viewBattle.displayBattleStatus();
      }

      const vencedor = this.winner();

      this._viewBattle.displayWinner(vencedor);
    } catch (error) {
      console.error(error);
    }
  }

  private winner(): Player | Persons {
    return this._player.isAlive ? this._player : this._enemy;
  }

  private battleTurnChoice(): void {
    const art = ViewArt.getEnemyArt(this._enemy.artPath);

    const choice = this._viewBattle.displayMainBattleMenu(art);
    switch (choice) {
      case BattleOptions.Attack:
        this._player.takeAttack(this._enemy);
        this._viewBattle.displayAttackStatus();
        break;
      case BattleOptions.Heal:
        this._player.heal(Math.floor(Math.random() * 10) + 1);
        this._viewBattle.displayHealStatus();
        break;
      default:
        this._viewBattle.displayInvalidChoice();
        ViewUtils.isRigth();
        return this.battleTurnChoice();
    }
  }

  private enemyTurnChoice(): void {
    const choice =
      Math.random() < 0.5 ? BattleOptions.Attack : BattleOptions.Heal;
    switch (choice) {
      case BattleOptions.Attack:
        this._enemy.takeAttack(this._player);
        this._viewBattle.displayEnemyAttackStatus();
        break;
      case BattleOptions.Heal:
        this._enemy.heal(Math.floor(Math.random() * 10) + 1);
        this._viewBattle.displayEnemyHealStatus();
        break;
      default:
        console.log("Escolha inválida.");
    }
  }
}
