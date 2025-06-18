import { Enemy } from "../models/Enemy";
import { Player } from "../models/Player";
import { Boss } from "../models/Boss";
import { InvalidStatError } from "../errors/InvalidStatError";

describe("Enemy (extending Persons)", () => {
  // Teste de criação e getters
  it("should create an enemy with correct initial stats", () => {
    const goblin = new Enemy("Goblin", 50, 10, 5);
    expect(goblin.name).toBe("Goblin");
    expect(goblin.hp).toBe(50);
    expect(goblin.maxHp).toBe(50);
    expect(goblin.attackValue).toBe(10);
    expect(goblin.defenseValue).toBe(5);
    expect(goblin.isAlive).toBe(true);
  });

  it("should throw InvalidStatError for non-positive initial stats", () => {
    expect(() => new Enemy("Fantasma", 0, 10, 5)).toThrow(InvalidStatError);
    expect(() => new Enemy("Fantasma", 50, 0, 5)).toThrow(InvalidStatError);
  });

  // Teste de métodos
  describe("takeDamage", () => {
    it("should reduce HP correctly when taking damage", () => {
      const orc = new Enemy("Orc", 100, 15, 8);
      orc.takeDamage(20);
      expect(orc.hp).toBe(80);
    });

    it("should not let HP go below zero", () => {
      const orc = new Enemy("Orc", 20, 15, 8);
      orc.takeDamage(50);
      expect(orc.hp).toBe(0);
    });

    it("should update isAlive to false when HP reaches 0", () => {
      const orc = new Enemy("Orc", 20, 15, 8);
      orc.takeDamage(20);
      expect(orc.isAlive).toBe(false);
    });
  });

  describe("heal", () => {
    it("should restore HP correctly", () => {
      const troll = new Enemy("Troll", 100, 20, 12);
      troll.takeDamage(50); // HP is 50
      troll.heal(30);
      expect(troll.hp).toBe(80);
    });

    it("should not heal above maxHp", () => {
      const troll = new Enemy("Troll", 100, 20, 12);
      troll.takeDamage(10); // HP is 90
      troll.heal(30);
      expect(troll.hp).toBe(100);
    });
  });

  describe("attack", () => {
    it("should make the target take the correct amount of damage", () => {
      const knight = new Player("Sir Lancelot", 100, 20, 15);
      const dragon = new Boss("Smaug", 200, 25, 10);

      // Criamos um "spy" no método takeDamage do alvo para verificar se ele é chamado corretamente
      const takeDamageSpy = jest.spyOn(dragon, "takeDamage");

      knight.attack(dragon);

      // Dano esperado = 20 (ataque do cavaleiro) - 10 (defesa do dragão) = 10
      expect(takeDamageSpy).toHaveBeenCalledWith(10);

      // Limpa o spy
      takeDamageSpy.mockRestore();
    });
  });
});
