"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidEnemiesLength = void 0;
const GameError_1 = require("./GameError");
class InvalidEnemiesLength extends GameError_1.GameError {
    constructor(message) {
        super(message);
    }
}
exports.InvalidEnemiesLength = InvalidEnemiesLength;
