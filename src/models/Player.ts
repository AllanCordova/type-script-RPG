import Persons from "./Persons";

export class Player extends Persons {
  private _xp: number;

  constructor(
    name: string,
    hp: number,
    attack: number,
    defense: number,
    artPath: string
  ) {
    super(name, hp, attack, defense, artPath);
    this._xp = 0;
  }

  public get xp(): number {
    return this._xp;
  }

  public gainXp(amount: number): void {
    this._xp += amount;
    console.log(`${this.name} ganhou ${amount} de XP!`);
  }
}
