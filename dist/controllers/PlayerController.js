"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerController = void 0;
const PlayerFactory_1 = require("../factories/PlayerFactory");
const PlayerCreationView_1 = require("../views/PlayerCreationView");
const InvalidPlayerNameError_1 = require("../errors/InvalidPlayerNameError");
class PlayerController {
    createPlayer() {
        const name = PlayerCreationView_1.PlayerCreationView.askPlayerName();
        if (name.trim() === "")
            return this.createPlayer();
        if (name.length < 3) {
            throw new InvalidPlayerNameError_1.InvalidPlayerNameError("O nome do heroi deve ter pelo menos 3 caracteres.");
        }
        const player = PlayerFactory_1.PlayerFactory.createDefaultPlayer(name);
        return player;
    }
}
exports.PlayerController = PlayerController;
