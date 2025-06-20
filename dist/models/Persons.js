"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InvalidStatError_1 = require("../errors/InvalidStatError");
const TargetDefeatedError_1 = require("../errors/TargetDefeatedError");
class Persons {
    constructor(name, hp, attack, defense, artPath) {
        if (hp <= 0 || attack <= 0 || defense < 0) {
            throw new InvalidStatError_1.InvalidStatError("Stats must be positive values.");
        }
        this._name = name;
        this._maxHp = hp;
        this._hp = hp;
        this._attack = attack;
        this._defense = defense;
        this._artPath = artPath;
    }
    get name() {
        return this._name;
    }
    get hp() {
        return this._hp;
    }
    get maxHp() {
        return this._maxHp;
    }
    get attackValue() {
        return this._attack;
    }
    get defenseValue() {
        return this._defense;
    }
    get isAlive() {
        return this._hp > 0;
    }
    get artPath() {
        return this._artPath;
    }
    takeAttack(target) {
        if (!target.isAlive) {
            throw new TargetDefeatedError_1.TargetDefeatedError(target._name);
        }
        const damage = Math.max(1, this._attack - target.defenseValue);
        target.takeDamage(damage);
    }
    takeDamage(amount) {
        this._hp -= amount;
        if (this._hp < 0) {
            this._hp = 0;
        }
        if (!this.isAlive) {
        }
    }
    heal(amount) {
        this._hp += amount;
        if (this._hp > this._maxHp) {
            this._hp = this._maxHp;
        }
    }
}
exports.default = Persons;
