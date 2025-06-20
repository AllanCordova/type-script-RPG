import { GameError } from "./GameError";

export class TargetDefeatedError extends GameError {
  constructor(targetName: string) {
    super(`O alvo ${targetName} já foi derrotado!`);
    this.name = "TargetDefeatedError";
  }
}
