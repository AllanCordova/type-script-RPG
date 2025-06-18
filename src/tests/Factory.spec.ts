import { PlayerFactory } from "../factories/PlayerFactory";
import { EnemyFactory } from "../factories/EnemyFactory";
import { Player } from "../models/Player";
import { Enemy } from "../models/Enemy";
import enemyDatabase from "../data/enemies.json";

describe("Player Factory Tests", () => {
  it("verify return of metodo PlayerFactory", () => {
    const player: Player = PlayerFactory.createDefaultPlayer("Allan");
    expect(player).toBe(player);
  });

  it("verify return of metodo EnemyFactory", () => {
    const enemy: Enemy = EnemyFactory.createFromData(enemyDatabase[0]);
    expect(enemy).toBe(enemy);
  });
});
