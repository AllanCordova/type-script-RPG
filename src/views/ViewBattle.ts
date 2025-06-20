import { Player } from "../models/Player";
import Persons from "../models/Persons";
import { ViewUtils } from "./ViewUtils";
import { ViewArt } from "./ViewArt";

import readLineSync from "readline-sync";
import chalk from "chalk";

export class ViewBattle {
  private _player: Player;
  private _enemy: Persons;

  public constructor(player: Player, enemy: Persons) {
    this._player = player;
    this._enemy = enemy;
  }

  public displayBattleStart(): void {
    console.clear();
    console.log(
      chalk.yellowBright.bold("⚔️  Batalha iniciada!"),
      `\n${chalk.cyanBright(this._player.name)} VS ${chalk.redBright(
        this._enemy.name
      )}\n`
    );
  }

  public displayWinner(winner: Persons): void {
    console.log(`\n🎉 ${chalk.greenBright.bold("Vitória!")}`);
    console.log(`🏆 O vencedor é: ${chalk.bold(winner.name)}\n`);
  }

  public displayMainBattleMenu(artEnemy: string[]): string {
    console.clear();
    this.displayFighters();
    ViewUtils.showArt(artEnemy);
    console.log(chalk.yellowBright.bold("\nEscolha uma ação:"));
    console.log(`1. ${chalk.red("Atacar")} 🔪`);
    console.log(`2. ${chalk.green("Curar")} 💊`);
    const choice = readLineSync.question(
      chalk.blue("\nDigite o número da ação: ")
    );
    console.clear();
    return choice;
  }

  public displayPlayerStatus(): void {
    if (this._player) {
      console.log(
        chalk.blueBright(
          `🧙 Jogador: ${this._player.name} - 🩸 Vida: ${this._player.hp} - 🗡️ Ataque: ${this._player.attackValue} - 🛡️ Defesa: ${this._player.defenseValue}`
        )
      );
    }
  }

  public displayEnemyStatus(): void {
    if (this._enemy) {
      console.log(
        chalk.redBright(
          `👹 Inimigo: ${this._enemy.name} - 🩸 Vida: ${this._enemy.hp} - 🗡️ Ataque: ${this._enemy.attackValue} - 🛡️ Defesa: ${this._enemy.defenseValue}`
        )
      );
    }
  }

  public displayFighters(): void {
    this.displayPlayerStatus();
    this.displayEnemyStatus();
    console.log(chalk.gray("=".repeat(40)));
  }

  private generateHpBar(current: number, max: number, barLength = 20): string {
    const percentage = current / max;
    const limitedPercentage = Math.min(percentage, 1);
    const filledLength = Math.round(limitedPercentage * barLength);
    const emptyLength = barLength - filledLength;

    const filledBarChar = "█";
    const emptyBarChar = "░";

    const filledBar = chalk.greenBright(filledBarChar.repeat(filledLength));
    const emptyBar = chalk.gray(emptyBarChar.repeat(emptyLength));

    return `${current}/${max}  ${filledBar}${emptyBar}`;
  }

  public displayBattleStatus(): void {
    console.log(`\n${chalk.magentaBright.bold("📊 Status da Batalha")}\n`);

    const player = this._player;
    const enemy = this._enemy;

    const playerBox = `
╔════════════════════════════════════════════╗
║ ${chalk.bold(ViewUtils.alignText("🧙 Jogador", 43))}║
║ Nome:   ${chalk.greenBright(ViewUtils.alignText(player.name, 35))}║
║ HP:     ${ViewUtils.alignText(
      this.generateHpBar(player.hp, player.maxHp),
      35
    )}║
║ DEF:    ${chalk.green(
      ViewUtils.alignText(player.defenseValue.toString(), 35)
    )}║
╚════════════════════════════════════════════╝`;

    const enemyBox = `
╔════════════════════════════════════════════╗
║ ${chalk.bold(ViewUtils.alignText("👹 Inimigo", 43))}║
║ Nome:   ${chalk.redBright(ViewUtils.alignText(enemy.name, 35))}║
║ HP:     ${ViewUtils.alignText(this.generateHpBar(enemy.hp, enemy.maxHp), 35)}║
║ DEF:    ${chalk.red(ViewUtils.alignText(enemy.defenseValue.toString(), 35))}║
╚════════════════════════════════════════════╝`;

    ViewUtils.showBorder(playerBox + "\n" + enemyBox);
    ViewUtils.isRigth();
  }

  public displayAttackStatus(): void {
    console.log(
      chalk.yellowBright(
        `🗡️ ${this._player.name} atacou ${this._enemy.name} e causou dano!`
      ) +
        `\nA vida do inimigo agora é ${chalk.redBright(
          this._enemy.hp.toString()
        )}.`
    );
  }

  public displayHealStatus(): void {
    console.log(
      chalk.greenBright(
        `💊 ${this._player.name} curou-se e recuperou pontos de vida!`
      ) + `\nSua vida agora é ${chalk.green(this._player.hp.toString())}.`
    );
  }

  public displayEnemyAttackStatus(): void {
    console.log(
      chalk.redBright(
        `👹 ${this._enemy.name} atacou ${this._player.name} e causou dano!`
      ) +
        `\nA vida do jogador agora é ${chalk.red(this._player.hp.toString())}.`
    );
  }

  public displayEnemyHealStatus(): void {
    console.log(
      chalk.cyanBright(
        `👹 ${this._enemy.name} curou-se e recuperou pontos de vida!`
      ) + `\nSua vida agora é ${chalk.cyan(this._enemy.hp.toString())}.`
    );
  }

  public displayBossFight(boss: Persons): void {
    console.clear();
    console.log(
      chalk.red.bold(`⚠️ Chefe à vista!`) +
        `\nPrepare-se para enfrentar: ${chalk.bold(boss.name)}\n`
    );
    ViewArt.showBossArt();
  }

  public displayVictory(): void {
    console.clear();
    console.log(chalk.greenBright.bold("🎉 Vitória!"));
    console.log(
      `Parabéns, ${chalk.bold(this._player.name)}! Você derrotou o inimigo.`
    );
  }

  public displayDefeat(): void {
    console.clear();
    console.log(chalk.redBright.bold("💀 Derrota!"));
    console.log(
      `Infelizmente, ${chalk.bold(
        this._player.name
      )} foi derrotado pelo inimigo.`
    );
  }

  public displayEnemyDefeat(): void {
    console.log(
      chalk.redBright.bold(`👹 ${this._enemy.name} foi derrotado!`) +
        `\nParabéns, ${chalk.bold(this._player.name)}! Você venceu a rodada.`
    );
  }

  public displayInvalidChoice(): void {
    console.log(chalk.redBright("⚠️ Opção inválida. Tente novamente."));
  }
}
