"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnemyController = void 0;
const EnemyFactory_1 = require("../factories/EnemyFactory");
const BossFactory_1 = require("../factories/BossFactory");
const enemies_json_1 = __importDefault(require("../data/enemies.json"));
const InvalidEnemiesLength_1 = require("../errors/InvalidEnemiesLength");
class EnemyController {
    constructor() {
        this.enemyTemplates = enemies_json_1.default;
    }
    createRandomEnemies(count) {
        const enemies = [];
        if (count < 1) {
            throw new InvalidEnemiesLength_1.InvalidEnemiesLength("should throw InvalidEnemiesLength if enemies array is empty");
        }
        for (let i = 0; i < count; i++) {
            const enemys = this.enemyTemplates.filter((e) => !e.isBoss);
            if (enemys.length === 0) {
                throw new InvalidEnemiesLength_1.InvalidEnemiesLength("No valid enemy templates available.");
            }
            const randomIndex = Math.floor(Math.random() * enemys.length);
            const randomEnemyData = enemys[randomIndex];
            const newEnemy = EnemyFactory_1.EnemyFactory.createFromData(randomEnemyData);
            enemies.push(newEnemy);
        }
        return enemies;
    }
    createEnemyById(id) {
        const enemyData = this.enemyTemplates.find((e) => e.id === id);
        if (enemyData) {
            return EnemyFactory_1.EnemyFactory.createFromData(enemyData);
        }
        return null;
    }
    createBossEnemy() {
        const bossData = this.enemyTemplates.filter((enemy) => enemy.isBoss);
        const bossEnemies = [];
        if (bossData.length > 0) {
            for (const boss of bossData) {
                const newBossEnemy = BossFactory_1.BossFactory.createFromData(boss);
                bossEnemies.push(newBossEnemy);
            }
            return bossEnemies;
        }
        throw new Error("No boss enemy found in the database.");
    }
}
exports.EnemyController = EnemyController;
