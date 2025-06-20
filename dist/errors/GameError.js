"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameError = void 0;
class GameError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
exports.GameError = GameError;
