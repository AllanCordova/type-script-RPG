"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidStatError = void 0;
const GameError_1 = require("./GameError");
class InvalidStatError extends GameError_1.GameError {
    constructor(message) {
        super(message);
    }
}
exports.InvalidStatError = InvalidStatError;
