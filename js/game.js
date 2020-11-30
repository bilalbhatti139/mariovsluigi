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
      // document.querySelector(`#p${player.id}-name`).innerHTML = "";
      document.querySelector(`#p${player.id}-name`).innerHTML = player.name;
      // document.querySelector(`#p${player.id}-image`).innerHTML = "";
      document.querySelector(`#p${player.id}-image`).innerHTML = player.image;
      // document.querySelector(`#p${player.id}-health-image`).innerHTML = "";
      document.querySelector(
        `#p${player.id}-health-image`
      ).innerHTML = `<img src="${health}" width="70" />`;
      // document.querySelector(`#p${player.id}-health`).innerHTML = "";
      document.querySelector(`#p${player.id}-health`).innerHTML = player.health;
      // document.querySelector(`#p${player.id}-weapon`).innerHTML = "";
      document.querySelector(`#p${player.id}-weapon`).innerHTML =
        player.weapon.image;
      // document.querySelector(`#p${player.id}-damage`).innerHTML = "";
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

    this.placeItem(
      `<img src="${knife}" width="50" data-damage="15" />`,
      "weapon"
    );
    this.placeItem(
      `<img src="${bomb}" width="50" data-damage="20" />`,
      "weapon"
    );
  };

  init = () => {
    this.reset();

    this.currentPlayer = this.players[
      Math.floor(Math.random() * this.players.length)
    ];

    this.detectTurn();
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

  playerMoves = () => {
    console.log(this.currentPlayer);
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
      `[data-row="${
        Number(this.currentPlayer.location.row) + 1
      }"][data-column="${this.currentPlayer.location.column}"]`
    );
    const south2 = document.querySelector(
      `[data-row="${
        Number(this.currentPlayer.location.row) + 2
      }"][data-column="${this.currentPlayer.location.column}"]`
    );
    const south3 = document.querySelector(
      `[data-row="${
        Number(this.currentPlayer.location.row) + 3
      }"][data-column="${this.currentPlayer.location.column}"]`
    );

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
        Number(this.currentPlayer.location.column) + 1
      }"]`
    );
    const east2 = document.querySelector(
      `[data-row="${this.currentPlayer.location.row}"][data-column="${
        Number(this.currentPlayer.location.column) + 2
      }"]`
    );
    const east3 = document.querySelector(
      `[data-row="${this.currentPlayer.location.row}"][data-column="${
        Number(this.currentPlayer.location.column) + 3
      }"]`
    );

    if (
      north1 &&
      !north1.classList.contains("obstacle") &&
      !north1.classList.contains("player")
    ) {
      north1.classList.add("highlight");
      north1.addEventListener("click", this.movePlayer);

      if (
        north2 &&
        !north2.classList.contains("obstacle") &&
        !north2.classList.contains("player")
      ) {
        north2.classList.add("highlight");
        north2.addEventListener("click", this.movePlayer);

        if (
          north3 &&
          !north3.classList.contains("obstacle") &&
          !north3.classList.contains("player")
        ) {
          north3.classList.add("highlight");
          north3.addEventListener("click", this.movePlayer);
        }
      }
    }

    if (
      south1 &&
      !south1.classList.contains("obstacle") &&
      !south1.classList.contains("player")
    ) {
      south1.classList.add("highlight");
      south1.addEventListener("click", this.movePlayer);

      if (
        south2 &&
        !south2.classList.contains("obstacle") &&
        !south2.classList.contains("player")
      ) {
        south2.classList.add("highlight");
        south2.addEventListener("click", this.movePlayer);

        if (
          south3 &&
          !south3.classList.contains("obstacle") &&
          !south3.classList.contains("player")
        ) {
          south3.classList.add("highlight");
          south3.addEventListener("click", this.movePlayer);
        }
      }
    }

    if (
      east1 &&
      !east1.classList.contains("obstacle") &&
      !east1.classList.contains("player")
    ) {
      east1.classList.add("highlight");
      east1.addEventListener("click", this.movePlayer);

      if (
        east2 &&
        !east2.classList.contains("obstacle") &&
        !east2.classList.contains("player")
      ) {
        east2.classList.add("highlight");
        east2.addEventListener("click", this.movePlayer);

        if (
          east3 &&
          !east3.classList.contains("obstacle") &&
          !east3.classList.contains("player")
        ) {
          east3.classList.add("highlight");
          east3.addEventListener("click", this.movePlayer);
        }
      }
    }

    if (
      west1 &&
      !west1.classList.contains("obstacle") &&
      !west1.classList.contains("player")
    ) {
      west1.classList.add("highlight");
      west1.addEventListener("click", this.movePlayer);

      if (
        west2 &&
        !west2.classList.contains("obstacle") &&
        !west2.classList.contains("player")
      ) {
        west2.classList.add("highlight");
        west2.addEventListener("click", this.movePlayer);

        if (
          west3 &&
          !west3.classList.contains("obstacle") &&
          !west3.classList.contains("player")
        ) {
          west3.classList.add("highlight");
          west3.addEventListener("click", this.movePlayer);
        }
      }
    }
  };

  movePlayer = (e) => {
    // Remove player image from old position
    const oldPos = document.querySelector(
      `[data-row="${this.currentPlayer.location.row}"][data-column="${this.currentPlayer.location.column}"]`
    );

    const newPos = e.target.nodeName === "IMG" ? e.path[1] : e.target;

    // Check if any weapon is in memory
    if (this.currentPlayer.weapon.old) {
      oldPos.innerHTML = this.currentPlayer.weapon.old;
      this.players[this.currentPlayer.id - 1].weapon.old = null;
    } else {
      oldPos.innerHTML = "";
    }

    oldPos.classList.remove("player");

    // Update new player position
    this.players[this.currentPlayer.id - 1].location = {
      row: newPos.dataset.row,
      column: newPos.dataset.column,
    };

    if (newPos.classList.contains("weapon")) {
      this.players[
        this.currentPlayer.id - 1
      ].weapon.old = this.currentPlayer.weapon.image;
      this.players[this.currentPlayer.id - 1].weapon.image = newPos.innerHTML;
      this.players[this.currentPlayer.id - 1].weapon.damage =
        e.target.dataset.damage;

      document.querySelector(`#p${this.currentPlayer.id}-weapon`).innerHTML =
        newPos.innerHTML;

      document.querySelector(`#p${this.currentPlayer.id}-damage`).innerHTML =
        e.target.dataset.damage;
    }

    // Add player image to new position
    newPos.innerHTML = this.currentPlayer.image;
    newPos.classList.add("player");

    // Remove highlights
    for (const tile of document.querySelectorAll(".highlight")) {
      tile.classList.remove("highlight");
      tile.removeEventListener("click", this.movePlayer);
    }

    const isFighting = !!this.detectFight();

    console.log({ isFighting });

    if (isFighting) {
      this.retaliation();
    } else {
      this.changeTurn();
    }
  };

  detectFight = () => {
    const north = document.querySelector(
      `[data-row="${this.currentPlayer.location.row - 1}"][data-column="${
        this.currentPlayer.location.column
      }"]`
    );

    const west = document.querySelector(
      `[data-row="${this.currentPlayer.location.row}"][data-column="${
        this.currentPlayer.location.column - 1
      }"]`
    );

    const east = document.querySelector(
      `[data-row="${this.currentPlayer.location.row}"][data-column="${
        Number(this.currentPlayer.location.column) + 1
      }"]`
    );

    const south = document.querySelector(
      `[data-row="${
        Number(this.currentPlayer.location.row) + 1
      }"][data-column="${this.currentPlayer.location.column}"]`
    );

    if (north && north.classList.contains("player")) return true;
    if (south && south.classList.contains("player")) return true;
    if (east && east.classList.contains("player")) return true;
    if (west && west.classList.contains("player")) return true;
  };

  retaliation = () => {
    console.log("Lets start a fight...");
    // 1. Display retaliation modal
    document.querySelector("#fightModal").classList.add("open");
    // 2. Decreasing health of opposite member

    document.querySelector("#protect").addEventListener("click", () => {
      const attacker = this.currentPlayer;
      this.changeTurn();
      const opponent = this.currentPlayer;

      const newHealth = opponent.health - attacker.weapon.damage / 2;

      opponent.health = newHealth;
      document.querySelector(`#p${opponent.id}-health`).innerHTML = newHealth;
      document.querySelector(`#p${opponent.id}-shield`).innerHTML = "Protected";
      document
        .querySelector(`#p${opponent.id}-shield-image`)
        .classList.add("protected");

      document.querySelector("#fightModal").classList.remove("open");

      if (opponent.health <= 99) {
        document.querySelector("#gameOverModal").classList.add("open");
        document.querySelector(
          "#gameOverModal p:first-of-type"
        ).innerHTML = `${attacker.name}, you have won the game :)`;
        document.querySelector(
          "#gameOverModal p:last-of-type"
        ).innerHTML = `${opponent.name}, you have lost the game :(`;

        document
          .querySelector("#gameOverModal button")
          .addEventListener("click", () => {
            document.querySelector("#gameOverModal").classList.remove("open");
          });
      }
    });

    document.querySelector("#attack").addEventListener("click", () => {
      const attacker = this.currentPlayer;
      this.changeTurn();
      const opponent = this.currentPlayer;

      const newHealth = opponent.health - attacker.weapon.damage;

      opponent.health = newHealth;
      document.querySelector(`#p${opponent.id}-health`).innerHTML = newHealth;
      document.querySelector(`#p${opponent.id}-shield`).innerHTML = "Unprotected";
      document
        .querySelector(`#p${opponent.id}-shield-image`)
        .classList.remove("protected");

      document.querySelector("#fightModal").classList.remove("open");

      if (opponent.health <= 99) {
        document.querySelector("#gameOverModal").classList.add("open");
        document.querySelector(
          "#gameOverModal p:first-of-type"
        ).innerHTML = `${attacker.name}, you have won the game :)`;
        document.querySelector(
          "#gameOverModal p:last-of-type"
        ).innerHTML = `${opponent.name}, you have lost the game :(`;

        document
          .querySelector("#gameOverModal button")
          .addEventListener("click", () => {
            document.querySelector("#gameOverModal").classList.remove("open");
          });
      }
    });
  };

  detectTurn = () => {
    const panel = document.querySelector(`#player${this.currentPlayer.id}`);

    for (const scoreBoard of document.querySelectorAll(".scoreBoard")) {
      scoreBoard.classList.remove("active");
    }

    panel.classList.add("active");

    this.playerMoves();
  };

  changeTurn = () => {
    if (this.currentPlayer.id === 1) {
      this.currentPlayer = this.players[1];
    } else {
      this.currentPlayer = this.players[0];
    }

    this.detectTurn();
  };
}
