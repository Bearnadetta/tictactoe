/*
const Gameboard = (function() {
    let display = document.getElementById('tictactoe-game');
    let boardArray = ['','','','','','','','',''];
    const reset = function() {
        Gameboard.boardArray = ['','','','','','','','',''];
        boardArray = ['','','','','','','','',''];
        let squares = display.querySelectorAll('.square')
        for (let i = 0; i < squares.length; i++) {
            let square = (squares[i]);
            square.remove();
        }
        Gameboard.makeBoard();
    }
    const makeBoard = function() {
        display.textContent = '';
        for (let i = 0; i < boardArray.length; i++) {
            let square = document.createElement('div');
            square.className = 'square';
            square.setAttribute('data-position', i);
            square.addEventListener('click', players.takeTurn);
            square.textContent = (boardArray[i]); 
            display.appendChild(square);
        }
    }
    return {makeBoard, boardArray, reset};
})();

const players = (function(){
    const playerFactory = (playerName, gamePiece) => {
        takeTurn = function(){
            let attribute = this.getAttribute('data-position');
            let symbol = currentPlayer.gamePiece;
            if(Gameboard.boardArray[attribute] === ''){
                Gameboard.boardArray[attribute] = symbol;
                Gameboard.makeBoard();
                GameLogic.checkWin();
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
        return(currentPlayer, otherPlayer);
    }
    return {playerOne, playerTwo, takeTurn, togglePlayer, currentPlayer, otherPlayer}
})();

const GameLogic = (function() {
    let arrayValues = Gameboard.boardArray;
    const checkWin = function(){
        if((arrayValues[0] === arrayValues[1] && arrayValues[1] === arrayValues[2] && arrayValues[1] !== '') 
        || (arrayValues[0] === arrayValues[3] && arrayValues[3] === arrayValues[6] && arrayValues[3] !== '')
        || (arrayValues[0] === arrayValues[4] && arrayValues[4] === arrayValues[8] && arrayValues[4] !== '')
        || (arrayValues[1] === arrayValues[4] && arrayValues[4] === arrayValues[7] && arrayValues[4] !== '')
        || (arrayValues[2] === arrayValues[5] && arrayValues[5] === arrayValues[8] && arrayValues[5] !== '')
        || (arrayValues[3] === arrayValues[4] && arrayValues[4] === arrayValues[5] && arrayValues[4] !== '')
        || (arrayValues[6] === arrayValues[4] && arrayValues[4] === arrayValues[2] && arrayValues[4] !== '')
        || (arrayValues[6] === arrayValues[7] && arrayValues[7] === arrayValues[8] && arrayValues[7] !== '')){
            let winner = players.currentPlayer.playerName;
            alert('The winner is ' + winner + '!');
        } else if( arrayValues[0] !== '' && arrayValues[1] !== '' && arrayValues[2] !== '' && arrayValues[3] !== '' && arrayValues[4] !== ''
        && arrayValues[5] !== '' && arrayValues[6] !== '' && arrayValues[7] !== '' && arrayValues[8] !== '') {
            alert('it\'s a draw!');
        }
    }
    return{checkWin,}
})();

Gameboard.makeBoard();
//console.log(players);
*/

//let's try this, but better and with my failures under my belt

const Player = (playerName, gamePiece) => {
    return {playerName, gamePiece}
}

const gameBoard = (() => {
    const makeBoard = () => {
        let display = document.getElementById('tictactoe-game');
        let currentArray = gameLogic.boardArray;
        for (let i = 0; i < currentArray.length; i++) {
            let square = document.createElement('div');
            square.className = 'square';
            square.setAttribute('data-position', i);
            square.addEventListener('click', console.log(this));
            square.textContent = ''; 
            display.appendChild(square);
        }

    }
    return{makeBoard}
})();

const gameLogic = (() => {
    const boardArray = ['','','','','','','','',''];
    return {boardArray}
})();
gameBoard.makeBoard()