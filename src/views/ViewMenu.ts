import { ViewUtils } from "./ViewUtils";
import { ViewArt } from "./ViewArt";
import readLineSync from "readline-sync";
import chalk from "chalk";

export class ViewMenu {
  public displayMenu(): string {
    console.clear();
    ViewArt.showMenuArt();
    console.log("\n");
    ViewUtils.showBorder(
      chalk.cyanBright.bold(
        "Bem vindo a Myrdal RPG\nEscolha uma opção:\n1. Iniciar Jogo\n2. Sobre\n3. Sair"
      )
    );
    return readLineSync.question(chalk.white("Escolha uma opção:"));
  }

  public displayAbout(): void {
    console.log(
      chalk.blue(
        "Myrdal RPG é um jogo de RPG baseado em turnos, onde você controla um personagem em batalhas contra inimigos. O jogo é inspirado em clássicos do gênero e oferece uma experiência nostálgica."
      )
    );
  }

  public displayExit(): void {
    console.log(chalk.red("Obrigado por jogar Myrdal RPG! Até a próxima!"));
  }

  public displayInvalidOption(): void {
    console.clear();
    console.log(chalk.yellow("Opção inválida. Tente novamente."));
  }
}
