import Persons from "./Persons";

export class Enemy extends Persons {
  constructor(name: string, hp: number, attack: number, defense: number) {
    super(name, hp, attack, defense);
  }

  // Inimigos podem ter comportamentos específicos no futuro
}
