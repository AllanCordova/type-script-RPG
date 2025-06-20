"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enemy = void 0;
const Persons_1 = __importDefault(require("./Persons"));
class Enemy extends Persons_1.default {
    constructor(name, hp, attack, defense, artPath) {
        super(name, hp, attack, defense, artPath);
    }
}
exports.Enemy = Enemy;
