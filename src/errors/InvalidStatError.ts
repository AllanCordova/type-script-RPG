import { GameError } from "./GameError";

export class InvalidStatError extends GameError {
  constructor(message: string) {
    super(message);
  }
}
