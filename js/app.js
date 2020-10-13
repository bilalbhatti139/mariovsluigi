import Player from "./player";
import Game from "./game";
import { mario, luigi, fire, gun } from "./assets";

Game.map("#mapBox", 81);

const player1 = new Player("Mario", mario, fire).generate();
const player2 = new Player("Luigi", luigi, gun, player1.id).generate();

const game = new Game([player1, player2]);

document.querySelector("#newGame").addEventListener("click", game.init);

game.reset();
