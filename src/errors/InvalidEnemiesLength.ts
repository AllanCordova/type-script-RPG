import { GameError } from "./GameError";

export class InvalidEnemiesLength extends GameError {
  constructor(message: string) {
    super(message);
  }
}
