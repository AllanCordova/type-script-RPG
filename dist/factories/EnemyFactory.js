"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnemyFactory = void 0;
const Enemy_1 = require("../models/Enemy");
class EnemyFactory {
    static createFromData(data) {
        return new Enemy_1.Enemy(data.name, data.hp, data.attack, data.defense, data.artPath);
    }
}
exports.EnemyFactory = EnemyFactory;
