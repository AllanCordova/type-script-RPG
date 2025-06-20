"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetDefeatedError = void 0;
const GameError_1 = require("./GameError");
class TargetDefeatedError extends GameError_1.GameError {
    constructor(targetName) {
        super(`O alvo ${targetName} já foi derrotado!`);
        this.name = "TargetDefeatedError";
    }
}
exports.TargetDefeatedError = TargetDefeatedError;
