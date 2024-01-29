import "./style.css";
import "./normalize.css";
const { player } = require("./player");

const playerOneDOMboard = document.getElementById("player1");
const playerTwoDOMboard = document.getElementById("player2");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");

let placementStage = false;

const playGame = (function () {
  let roundIsActive = false;
  let isPlayerVsComputer = false;
  let alignment = "horizontal";

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
        hitOnGrid(node, cell);
      });
      cell.addEventListener("click", () => {
        placeShip(node, cellArray, player);
      });
      cellArray.push(cell);
      board.appendChild(cell);
    });
  }

  function hitOnGrid(node, cell) {
    node.hit = true;
    cell.style.backgroundColor = "red";
    cell.textContent = "⚐";
  }

  function placeShip(node, cellArr, player) {
    if (placementStage == true) {
      const firstCell = cellArr[0];
      firstCell.textContent = "jumbo";
      console.log(node);
      const x = player.board._getNodeAtCoordinates(2, 2);
      if(x == node){
        console.log("yipee");
      }
      console.log(x);
      if (validPlacement) {
      }
    }
  }

  function validPlacement(node, alignment) {
    if (alignment === "horizontal") {
    }
  }

  createGrid(playerOne, playerOneDOMboard, userCell);
  createGrid(bot, playerTwoDOMboard, botCell);
})();

/////////////////FOOTER/////////////////

const toggleFooterButton = document.getElementById("footer-toggle");
const footer = document.getElementById("hiddenFooter");

function toggleFooter() {
  footer.classList.toggle("hidden");
  footer.classList.toggle("show");
}

toggleFooterButton.addEventListener("click", toggleFooter);

//////////////////////////

startButton.addEventListener("click", sad);
function sad() {
  console.log("fuck yes");
}

resetButton.addEventListener("click", shipPlacement);
function shipPlacement() {
  placementStage = !placementStage;
  console.log(placementStage);
}
