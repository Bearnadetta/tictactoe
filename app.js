
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
            square.textContent = (boardArray[i]); 
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
        takeTurn = function(){
            let attribute = this.getAttribute('data-position');
            let symbol = currentPlayer.gamePiece;
            if(Gameboard.boardArray[attribute] === ''){
                Gameboard.boardArray[attribute] = symbol;
                Gameboard.makeBoard();
                togglePlayer();
            }
        }
        return { playerName, gamePiece, takeTurn};
    }
    
    const playerOne = playerFactory('Player 1', 'X');
    const playerTwo = playerFactory('Player 2', 'O');
    let currentPlayer = playerOne;
    let otherPlayer = playerTwo;
    const togglePlayer = function() {
        let storedVal = currentPlayer;
        currentPlayer = otherPlayer;
        otherPlayer = storedVal;
        return(currentPlayer, otherPlayer)
    }
    return {playerOne, playerTwo, takeTurn, togglePlayer}
})();

const GameLogic = (function() {
    let arrayValues = Gameboard.boardArray;
    return {arrayValues};
})();

Gameboard.makeBoard();
//console.log(players);