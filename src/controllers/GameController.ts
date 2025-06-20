import { PersonController } from "./PersonController";
import { BattleController } from "./BattleController";
import { ViewMenu } from "../views/ViewMenu";
import { GameMenu } from "../enums/GameMenu";
import { ViewUtils } from "../views/ViewUtils";

export class GameController {
  private _personController: PersonController;
  private _battleController!: BattleController;
  private _viewMenu: ViewMenu;

  public constructor() {
    this._personController = new PersonController();
    this._viewMenu = new ViewMenu();
  }

  public gameStart(): void {
    switch (this._viewMenu.displayMenu()) {
      case GameMenu.StartGame:
        try {
          const player = this._personController.player;
          const enemy = this._personController.enemy;
          const boss = this._personController.boss;

          this._battleController = new BattleController(player, enemy, boss);

          this._battleController.startBattle();
        } catch (error) {
          console.error(error);
        }
        break;
      case GameMenu.AboutGame:
        this._viewMenu.displayAbout();
        break;
      case GameMenu.ExitGame:
        this._viewMenu.displayExit();
        break;
      default:
        this._viewMenu.displayInvalidOption();
        ViewUtils.isRigth();
        return this.gameStart();
    }
  }
}
