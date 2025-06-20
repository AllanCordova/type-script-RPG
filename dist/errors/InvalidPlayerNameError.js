"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidPlayerNameError = void 0;
const GameError_1 = require("./GameError");
class InvalidPlayerNameError extends GameError_1.GameError {
    constructor(message) {
        super(message);
    }
}
exports.InvalidPlayerNameError = InvalidPlayerNameError;
