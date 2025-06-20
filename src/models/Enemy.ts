import Persons from "./Persons";

export class Enemy extends Persons {
  constructor(
    name: string,
    hp: number,
    attack: number,
    defense: number,
    artPath: string
  ) {
    super(name, hp, attack, defense, artPath);
  }
}
