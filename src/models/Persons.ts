import { InvalidStatError } from "../errors/InvalidStatError";
import { TargetDefeatedError } from "../errors/TargetDefeatedError";

export default abstract class Persons {
  protected _name: string;
  protected _hp: number;
  protected _maxHp: number;
  protected _attack: number;
  protected _defense: number;

  constructor(name: string, hp: number, attack: number, defense: number) {
    if (hp <= 0 || attack <= 0 || defense < 0) {
      throw new InvalidStatError("Stats must be positive values.");
    }

    this._name = name;
    this._maxHp = hp;
    this._hp = hp;
    this._attack = attack;
    this._defense = defense;
  }

  public get name(): string {
    return this._name;
  }

  public get hp(): number {
    return this._hp;
  }

  public get maxHp(): number {
    return this._maxHp;
  }

  public get attackValue(): number {
    return this._attack;
  }

  public get defenseValue(): number {
    return this._defense;
  }

  public get isAlive(): boolean {
    return this._hp > 0;
  }

  /**
   * Ataca um alvo. A lógica do dano é calculada aqui.
   * @param target O Persons que será atacado.
   */
  public attack(target: Persons): void {
    if (!target.isAlive) {
      throw new TargetDefeatedError(target.name);
      return;
    }

    // Fórmula de dano simples: Ataque do atacante - Defesa do alvo
    const damage = Math.max(1, this._attack - target.defenseValue);
    target.takeDamage(damage);
  }

  /**
   * Reduz o HP da pessoa baseado no dano recebido.
   * @param amount A quantidade de dano.
   */
  public takeDamage(amount: number): void {
    this._hp -= amount;
    if (this._hp < 0) {
      this._hp = 0;
    }

    if (!this.isAlive) {
    }
  }

  /**
   * Cura a pessoa, restaurando HP.
   * @param amount A quantidade de HP a ser restaurada.
   */
  public heal(amount: number): void {
    this._hp += amount;
    if (this._hp > this._maxHp) {
      this._hp = this._maxHp;
    }
  }
}
