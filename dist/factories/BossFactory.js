"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BossFactory = void 0;
const Boss_1 = require("../models/Boss");
class BossFactory {
    static createFromData(data) {
        return new Boss_1.Boss(data.name, data.hp, data.attack, data.defense, data.artPath);
    }
}
exports.BossFactory = BossFactory;
