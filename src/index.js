import "./style.css";
import "./normalize.css";
const { player } = require("./player");
const { playCannon } = require("./utils.js");

const playerOneDOMboard = document.getElementById("player1");
const playerTwoDOMboard = document.getElementById("player2");
const startButton = document.getElementById("start");
const title = document.getElementById("title");

const playGame = (function () {
  let placementStage = true;
  let roundIsActive = false;
  let alignment = "horizontal";
  let keyActive = true;

  const playerOne = new player();
  const userCell = [];
  const bot = new player();
  bot.computer = true;
  const botCell = [];

  function createGrid(player, board, cellArray) {
    player.board.gameboard.forEach((node) => {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      cell.addEventListener("click", () => {
        shipPlacementStage(node, cellArray, player);
      });
      cell.addEventListener("click", () => {
        if (player.computer && roundIsActive == true && keyActive) {
          title.textContent = `You:  ${playerOne.hitpoints}  -  Enemy:  ${bot.hitpoints}`;
          hitOnGrid(node, cell, player);
        }
      });
      cell.addEventListener("mouseenter", () => {
        cell.style.transform = "scale(1.2)";
        if (player.computer) {
          cell.style.border = "5px solid var(--color-secondary)";
        } else {
          cell.style.border = "5px solid var(--color-secondary)";
        }
      });
      cell.addEventListener("mouseleave", () => {
        cell.style.transform = "scale(1)";
        if (player.computer) {
          cell.style.border = "1px solid var(--color-secondary)";
        } else {
          cell.style.border = "1px solid var(--color-secondary)";
        }
      });
      cellArray.push(cell);
      board.appendChild(cell);
    });
  }

  function hitOnGrid(node, cell, player) {
    if (roundIsActive) {
      if (node.hit == false) {
        node.hit = true;
        if (node.ship == true) {
          playCannon();
          title.textContent = `You: ${playerOne.hitpoints} - Enemy: ${bot.hitpoints}`;
          cell.style.backgroundColor = "red";
          cell.textContent = "⚐";
          player.removeHitpoints();
        } else {
          cell.style.backgroundColor = "lightblue";
          cell.textContent = "☓";
        }
        setTimeout(() => botPlay(), 200); 
        checkWinCondition();
      }
    }
  }

  function botPlay() {
    if (roundIsActive) {
      let randomNode;
      do {
        randomNode = playerOne.board.getRandomNode();
      } while (randomNode.hit);
      randomNode.hit = true;
      const randomNodeCell = userCell[randomNode.nodeIndex];
      if (randomNode.ship == true) {
        playCannon();
        title.textContent = `You: ${playerOne.hitpoints} - Enemy: ${bot.hitpoints}`;
        randomNodeCell.style.backgroundColor = "red";
        randomNodeCell.textContent = "⚐";
        playerOne.removeHitpoints();
      } else {
        randomNodeCell.style.backgroundColor = "lightblue";
        randomNodeCell.textContent = "☓";
      }
    }
  }

  function checkWinCondition() {
    if (roundIsActive) {
      if (playerOne.hitpoints == 0) {
        title.textContent = "DEFEAT!";
        keyActive = false;
      } else if (bot.hitpoints == 0) {
        title.textContent = "VICTORY!";
        keyActive = false;
      }
    }
  }

  function shipPlacementStage(node, cellArr, player) {
    let shipNo = player.shipInserted;
    let boat = player.ships[shipNo];
    let length;
    if (player.shipInserted <= 7) {
      length = boat.length;
    } else {
      length = 8;
    }

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
          cellArr[focusedNode.nodeIndex].textContent = "⚑";
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
          cellArr[focusedNode.nodeIndex].textContent = "⚑";
          cellArr[focusedNode.nodeIndex].style.backgroundColor =
            "var(--color-primary)";
          player.addHitpoints();
        }
        player.shipAdded();
      }
    } else if (player.shipInserted > 7 && player.computer != true) {
    }
    if (player.shipInserted == 1 || player.shipInserted == 2) {
      title.textContent = "Insert your Caravel";
    } else if (player.shipInserted == 3 || player.shipInserted == 4) {
      title.textContent = "Insert your Scout Ship";
    } else if (
      player.shipInserted == 5 ||
      player.shipInserted == 6 ||
      player.shipInserted == 7
    ) {
      title.textContent = "Insert your Gulley";
    } else {
      if (player.computer == false) {
        title.textContent = "GAME START!";
        placementStage = false;
        roundIsActive = true;
        startButton.textContent = "Restart?";
      }
    }
  }

  createGrid(playerOne, playerOneDOMboard, userCell);

  createGrid(bot, playerTwoDOMboard, botCell);
  botShipPlacement(bot, botCell);

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
    } else if (!placementStage) {
      startButton.textContent = "Reset";
      location.reload();
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
            return false;
          }
        } else {
          return false;
        }
      }
    } else if (!checkPlacementBound(node, length)) {
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
