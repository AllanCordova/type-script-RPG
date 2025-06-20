import { PlayerFactory } from "../factories/PlayerFactory";
import { EnemyFactory } from "../factories/EnemyFactory";
import { BossFactory } from "../factories/BossFactory";
import { Player } from "../models/Player";
import { Enemy } from "../models/Enemy";
import { Boss } from "../models/Boss";
import { DefaultPlayerStat } from "../enums/DefaultPlayerStat";
import { EnemyData } from "../interfaces/EnemyData";

describe("PlayerFactory", () => {
  it("should create a Player with default stats", () => {
    const name = "Hero";
    const player = PlayerFactory.createDefaultPlayer(name);

    expect(player).toBeInstanceOf(Player);
    expect(player.name).toBe(name);
    expect(player.hp).toBe(DefaultPlayerStat.Hp);
    expect(player.attackValue).toBe(DefaultPlayerStat.Attack);
    expect(player.defenseValue).toBe(DefaultPlayerStat.Defense);
    expect(player.artPath).toBe(DefaultPlayerStat.ArtPath);
  });
});

describe("EnemyFactory", () => {
  it("should create an Enemy from data", () => {
    const data: EnemyData = {
      id: "goblin",
      name: "Goblin",
      hp: 30,
      attack: 5,
      defense: 2,
      isBoss: false,
      artPath: "goblin.png",
    };
    const enemy = EnemyFactory.createFromData(data);

    expect(enemy).toBeInstanceOf(Enemy);
    expect(enemy.name).toBe(data.name);
    expect(enemy.hp).toBe(data.hp);
    expect(enemy.attackValue).toBe(data.attack);
    expect(enemy.defenseValue).toBe(data.defense);
    expect(enemy.artPath).toBe(data.artPath);
  });
});

describe("BossFactory", () => {
  it("should create a Boss from data", () => {
    const data: EnemyData = {
      id: "dragon",
      name: "Dragon",
      hp: 300,
      attack: 50,
      defense: 20,
      isBoss: true,
      artPath: "dragon.png",
    };
    const boss = BossFactory.createFromData(data);

    expect(boss).toBeInstanceOf(Boss);
    expect(boss.name).toBe(data.name);
    expect(boss.hp).toBe(data.hp);
    expect(boss.attackValue).toBe(data.attack);
    expect(boss.defenseValue).toBe(data.defense);
    expect(boss.artPath).toBe(data.artPath);
  });
});
