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
  const botCell = [];

  function createGrid(player, board, cellArray) {
    player.board.gameboard.forEach((node) => {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      cell.textContent = node.coordinate;
      cell.addEventListener("click", () => {
        placeShip(node, cellArray, player);
      });
      cell.addEventListener("click", () => {
        hitOnGrid(node, cell);
      });
      cellArray.push(cell);
      board.appendChild(cell);
    });
  }

  function hitOnGrid(node, cell) {
    if (!roundIsActive) {
      if(node.hit == false){
        node.hit = true;
        if (node.ship == true) {
          cell.style.backgroundColor = "red";
          cell.textContent = "⚐";
        } else {
          cell.style.backgroundColor = "purple";
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

  }

  createGrid(playerOne, playerOneDOMboard, userCell);
  createGrid(bot, playerTwoDOMboard, botCell);

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
      if (node.y + length > 9) {
        return false;
      }
      return true;
    } else if ((alignment = "vertical")) {
      if (node.x + length > 9) {
        return false;
      }
      return true;
    } else {
      return null;
    }
  }

  function checkPlacementOccupied(node, length, player) {
    if (alignment == "horizontal" && checkPlacementBound(node, length)) {
      for (let i = 0; i <= length; i++) {
        if (
          player.board._getNodeAtCoordinates(node.x, node.y + i).ship == false
        ) {
          continue;
        } else if (
          player.board._getNodeAtCoordinates(node.x, node.y + i).ship == true
        ) {
          console.log("occupied");
          return false;
        }
      }
    } else if (alignment == "vertical" && checkPlacementBound(node, length)) {
      for (let i = 0; i <= length; i++) {
        if (
          player.board._getNodeAtCoordinates(node.x + i, node.y).ship == false
        ) {
          continue;
        } else if (
          player.board._getNodeAtCoordinates(node.x + i, node.y).ship == true
        ) {
          console.log("occupied");
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
})();
