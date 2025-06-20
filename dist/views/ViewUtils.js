"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewUtils = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
const chalk_1 = __importDefault(require("chalk"));
const ViewArt_1 = require("./ViewArt");
class ViewUtils {
    static isRigth() {
        readline_sync_1.default.question("Pressione Enter para continuar...");
    }
    static displayMessage(message) {
        console.log(message);
    }
    static clearConsole() {
        console.clear();
    }
    static alignText(text, length) {
        return text + " ".repeat(Math.max(0, length - text.length));
    }
    static showBorder(text) {
        console.log(chalk_1.default.yellow("================================="));
        console.log(text);
        console.log(chalk_1.default.yellow("================================="));
    }
    static showArt(enemy) {
        const player = ViewArt_1.ViewArt.showPlayerArt();
        const range = Math.max(player.length, enemy.length);
        let art = "";
        for (let i = 0; i < range; i++) {
            const linhaPlayer = (player[i] || "").padEnd(50, " ");
            const linhaEnemy = enemy[i] || "";
            art += `${linhaPlayer} ${linhaEnemy}\n`;
        }
        console.log(art);
    }
}
exports.ViewUtils = ViewUtils;
