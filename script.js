let currentPlayer = "X";
let board = Array(9).fill("");
let gameActive = true;

const winCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
  [0, 4, 8], [2, 4, 6]             // diagonals
];

function makeMove(cell, index) {
  if (!gameActive || board[index] !== "") return;

  board[index] = currentPlayer;
  cell.textContent = currentPlayer;

  if (checkWin()) {
    document.getElementById("status").textContent = `Player ${currentPlayer} Wins!`;
    gameActive = false;
    return;
  }

  if (board.every(cell => cell !== "")) {
    document.getElementById("status").textContent = "It's a Draw!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  document.getElementById("status").textContent = `Player ${currentPlayer}'s Turn`;
}

function checkWin() {
  return winCombos.some(combo => {
    return combo.every(index => board[index] === currentPlayer);
  });
}

function resetGame() {
  board = Array(9).fill("");
  currentPlayer = "X";
  gameActive = true;
  document.getElementById("status").textContent = `Player ${currentPlayer}'s Turn`;

  const cells = document.getElementsByClassName("cell");
  for (let cell of cells) {
    cell.textContent = "";
  }
}
