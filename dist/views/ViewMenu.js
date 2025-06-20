"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewMenu = void 0;
const ViewUtils_1 = require("./ViewUtils");
const ViewArt_1 = require("./ViewArt");
const readline_sync_1 = __importDefault(require("readline-sync"));
const chalk_1 = __importDefault(require("chalk"));
class ViewMenu {
    displayMenu() {
        console.clear();
        ViewArt_1.ViewArt.showMenuArt();
        console.log("\n");
        ViewUtils_1.ViewUtils.showBorder(chalk_1.default.cyanBright.bold("Bem vindo a Myrdal RPG\nEscolha uma opção:\n1. Iniciar Jogo\n2. Sobre\n3. Sair"));
        return readline_sync_1.default.question(chalk_1.default.white("Escolha uma opção:"));
    }
    displayAbout() {
        console.log(chalk_1.default.blue("Myrdal RPG é um jogo de RPG baseado em turnos, onde você controla um personagem em batalhas contra inimigos. O jogo é inspirado em clássicos do gênero e oferece uma experiência nostálgica."));
    }
    displayExit() {
        console.log(chalk_1.default.red("Obrigado por jogar Myrdal RPG! Até a próxima!"));
    }
    displayInvalidOption() {
        console.clear();
        console.log(chalk_1.default.yellow("Opção inválida. Tente novamente."));
    }
}
exports.ViewMenu = ViewMenu;
