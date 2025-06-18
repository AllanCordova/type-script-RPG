import Persons from "./Persons";
import { TargetDefeatedError } from "../errors/TargetDefeatedError";

export class Boss extends Persons {
  constructor(name: string, hp: number, attack: number, defense: number) {
    super(name, hp, attack, defense);
  }

  public specialAttack(target: Persons): void {
    if (!target.isAlive) {
      throw new TargetDefeatedError(target.name);
    }
    const damage = Math.floor(this._attack * 1.5);

    target.takeDamage(damage);
  }
}
