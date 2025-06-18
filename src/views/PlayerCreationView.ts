import * as readlineSync from "readline-sync";

export class PlayerCreationView {
  public static askPlayerName(): string {
    let name = "";

    name = readlineSync.question("Digite o nome do seu Heroi: ");

    return name.trim();
  }
}
