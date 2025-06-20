"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonController = void 0;
const EnemyController_1 = require("./EnemyController");
const PlayerController_1 = require("./PlayerController");
class PersonController {
    constructor() {
        this._enemyController = new EnemyController_1.EnemyController();
        this._playerController = new PlayerController_1.PlayerController();
    }
    get player() {
        return this._playerController.createPlayer();
    }
    get enemy() {
        return this._enemyController.createRandomEnemies(5);
    }
    get boss() {
        return this._enemyController.createBossEnemy();
    }
}
exports.PersonController = PersonController;
