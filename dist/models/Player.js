"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const Persons_1 = __importDefault(require("./Persons"));
class Player extends Persons_1.default {
    constructor(name, hp, attack, defense, artPath) {
        super(name, hp, attack, defense, artPath);
        this._xp = 0;
    }
    get xp() {
        return this._xp;
    }
    gainXp(amount) {
        this._xp += amount;
        console.log(`${this.name} ganhou ${amount} de XP!`);
    }
}
exports.Player = Player;
