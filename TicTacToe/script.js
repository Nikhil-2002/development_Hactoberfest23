const board = document.getElementById("board");
const resetBtn = document.getElementById("reset");
// New: Get the game status element
const gameStatus = document.getElementById("game-status");

let currentPlayer = "X";
let cells = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

// Function to update the game status message
function updateStatus(message) {
  gameStatus.innerHTML = message;
}

function renderBoard() {
  board.innerHTML = "";
  cells.forEach((cell, index) => {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.textContent = cell;

    // Feature: Add class for specific marker styling
    if (cell === "X") {
      div.classList.add("x-marker");
    } else if (cell === "O") {
      div.classList.add("o-marker");
    }

    div.addEventListener("click", () => makeMove(index));
    board.appendChild(div);
  });

  // Update status display on every render unless game is over
  if (gameActive) {
    updateStatus(`Player **${currentPlayer}**'s turn`);
  }
}

function makeMove(index) {
  if (cells[index] !== "" || !gameActive) return;
  cells[index] = currentPlayer; // Check for winner immediately after the move
  if (checkWinner()) {
    renderBoard(); // Render to show the winning move
    gameActive = false;
    updateStatus(`🎉 Player **${cells[index]}** Wins! 🥳`);
    return;
  } // Check for draw

  if (!cells.includes("")) {
    gameActive = false;
    updateStatus("🤝 It's a **Draw**! 🤝");
    renderBoard();
    return;
  } // Switch player

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  renderBoard();
}

// Check winner now returns a boolean
function checkWinner() {
  const combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]; // Check for a win and return true immediately if found

  for (const combo of combos) {
    const [a, b, c] = combo;
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return true;
    }
  }
  return false;
}

resetBtn.addEventListener("click", () => {
  cells = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = "X";
  updateStatus(`Player **X**'s turn`);
  renderBoard();
});

// Initial board setup
renderBoard();
