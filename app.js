
const Gameboard = (function() {
    'use strict';
    let display = document.getElementById('tictactoe-game');
    let boardArray = ['','','','','','','','',''];
    const makeBoard = function() {
        display.textContent = '';
        for (let i = 0; i < boardArray.length; i++) {
            let square = document.createElement('div');
            square.className = 'square';
            square.setAttribute('data-position', i);
            square.addEventListener('click', players.takeTurn);
            //writes the boardArray value to the square if the value is X or O
                if(boardArray[i] == 'X' || boardArray[i] == 'O') {
                    square.textContent = (boardArray[i]); }
            display.appendChild(square);
        }
    }
    return {
        makeBoard: makeBoard,
        boardArray: boardArray,
    };
})();

const players = (function(){
    let targetSquare = '';
    const playerFactory = (playerName, gamePiece) => {
        return {
            playerName: playerName,
            gamePiece: gamePiece,
        };
    }
    const takeTurn = function(){
        console.log(this);
    }
    const playerOne = playerFactory('Player 1', 'X');
    const playerTwo = playerFactory('Player 2', 'O');
    return {
        playerOne: playerOne,
        playerTwo: playerTwo,
        takeTurn: takeTurn,
    }
})();

const gameLogic = (function() {
    let arrayValues = Gameboard.boardArray;
    return console.log(arrayValues);
})();

Gameboard.makeBoard();
//console.log(players);