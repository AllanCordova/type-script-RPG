"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewArt = void 0;
const fs_1 = require("fs");
const chalk_1 = __importDefault(require("chalk"));
class ViewArt {
    static showMenuArt() {
        const art = (0, fs_1.readFileSync)("assets/menu.txt", "utf-8");
        console.log(chalk_1.default.red(art));
    }
    static showBossArt() {
        const art = (0, fs_1.readFileSync)("assets/boss.txt", "utf-8");
        console.log(chalk_1.default.red(art));
    }
    static showPlayerArt() {
        const art = (0, fs_1.readFileSync)("assets/player.txt", "utf-8");
        return chalk_1.default.greenBright(art).split("\n");
    }
    static getEnemyArt(path) {
        const art = (0, fs_1.readFileSync)(path, "utf-8");
        return chalk_1.default.magenta(art).split("\n");
    }
}
exports.ViewArt = ViewArt;
