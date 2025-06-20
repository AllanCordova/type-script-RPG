"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = void 0;
const PersonController_1 = require("./PersonController");
const BattleController_1 = require("./BattleController");
const ViewMenu_1 = require("../views/ViewMenu");
const GameMenu_1 = require("../enums/GameMenu");
const ViewUtils_1 = require("../views/ViewUtils");
class GameController {
    constructor() {
        this._personController = new PersonController_1.PersonController();
        this._viewMenu = new ViewMenu_1.ViewMenu();
    }
    gameStart() {
        switch (this._viewMenu.displayMenu()) {
            case GameMenu_1.GameMenu.StartGame:
                try {
                    const player = this._personController.player;
                    const enemy = this._personController.enemy;
                    const boss = this._personController.boss;
                    this._battleController = new BattleController_1.BattleController(player, enemy, boss);
                    this._battleController.startBattle();
                }
                catch (error) {
                    console.error(error);
                }
                break;
            case GameMenu_1.GameMenu.AboutGame:
                this._viewMenu.displayAbout();
                break;
            case GameMenu_1.GameMenu.ExitGame:
                this._viewMenu.displayExit();
                break;
            default:
                this._viewMenu.displayInvalidOption();
                ViewUtils_1.ViewUtils.isRigth();
                return this.gameStart();
        }
    }
}
exports.GameController = GameController;
