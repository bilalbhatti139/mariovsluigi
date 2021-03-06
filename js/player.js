class Player {
  constructor(name, image, weapon, lastId = 0) {
    this.id = lastId + 1;
    this.name = name;
    this.image = image;
    this.weapon = weapon;
  }
  generate = () => {
    return {
      id: this.id,
      name: this.name,
      image: `<img src="${this.image}" alt="${this.name}" width="50"/>`,
      health: 100,
      weapon: {
        image: `<img src="${this.weapon}" alt="${this.name}" width="70" data-damage="10" />`,
        damage: 10,
        old: null,
      },
      location: { row: 0, column: 0 },
    };
  };
}

export default Player;
