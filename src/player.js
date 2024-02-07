const { gameboard } = require("./gameboard");
const { ship } = require("./ship");

class player {
  constructor() {
    this.board = new gameboard();
    this.ships = this.makeShips();
    this.computer = false;
    this.hitpoints = 0;
    this.shipInserted = 0;
  }

  makeShips() {
    return [
      (this.warship = new ship(4)),
      (this.longship = new ship(3)),
      (this.longship2 = new ship(3)),
      (this.scout = new ship(2)),
      (this.scout2 = new ship(2)),
      (this.galley = new ship(1)),
      (this.galley2 = new ship(1)),
      (this.galley3 = new ship(1)),
    ];
  }

  addHitpoints(){
    this.hitpoints++;
  }

  removeHitpoints(){
    this.hitpoints--;
  }

  shipAdded(){
    this.shipInserted++;
  }

}

module.exports = {
  player,
};

// let z = new player();
// console.log(z.addHitpoints());
// console.log(z.addHitpoints());
// console.log(z.removeHitpoints());
// console.log(z.hitpoints);