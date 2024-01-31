import "./style.css";
import "./normalize.css";
const { player } = require("./player");

const playerOneDOMboard = document.getElementById("player1");
const playerTwoDOMboard = document.getElementById("player2");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");

const playGame = (function () {
  let placementStage = true;
  let roundIsActive = false;
  let alignment = "horizontal";
  let round = 0;

  const playerOne = new player();
  const userCell = [];
  const bot = new player();
  bot.computer = true;
  const botCell = [];

  function createGrid(player, board, cellArray) {
    player.board.gameboard.forEach((node) => {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      cell.textContent = node.coordinate;
      cell.addEventListener("click", () => {
        shipPlacementStage(node, cellArray, player);
      });
      cell.addEventListener("click", () => {
        hitOnGrid(node, cell);
      });
      cell.addEventListener("click", () => {
        // hitOnGrid(node, cell);
      });
      cellArray.push(cell);
      board.appendChild(cell);

    });
  }

  function hitOnGrid(node, cell) {
    if (!roundIsActive) {
      if (node.hit == false) {
        node.hit = true;
        if (node.ship == true) {
          cell.style.backgroundColor = "red";
          cell.textContent = "⚐";
        } else {
          cell.style.backgroundColor = "lightblue";
          cell.textContent = "☓";
        }
        round++;
      }
    }
  }

  function placeShip(node, cellArr, player) {
    if (placementStage == true) {
      // const firstCell = cellArr[0];
      // firstCell.textContent = "jumbo";
      // console.log(node);
      const x = player.board._getNodeAtCoordinates(3, 3);
      x.ship = true;
      // shipPlacementStage(node, cellArr, player);

      // if (x == node) {
      //   console.log("yipee");
      // }
      // console.log(x);
      // if (validPlacement) {
      // }
      checkPlacementOccupied(node, 3, player);
    }
  }

  function shipPlacementStage(node, cellArr, player) {
    let shipNo = player.shipInserted;
    let boat = player.ships[shipNo];
    let length = boat.length;
    if (shipNo < 8) {
      if (
        checkPlacementOccupied(node, length, player) == undefined &&
        alignment == "horizontal"
      ) {
        for (let i = 0; i < length; i++) {
          let focusedNode = player.board._getNodeAtCoordinates(
            node.x,
            node.y + i
          );
          focusedNode.ship = true;
          cellArr[focusedNode.nodeIndex].textContent = "shi";
          cellArr[focusedNode.nodeIndex].style.backgroundColor =
            "var(--color-primary)";
          player.addHitpoints();
        }
        player.shipAdded();
      } else if (
        checkPlacementOccupied(node, length, player) == undefined &&
        alignment == "vertical"
      ) {
        for (let i = 0; i < length; i++) {
          let focusedNode = player.board._getNodeAtCoordinates(
            node.x + i,
            node.y
          );
          focusedNode.ship = true;
          cellArr[focusedNode.nodeIndex].textContent = "shi";
          cellArr[focusedNode.nodeIndex].style.backgroundColor =
            "var(--color-primary)";
          player.addHitpoints();
        }
        player.shipAdded();
      }
    }
    console.log(player.shipInserted);
    if (player.shipInserted == 8) {
      console.log(player.hitpoints);
    }
  }

  createGrid(playerOne, playerOneDOMboard, userCell);

  createGrid(bot, playerTwoDOMboard, botCell);
  botShipPlacement(bot, botCell);

  resetButton.addEventListener("click", shipPlacement);

  function shipPlacement() {
    placementStage = !placementStage;
    console.log(placementStage);
  }

  startButton.addEventListener("click", changeAlignment);

  function changeAlignment() {
    if (placementStage) {
      if (startButton.textContent == "Horizontal ▭") {
        startButton.textContent = "Vertical ▯";
        alignment = "vertical";
      } else {
        startButton.textContent = "Horizontal ▭";
        alignment = "horizontal";
      }
    }
  }

  function checkPlacementBound(node, length) {
    if (alignment == "horizontal") {
      if (node.y + length > 10) {
        return false;
      }
      return true;
    } else if ((alignment = "vertical")) {
      if (node.x + length > 10) {
        return false;
      }
      return true;
    } else {
      return null;
    }
  }

  function checkPlacementOccupied(node, length, player, align = alignment) {
    if (align == "horizontal" && checkPlacementBound(node, length)) {
      for (let i = 0; i < length; i++) {
        let z = node.y + i;
        if (z < 0) {
          z = 0;
        }
        if (player.board._getNodeAtCoordinates(node.x, z).ship == false) {
          continue;
        } else if (player.board._getNodeAtCoordinates(node.x, z).ship == true) {
          console.log("occupied");
          return false;
        }
      }
    } else if (align == "vertical" && checkPlacementBound(node, length)) {
      for (let i = 0; i < length; i++) {
        let z = node.x + i;
        if (z < 0) {
          z = 0;
        }
        if (player.board._getNodeAtCoordinates(z, node.y)) {
          if (player.board._getNodeAtCoordinates(z, node.y).ship == false) {
            continue;
          } else if (
            player.board._getNodeAtCoordinates(z, node.y).ship == true
          ) {
            console.log("occupied");
            return false;
          }
        } else {
          return false;
        }
      }
    } else if (!checkPlacementBound(node, length)) {
      console.log("Out of bound");
      return false;
    } else {
      return true;
    }
  }

  function botShipPlacement(player, cellArr) {
    let shipNo = player.shipInserted;
    let boat = player.ships[shipNo];
    let length = boat.length;
    let align = getRandomAlignment();
    let randomNode = player.board.getRandomNode();
    function getShip() {
      align = getRandomAlignment();
      if (checkPlacementOccupied(randomNode, length, player, align) == false) {
        randomNode = player.board.getRandomNode();
      } else if (
        checkPlacementOccupied(randomNode, length, player, align) ==
          undefined &&
        align == "horizontal"
      ) {
        for (let i = 0; i < length; i++) {
          let focusedNode = player.board._getNodeAtCoordinates(
            randomNode.x,
            randomNode.y + i
          );
          focusedNode.ship = true;
          cellArr[focusedNode.nodeIndex].textContent = "shi";
          cellArr[focusedNode.nodeIndex].style.backgroundColor =
            "var(--color-primary)";
          player.addHitpoints();
        }
        player.shipAdded();
      } else if (
        checkPlacementOccupied(randomNode, length, player, align) ==
          undefined &&
        align == "vertical"
      ) {
        for (let i = 0; i < length; i++) {
          let focusedNode = player.board._getNodeAtCoordinates(
            randomNode.x + i,
            randomNode.y
          );
          focusedNode.ship = true;
          cellArr[focusedNode.nodeIndex].textContent = "shi";
          cellArr[focusedNode.nodeIndex].style.backgroundColor =
            "var(--color-primary)";
          player.addHitpoints();
        }
        player.shipAdded();
      }
    }
    while (shipNo < 8) {
      getShip();
      shipNo = player.shipInserted;
      if (shipNo < 8) {
        boat = player.ships[shipNo];
        length = boat.length;
      }
    }
    console.log(player.shipInserted);
    if (player.shipInserted == 8) {
      console.log("Computer is ready");
    }
  }
  function getRandomAlignment() {
    let align = Math.floor(Math.random() * 2);
    if (align == 0) {
      return "horizontal";
    } else {
      return "vertical";
    }
  }
})();
