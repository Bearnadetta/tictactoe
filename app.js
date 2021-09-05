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



Gameboard.makeBoard();