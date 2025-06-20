import { Enemy } from "../models/Enemy";
import { Player } from "../models/Player";
import { Boss } from "../models/Boss";
import { EnemyController } from "./EnemyController";
import { PlayerController } from "./PlayerController";

export class PersonController {
  private _enemyController: EnemyController;
  private _playerController: PlayerController;

  public constructor() {
    this._enemyController = new EnemyController();
    this._playerController = new PlayerController();
  }

  public get player(): Player {
    return this._playerController.createPlayer();
  }

  public get enemy(): Enemy[] {
    return this._enemyController.createRandomEnemies(5);
  }

  public get boss(): Boss[] {
    return this._enemyController.createBossEnemy();
  }
}
