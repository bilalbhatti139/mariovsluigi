import { shield, health, goomba, knife, bomb } from "./assets";

export default class Game {
  constructor(players) {
    this.players = players;
    this.gridSquares = document.querySelectorAll("#mapBox > div");
    this.currentPlayer = null;
  }

  static map = (selector, tiles) => {
    let column = 0;
    let row = 1;
    for (let tile = 0; tile < tiles; tile++) {
      column++;

      document.querySelector(
        selector
      ).innerHTML += `<div data-row="${row}" data-column="${column}"></div>`;

      if (column === 9) {
        row++;
        column = 0;
      }
    }
  };

  reset = () => {
    for (const tile of this.gridSquares) {
      tile.innerHTML = "";
      tile.removeAttribute("class");
    }

    this.players.map((player) => {
      document.querySelector(`#p${player.id}-name`).innerHTML = "";
      document.querySelector(`#p${player.id}-name`).innerHTML = player.name;
      document.querySelector(`#p${player.id}-image`).innerHTML = "";
      document.querySelector(`#p${player.id}-image`).innerHTML = player.image;
      document.querySelector(`#p${player.id}-health-image`).innerHTML = "";
      document.querySelector(
        `#p${player.id}-health-image`
      ).innerHTML = `<img src="${health}" width="70" />`;
      document.querySelector(`#p${player.id}-health`).innerHTML = "";
      document.querySelector(`#p${player.id}-health`).innerHTML = player.health;
      document.querySelector(`#p${player.id}-weapon`).innerHTML = "";
      document.querySelector(`#p${player.id}-weapon`).innerHTML =
        player.weapon.image;
      document.querySelector(`#p${player.id}-damage`).innerHTML = "";
      document.querySelector(`#p${player.id}-damage`).innerHTML =
        player.weapon.damage;
      document.querySelector(`#p${player.id}-shield`).innerHTML = player.shield
        ? "Protected"
        : "Unprotected";

      document.querySelector(
        `#p${player.id}-shield-image`
      ).innerHTML = `<img src="${shield}" width="70" />`;

      this.placeItem(player, "player");
    });

    for (let i = 0; i < 15; i++) {
      this.placeItem(`<img src="${goomba}" width="50" />`, "obstacle");
    }

    this.placeItem(`<img src="${knife}" width="50" />`, "weapon");
    this.placeItem(`<img src="${bomb}" width="50" />`, "weapon");

    this.currentPlayer = this.players[
      Math.floor(Math.random() * this.players.length)
    ];

    this.detectTurn();
  };

  init = () => {
    this.reset();
  };

  placeItem = (item, type) => {
    const randomSquare = Math.floor(Math.random() * this.gridSquares.length);
    const objClass = this.gridSquares[randomSquare].classList;

    if (
      objClass.contains("weapon") ||
      objClass.contains("player") ||
      objClass.contains("obstacle")
    ) {
      this.placeItem(item, type);
    } else {
      if (type === "player") {
        this.gridSquares[randomSquare].innerHTML = item.image;
        const { row, column } = this.gridSquares[randomSquare].dataset;
        this.players[item.id - 1].location = { row, column };
      } else {
        this.gridSquares[randomSquare].innerHTML = item;
      }
      this.gridSquares[randomSquare].classList.add(type);
    }
  };

  detectTurn = () => {
    const panel = document.querySelector(`#player${this.currentPlayer.id}`);

    panel.classList.add("active");

    this.playerMoves();
  };

  playerMoves = () => {
    // north direction
    const north1 = document.querySelector(
      `[data-row="${this.currentPlayer.location.row - 1}"][data-column="${
        this.currentPlayer.location.column
      }"]`
    );
    const north2 = document.querySelector(
      `[data-row="${this.currentPlayer.location.row - 2}"][data-column="${
        this.currentPlayer.location.column
      }"]`
    );
    const north3 = document.querySelector(
      `[data-row="${this.currentPlayer.location.row - 3}"][data-column="${
        this.currentPlayer.location.column
      }"]`
    );

    // south direction
    const south1 = document.querySelector(
      `[data-row="${this.currentPlayer.location.row + 1}"][data-column="${
        this.currentPlayer.location.column
      }"]`
    );
    const south2 = document.querySelector(
      `[data-row="${this.currentPlayer.location.row + 2}"][data-column="${
        this.currentPlayer.location.column
      }"]`
    );
    const south3 = document.querySelector(
      `[data-row="${this.currentPlayer.location.row + 3}"][data-column="${
        this.currentPlayer.location.column
      }"]`
    );
    console.log("I am northhhhh", this.currentPlayer.location.row + 2);

    // west direction
    const west1 = document.querySelector(
      `[data-row="${this.currentPlayer.location.row}"][data-column="${
        this.currentPlayer.location.column - 1
      }"]`
    );
    const west2 = document.querySelector(
      `[data-row="${this.currentPlayer.location.row}"][data-column="${
        this.currentPlayer.location.column - 2
      }"]`
    );
    const west3 = document.querySelector(
      `[data-row="${this.currentPlayer.location.row}"][data-column="${
        this.currentPlayer.location.column - 3
      }"]`
    );

    // east direction
    const east1 = document.querySelector(
      `[data-row="${this.currentPlayer.location.row}"][data-column="${
        this.currentPlayer.location.column + 1
      }"]`
    );
    const east2 = document.querySelector(
      `[data-row="${this.currentPlayer.location.row}"][data-column="${
        this.currentPlayer.location.column + 2
      }"]`
    );
    const east3 = document.querySelector(
      `[data-row="${this.currentPlayer.location.row}"][data-column="${
        this.currentPlayer.location.column + 3
      }"]`
    );

    north1.classList.add("highlight");
    north2.classList.add("highlight");
    north3.classList.add("highlight");

    south1.classList.add("highlight");
    south2.classList.add("highlight");
    south3.classList.add("highlight");

    east1.classList.add("highlight");
    east2.classList.add("highlight");
    east3.classList.add("highlight");

    west1.classList.add("highlight");
    west2.classList.add("highlight");
    west3.classList.add("highlight");
  };
}
