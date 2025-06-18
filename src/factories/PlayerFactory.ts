import { Player } from "../models/Player";

export class PlayerFactory {
  /**
   * Cria um novo Player com stats padrão para um herói iniciante.
   * @param name O nome do jogador, fornecido pelo usuário.
   * @returns Uma instância da classe Player.
   */
  public static createDefaultPlayer(name: string): Player {
    const initialHp = 100;
    const initialAttack = 15;
    const initialDefense = 10;

    return new Player(name, initialHp, initialAttack, initialDefense);
  }
}
