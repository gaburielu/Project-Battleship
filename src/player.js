const { gameboard, node } = require("./gameboard");
const { ship } = require("./ship");

class player {
  constructor() {
    this.board = new gameboard();
    this.ships = this.makeShips();
    this.computer = false;
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

  insertShip(shipNo, node){
    this.ships[shipNo].push(node);
  }
}

module.exports = {
  player,
};