"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattleTurnController = void 0;
const ViewBattle_1 = require("../views/ViewBattle");
const BattleOptions_1 = require("../enums/BattleOptions");
const ViewArt_1 = require("../views/ViewArt");
const ViewUtils_1 = require("../views/ViewUtils");
class BattleTurnController {
    constructor(player, enemy) {
        this._player = player;
        this._enemy = enemy;
        this._viewBattle = new ViewBattle_1.ViewBattle(player, enemy);
    }
    battleTurn() {
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
        }
        catch (error) {
            console.error(error);
        }
    }
    winner() {
        return this._player.isAlive ? this._player : this._enemy;
    }
    battleTurnChoice() {
        const art = ViewArt_1.ViewArt.getEnemyArt(this._enemy.artPath);
        const choice = this._viewBattle.displayMainBattleMenu(art);
        switch (choice) {
            case BattleOptions_1.BattleOptions.Attack:
                this._player.takeAttack(this._enemy);
                this._viewBattle.displayAttackStatus();
                break;
            case BattleOptions_1.BattleOptions.Heal:
                this._player.heal(Math.floor(Math.random() * 10) + 1);
                this._viewBattle.displayHealStatus();
                break;
            default:
                this._viewBattle.displayInvalidChoice();
                ViewUtils_1.ViewUtils.isRigth();
                return this.battleTurnChoice();
        }
    }
    enemyTurnChoice() {
        const choice = Math.random() < 0.5 ? BattleOptions_1.BattleOptions.Attack : BattleOptions_1.BattleOptions.Heal;
        switch (choice) {
            case BattleOptions_1.BattleOptions.Attack:
                this._enemy.takeAttack(this._player);
                this._viewBattle.displayEnemyAttackStatus();
                break;
            case BattleOptions_1.BattleOptions.Heal:
                this._enemy.heal(Math.floor(Math.random() * 10) + 1);
                this._viewBattle.displayEnemyHealStatus();
                break;
            default:
                console.log("Escolha inválida.");
        }
    }
}
exports.BattleTurnController = BattleTurnController;
