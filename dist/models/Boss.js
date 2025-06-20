"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boss = void 0;
const Persons_1 = __importDefault(require("./Persons"));
const TargetDefeatedError_1 = require("../errors/TargetDefeatedError");
class Boss extends Persons_1.default {
    constructor(name, hp, attack, defense, artPath) {
        super(name, hp, attack, defense, artPath);
    }
    specialAttack(target) {
        if (!target.isAlive) {
            throw new TargetDefeatedError_1.TargetDefeatedError(target.name);
        }
        const damage = Math.floor(this._attack * 1.5);
        target.takeDamage(damage);
    }
}
exports.Boss = Boss;
