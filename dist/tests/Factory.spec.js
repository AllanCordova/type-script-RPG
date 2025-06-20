"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PlayerFactory_1 = require("../factories/PlayerFactory");
const EnemyFactory_1 = require("../factories/EnemyFactory");
const BossFactory_1 = require("../factories/BossFactory");
const Player_1 = require("../models/Player");
const Enemy_1 = require("../models/Enemy");
const Boss_1 = require("../models/Boss");
const DefaultPlayerStat_1 = require("../enums/DefaultPlayerStat");
describe("PlayerFactory", () => {
    it("should create a Player with default stats", () => {
        const name = "Hero";
        const player = PlayerFactory_1.PlayerFactory.createDefaultPlayer(name);
        expect(player).toBeInstanceOf(Player_1.Player);
        expect(player.name).toBe(name);
        expect(player.hp).toBe(DefaultPlayerStat_1.DefaultPlayerStat.Hp);
        expect(player.attackValue).toBe(DefaultPlayerStat_1.DefaultPlayerStat.Attack);
        expect(player.defenseValue).toBe(DefaultPlayerStat_1.DefaultPlayerStat.Defense);
        expect(player.artPath).toBe(DefaultPlayerStat_1.DefaultPlayerStat.ArtPath);
    });
});
describe("EnemyFactory", () => {
    it("should create an Enemy from data", () => {
        const data = {
            id: "goblin",
            name: "Goblin",
            hp: 30,
            attack: 5,
            defense: 2,
            isBoss: false,
            artPath: "goblin.png",
        };
        const enemy = EnemyFactory_1.EnemyFactory.createFromData(data);
        expect(enemy).toBeInstanceOf(Enemy_1.Enemy);
        expect(enemy.name).toBe(data.name);
        expect(enemy.hp).toBe(data.hp);
        expect(enemy.attackValue).toBe(data.attack);
        expect(enemy.defenseValue).toBe(data.defense);
        expect(enemy.artPath).toBe(data.artPath);
    });
});
describe("BossFactory", () => {
    it("should create a Boss from data", () => {
        const data = {
            id: "dragon",
            name: "Dragon",
            hp: 300,
            attack: 50,
            defense: 20,
            isBoss: true,
            artPath: "dragon.png",
        };
        const boss = BossFactory_1.BossFactory.createFromData(data);
        expect(boss).toBeInstanceOf(Boss_1.Boss);
        expect(boss.name).toBe(data.name);
        expect(boss.hp).toBe(data.hp);
        expect(boss.attackValue).toBe(data.attack);
        expect(boss.defenseValue).toBe(data.defense);
        expect(boss.artPath).toBe(data.artPath);
    });
});
