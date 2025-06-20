import { readFileSync } from "fs";
import chalk from "chalk";

export class ViewArt {
  static showMenuArt(): void {
    const art: string = readFileSync("assets/menu.txt", "utf-8");
    console.log(chalk.red(art));
  }

  static showBossArt(): void {
    const art: string = readFileSync("assets/boss.txt", "utf-8");
    console.log(chalk.red(art));
  }

  static showPlayerArt(): string[] {
    const art: string = readFileSync("assets/player.txt", "utf-8");

    return chalk.greenBright(art).split("\n");
  }

  static getEnemyArt(path: string): string[] {
    const art: string = readFileSync(path, "utf-8");
    return chalk.magenta(art).split("\n");
  }
}
