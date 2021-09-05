const Gameboard = (function() {
    'use strict';
    let display = document.getElementById('tictactoe-game');
    let boardArray = [];
    const makeBoard = function() {
        display.textContent = '';
        for (let i = 0; i < 9; i++) {
            let square = document.createElement('div');
            square.className = 'square';
            square.setAttribute('data-position', i);
            boardArray.push(square);
            display.appendChild(square);
        }
    }
    return {
        makeBoard: makeBoard,
        boardArray: boardArray,
    };
})();

const players = (function(){
    const playerFactory = (playerName, gamePiece) => {
        return {playerName, gamePiece};
    }
    const playerOne = playerFactory('Player 1', 'X');
    const playerTwo = playerFactory('Player 2', 'O');
    return {
        playerOne: playerOne,
        playerTwo: playerTwo,
    }
})();


Gameboard.makeBoard();
console.log(players);