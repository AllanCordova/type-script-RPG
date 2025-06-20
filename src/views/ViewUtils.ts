import readLineSync from "readline-sync";
import chalk from "chalk";
import { ViewArt } from "./ViewArt";

export class ViewUtils {
  public static isRigth(): void {
    readLineSync.question("Pressione Enter para continuar...");
  }

  public static displayMessage(message: string): void {
    console.log(message);
  }

  public static clearConsole(): void {
    console.clear();
  }

  static alignText(text: string, length: number): string {
    return text + " ".repeat(Math.max(0, length - text.length));
  }

  static showBorder(text: string): void {
    console.log(chalk.yellow("================================="));
    console.log(text);
    console.log(chalk.yellow("================================="));
  }

  static showArt(enemy: string[]): void {
    const player = ViewArt.showPlayerArt();

    const range: number = Math.max(player.length, enemy.length);
    let art: string = "";

    for (let i: number = 0; i < range; i++) {
      const linhaPlayer = (player[i] || "").padEnd(50, " ");
      const linhaEnemy = enemy[i] || "";
      art += `${linhaPlayer} ${linhaEnemy}\n`;
    }

    console.log(art);
  }
}
