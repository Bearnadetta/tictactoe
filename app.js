"use strict";

// player factory function
const Player = (playerName, gamePiece) => {
    return {playerName, gamePiece};
}

const gameBoard = (() => {
    let boardArray = ['','','','','','','','','']
    return{boardArray}
})();

const displayController = (() => {
    const boardContainer = document.getElementById('tictactoe-game');
    const squares = Array.from(boardContainer.getElementsByClassName('square'))
    return{boardContainer, squares}
})();

const game = (() => {
    
})();