"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattleView = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
class BattleView {
    constructor(player, enemy) {
        this._player = null;
        this._enemy = null;
        this._player = player;
        this._enemy = enemy;
    }
    displayBattleStart() {
        console.log("Battle started between", this._player, "and", this._enemy);
    }
    displayBattleEnd() {
        console.log("Battle ended between", this._player, "and", this._enemy);
    }
    displayWinner(winner) {
        console.log(`O vencedor é: ${winner.name}`);
    }
    choiceAttack() {
        console.log(`Escolha uma ação:\n1. Atacar\n2. Curar`);
        return readline_sync_1.default.question("Digite o número da ação: ");
    }
    displayPlayerStatus() {
        if (this._player) {
            console.log(`Status do Jogador: ${this._player.name} - Vida: ${this._player.hp}`);
        }
    }
    displayEnemyStatus() {
        if (this._enemy) {
            console.log(`Status do Inimigo: ${this._enemy.name} - Vida: ${this._enemy.hp}`);
        }
    }
    displayBossFight(boss) {
        console.log(`Você está enfrentando o chefe: ${boss.name}`);
    }
    displayBattleTurn() {
        console.clear();
        this.displayPlayerStatus();
        this.displayEnemyStatus();
        console.log("=================================");
    }
}
exports.BattleView = BattleView;
