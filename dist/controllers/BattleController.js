"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattleController = void 0;
const InvalidEnemiesLength_1 = require("../errors/InvalidEnemiesLength");
const InvalidStatError_1 = require("../errors/InvalidStatError");
const BattleTurnController_1 = require("./BattleTurnController");
const ViewBattle_1 = require("../views/ViewBattle");
const ViewUtils_1 = require("../views/ViewUtils");
class BattleController {
    constructor(player, enemy, boss) {
        if (!player.isAlive) {
            throw new InvalidStatError_1.InvalidStatError("O jogador fornecido é inválido");
        }
        if (enemy.length < 1) {
            throw new InvalidEnemiesLength_1.InvalidEnemiesLength("Não é possível iniciar uma batalha sem inimigos.");
        }
        if (enemy.some((e) => !e.isAlive)) {
            throw new InvalidStatError_1.InvalidStatError("Alguns inimigos fornecidos já foram derrotados.");
        }
        if (boss.length < 1) {
            throw new InvalidEnemiesLength_1.InvalidEnemiesLength("Não é possível iniciar uma batalha sem chefes.");
        }
        if (boss.some((b) => !b.isAlive)) {
            throw new InvalidStatError_1.InvalidStatError("Alguns chefes fornecidos já foram derrotados.");
        }
        this._player = player;
        this._enemy = enemy;
        this._boss = boss;
        this._viewBattle = new ViewBattle_1.ViewBattle(this._player, this._enemy[0]);
    }
    startBattle() {
        try {
            this.roundSetup();
        }
        catch (error) {
            console.error(error);
        }
    }
    roundSetup() {
        for (let index = 0; index < this._boss.length; index++) {
            for (let j = 0; j < this._enemy.length; j++) {
                this._battleTurn = new BattleTurnController_1.BattleTurnController(this._player, this._enemy[j]);
                this.roundStart();
            }
            this._viewBattle.displayBossFight(this._boss[index]);
            ViewUtils_1.ViewUtils.isRigth();
            this._battleTurn = new BattleTurnController_1.BattleTurnController(this._player, this._boss[index]);
            this.roundStart();
        }
        if (this._player.isAlive) {
            this._viewBattle.displayVictory();
        }
        else {
            this._viewBattle.displayDefeat();
        }
    }
    roundStart() {
        this._battleTurn.battleTurn();
    }
}
exports.BattleController = BattleController;
