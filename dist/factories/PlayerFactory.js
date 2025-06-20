"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerFactory = void 0;
const Player_1 = require("../models/Player");
const DefaultPlayerStat_1 = require("../enums/DefaultPlayerStat");
class PlayerFactory {
    static createDefaultPlayer(name) {
        const initialHp = DefaultPlayerStat_1.DefaultPlayerStat.Hp;
        const initialAttack = DefaultPlayerStat_1.DefaultPlayerStat.Attack;
        const initialDefense = DefaultPlayerStat_1.DefaultPlayerStat.Defense;
        const initialArthPath = DefaultPlayerStat_1.DefaultPlayerStat.ArtPath;
        return new Player_1.Player(name, initialHp, initialAttack, initialDefense, initialArthPath);
    }
}
exports.PlayerFactory = PlayerFactory;
