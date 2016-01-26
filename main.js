console.log("main.js loaded!");

/* Model */

var won = false;
var currentPlayer = "X";
var board = [
"", "", "", // 0, 1, 2,
"", "", "", // 3, 4, 5,
"", "", "", // 6, 7, 8
];

// 1. Start the Game
// 2. Move (Changes turn)
// inputs:
// - whose turn it is,
// - what cell

// outputs:
// - fill in cell with the right player
// - calculate if there is a winner
// - turn changes

var move = function(cellIndex){
  board[cellIndex] = currentPlayer;
  if (gameWon()) {
  won = true;
} else {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
 }
// currentPlayer = (currentPlayer === "X" ? "O" : "X");
// ? turn area operator
}
};





// 3. Win the Game

var gameWon = function() {};
