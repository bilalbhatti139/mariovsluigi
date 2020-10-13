import { shield, health, goomba, knife, bomb } from "./assets";

export default class Game {
  constructor(players) {
    this.players = players;
    this.gridSquares = document.querySelectorAll("#mapBox > div");
  }

  static map = (selector, tiles) => {
    for (let tile = 0; tile < tiles; tile++) {
      document.querySelector(
        selector
      ).innerHTML += `<div data-row="${1}" data-column="${1}" class="gameBox"></div>`;
    }
  };

  reset = () => {
    this.players.map((player) => {
      console.log(player.health);
      document.querySelector(`#p${player.id}-name`).innerHTML = player.name;
      document.querySelector(`#p${player.id}-image`).innerHTML = player.image;

      document.querySelector(
        `#p${player.id}-health-image`
      ).innerHTML = `<img src="${health}" width="70" />`;
      document.querySelector(`#p${player.id}-health`).innerHTML = player.health;
      document.querySelector(`#p${player.id}-weapon`).innerHTML =
        player.weapon.image;
      document.querySelector(`#p${player.id}-damage`).innerHTML =
        player.weapon.damage;
      document.querySelector(`#p${player.id}-shield`).innerHTML = player.shield
        ? "Protected"
        : "Unprotected";

      document.querySelector(
        `#p${player.id}-shield-image`
      ).innerHTML = `<img src="${shield}" width="70" />`;

      this.placeItem(player.image, "player");
    });

    for (let i = 0; i < 15; i++) {
      this.placeItem(`<img src="${goomba}" width="70" />`, "obstacle");
    }

    this.placeItem(`<img src="${knife}" width="70" />`, "weapon");
    this.placeItem(`<img src="${bomb}" width="70" />`, "weapon");
  };

  init = () => {
    this.reset();

    console.log("Game has started..");
    console.log(this.players);
  };

  placeItem = (item, type) => {
    const randomSquare = Math.floor(Math.random() * this.gridSquares.length);
    const objClass = this.gridSquares[randomSquare].classList;
    if (
      objClass.contains("weapon") &&
      objClass.contains("player") &&
      objClass.contains("obstacle")
    ) {
      this.placeItem(item, type);
    } else {
      this.gridSquares[randomSquare].innerHTML = item;
    }
  };
}
