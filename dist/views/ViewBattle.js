"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewBattle = void 0;
const ViewUtils_1 = require("./ViewUtils");
const ViewArt_1 = require("./ViewArt");
const readline_sync_1 = __importDefault(require("readline-sync"));
const chalk_1 = __importDefault(require("chalk"));
class ViewBattle {
    constructor(player, enemy) {
        this._player = player;
        this._enemy = enemy;
    }
    displayBattleStart() {
        console.clear();
        console.log(chalk_1.default.yellowBright.bold("⚔️  Batalha iniciada!"), `\n${chalk_1.default.cyanBright(this._player.name)} VS ${chalk_1.default.redBright(this._enemy.name)}\n`);
    }
    displayWinner(winner) {
        console.log(`\n🎉 ${chalk_1.default.greenBright.bold("Vitória!")}`);
        console.log(`🏆 O vencedor é: ${chalk_1.default.bold(winner.name)}\n`);
    }
    displayMainBattleMenu(artEnemy) {
        console.clear();
        this.displayFighters();
        ViewUtils_1.ViewUtils.showArt(artEnemy);
        console.log(chalk_1.default.yellowBright.bold("\nEscolha uma ação:"));
        console.log(`1. ${chalk_1.default.red("Atacar")} 🔪`);
        console.log(`2. ${chalk_1.default.green("Curar")} 💊`);
        const choice = readline_sync_1.default.question(chalk_1.default.blue("\nDigite o número da ação: "));
        console.clear();
        return choice;
    }
    displayPlayerStatus() {
        if (this._player) {
            console.log(chalk_1.default.blueBright(`🧙 Jogador: ${this._player.name} - 🩸 Vida: ${this._player.hp} - 🗡️ Ataque: ${this._player.attackValue} - 🛡️ Defesa: ${this._player.defenseValue}`));
        }
    }
    displayEnemyStatus() {
        if (this._enemy) {
            console.log(chalk_1.default.redBright(`👹 Inimigo: ${this._enemy.name} - 🩸 Vida: ${this._enemy.hp} - 🗡️ Ataque: ${this._enemy.attackValue} - 🛡️ Defesa: ${this._enemy.defenseValue}`));
        }
    }
    displayFighters() {
        this.displayPlayerStatus();
        this.displayEnemyStatus();
        console.log(chalk_1.default.gray("=".repeat(40)));
    }
    generateHpBar(current, max, barLength = 20) {
        const percentage = current / max;
        const limitedPercentage = Math.min(percentage, 1);
        const filledLength = Math.round(limitedPercentage * barLength);
        const emptyLength = barLength - filledLength;
        const filledBarChar = "█";
        const emptyBarChar = "░";
        const filledBar = chalk_1.default.greenBright(filledBarChar.repeat(filledLength));
        const emptyBar = chalk_1.default.gray(emptyBarChar.repeat(emptyLength));
        return `${current}/${max}  ${filledBar}${emptyBar}`;
    }
    displayBattleStatus() {
        console.log(`\n${chalk_1.default.magentaBright.bold("📊 Status da Batalha")}\n`);
        const player = this._player;
        const enemy = this._enemy;
        const playerBox = `
╔════════════════════════════════════════════╗
║ ${chalk_1.default.bold(ViewUtils_1.ViewUtils.alignText("🧙 Jogador", 43))}║
║ Nome:   ${chalk_1.default.greenBright(ViewUtils_1.ViewUtils.alignText(player.name, 35))}║
║ HP:     ${ViewUtils_1.ViewUtils.alignText(this.generateHpBar(player.hp, player.maxHp), 35)}║
║ DEF:    ${chalk_1.default.green(ViewUtils_1.ViewUtils.alignText(player.defenseValue.toString(), 35))}║
╚════════════════════════════════════════════╝`;
        const enemyBox = `
╔════════════════════════════════════════════╗
║ ${chalk_1.default.bold(ViewUtils_1.ViewUtils.alignText("👹 Inimigo", 43))}║
║ Nome:   ${chalk_1.default.redBright(ViewUtils_1.ViewUtils.alignText(enemy.name, 35))}║
║ HP:     ${ViewUtils_1.ViewUtils.alignText(this.generateHpBar(enemy.hp, enemy.maxHp), 35)}║
║ DEF:    ${chalk_1.default.red(ViewUtils_1.ViewUtils.alignText(enemy.defenseValue.toString(), 35))}║
╚════════════════════════════════════════════╝`;
        ViewUtils_1.ViewUtils.showBorder(playerBox + "\n" + enemyBox);
        ViewUtils_1.ViewUtils.isRigth();
    }
    displayAttackStatus() {
        console.log(chalk_1.default.yellowBright(`🗡️ ${this._player.name} atacou ${this._enemy.name} e causou dano!`) +
            `\nA vida do inimigo agora é ${chalk_1.default.redBright(this._enemy.hp.toString())}.`);
    }
    displayHealStatus() {
        console.log(chalk_1.default.greenBright(`💊 ${this._player.name} curou-se e recuperou pontos de vida!`) + `\nSua vida agora é ${chalk_1.default.green(this._player.hp.toString())}.`);
    }
    displayEnemyAttackStatus() {
        console.log(chalk_1.default.redBright(`👹 ${this._enemy.name} atacou ${this._player.name} e causou dano!`) +
            `\nA vida do jogador agora é ${chalk_1.default.red(this._player.hp.toString())}.`);
    }
    displayEnemyHealStatus() {
        console.log(chalk_1.default.cyanBright(`👹 ${this._enemy.name} curou-se e recuperou pontos de vida!`) + `\nSua vida agora é ${chalk_1.default.cyan(this._enemy.hp.toString())}.`);
    }
    displayBossFight(boss) {
        console.clear();
        console.log(chalk_1.default.red.bold(`⚠️ Chefe à vista!`) +
            `\nPrepare-se para enfrentar: ${chalk_1.default.bold(boss.name)}\n`);
        ViewArt_1.ViewArt.showBossArt();
    }
    displayVictory() {
        console.clear();
        console.log(chalk_1.default.greenBright.bold("🎉 Vitória!"));
        console.log(`Parabéns, ${chalk_1.default.bold(this._player.name)}! Você derrotou o inimigo.`);
    }
    displayDefeat() {
        console.clear();
        console.log(chalk_1.default.redBright.bold("💀 Derrota!"));
        console.log(`Infelizmente, ${chalk_1.default.bold(this._player.name)} foi derrotado pelo inimigo.`);
    }
    displayEnemyDefeat() {
        console.log(chalk_1.default.redBright.bold(`👹 ${this._enemy.name} foi derrotado!`) +
            `\nParabéns, ${chalk_1.default.bold(this._player.name)}! Você venceu a rodada.`);
    }
    displayInvalidChoice() {
        console.log(chalk_1.default.redBright("⚠️ Opção inválida. Tente novamente."));
    }
}
exports.ViewBattle = ViewBattle;
