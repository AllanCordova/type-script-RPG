import { Player } from "../models/Player";
import { PlayerFactory } from "../factories/PlayerFactory";
import { PlayerCreationView } from "../views/PlayerCreationView";
import { InvalidPlayerNameError } from "../errors/InvalidPlayerNameError";

export class PlayerController {
  public createPlayer(): Player {
    const name = PlayerCreationView.askPlayerName();
    if (name.trim() === "") return this.createPlayer();

    if (name.length < 3) {
      throw new InvalidPlayerNameError(
        "O nome do heroi deve ter pelo menos 3 caracteres."
      );
    }

    const player = PlayerFactory.createDefaultPlayer(name);

    return player;
  }
}
