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
// inputs:
// - current player, board, won
//
// output:
// - board is empty


var startGame = function () {
  won = false;
  currentPlayer = "X";
  board = [
    "", "", "", // 0, 1, 2,
    "", "", "", // 3, 4, 5,
    "", "", "", // 6, 7, 8
  ];
};



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
// inputs:
// - board
//
// outputs:
// - true or false

var gameWon = function() {
  if (
    ((board[0] === board[1]) && (board[0] === board[2]) && board [0] !== "") ||
    ((board[3] === board[4]) && (board[3] === board[5]) && board [3] !== "") ||
    ((board[6] === board[7]) && (board[6] === board[8]) && board [6] !== "")
   ){
    return true;
  }else {
    return false;
  }
};


/* Render our view */
var render = function () {

};
