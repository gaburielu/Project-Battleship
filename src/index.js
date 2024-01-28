import "./style.css";
import "./normalize.css";
const { player } = require("./player");

const playerOneDOMboard = document.getElementById("player1");
const playerTwoDOMboard = document.getElementById("player2");

const playGame = (function () {
  let roundIsActive = false;
  let isPlayerVsComputer = false;

  const playerOne = new player();
  const playerTwo = new player();

  function createGrid(player, board) {
    player.board.gameboard.forEach((node) => {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      cell.textContent = node.coordinate;
      // Add styling based on the node's state (hit or not)
      if (node.hit) {
        cell.style.backgroundColor = "red";
      }

      board.appendChild(cell);
    });
  }
  createGrid(playerOne, playerOneDOMboard);
  createGrid(playerTwo, playerTwoDOMboard);
})();

/////////////////FOOTER/////////////////

const toggleFooterButton = document.getElementById("footer-toggle");
const footer = document.getElementById("hiddenFooter");

function toggleFooter() {
  footer.classList.toggle("hidden");
  footer.classList.toggle("show");
}

toggleFooterButton.addEventListener("click", toggleFooter);

