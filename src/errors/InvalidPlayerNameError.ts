import { GameError } from "./GameError";

export class InvalidPlayerNameError extends GameError {
  constructor(message: string) {
    super(message);
  }
}
