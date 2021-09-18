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
    const resetBtn = document.getElementById('resetBtn');
    const newGameBtn = document.getElementById('newGameBtn');
    const renamePlayerOneBtn = document.getElementById('renamePlayerOne');
    const renamePlayerTwoBtn = document.getElementById('renamePlayerTwo');
    const startBtn = document.getElementById('startBtn');
    const gameMenu = document.getElementById('winAlertDisplay');
    const winMessage = document.getElementById('winMessage');
    const playerOneTitle = document.getElementById('playerOne');
    const playerTwoTitle = document.getElementById('playerTwo');
    const playerOneName = document.getElementById('playerOneName');
    const playerTwoName = document.getElementById('playerTwoName');
    return{boardContainer, 
        squares, 
        resetBtn, 
        newGameBtn, 
        renamePlayerOneBtn, 
        renamePlayerTwoBtn, 
        startBtn, 
        gameMenu,
        winMessage,
        playerOneTitle,
        playerTwoTitle,
        playerOneName,
        playerTwoName
    }
})();

const game = (() => {
    let gameState = gameBoard.boardArray;
    let grid = displayController.squares;
    // establishing variables for setup, creating two players
    let gameOver = false
    const playerOne = Player('PlayerOne', 'X')
    const playerTwo = Player('PlayerTwo', 'O')
    let activePlayer = playerOne; 
    //an Array of potential win conditions
    const winCons = [[0,1,2,],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]]; 
    //starts and resets the game by emptying squares
    function reset() {
        grid.forEach((square) => {
            square.textContent = ''
            if(!square.classList.contains('empty')) {
                square.classList.add('empty')
            }
        })
        gameState = ['','','','','','','','',''];
        activePlayer = playerOne;
        gameOver = false
    }
    //switches the current active player
    function togglePlayer() {
        activePlayer === playerOne ? activePlayer = playerTwo : activePlayer = playerOne;
    }
    function winCheck() {
        let winner = ''
        winCons.forEach((item) => {
            if (gameState[item[0]] == activePlayer.gamePiece && gameState[item[1]] == activePlayer.gamePiece && gameState[item[2]] == activePlayer.gamePiece) {
                winner = activePlayer.playerName
            } 
        })
        if (!gameState.includes('') && winner === '') {
            gameOver = true;
            return alert('it\'s a draw!')
        } else if (winner !== '') {
            gameOver = true;
            grid.forEach(square => square.classList.remove('empty'));
            return alert('Game Over! ' + winner + ' is the winner!') 
        }
    }
    function boardSet() {
        grid.forEach((square, i) => {
            square.setAttribute('data-position', i)
            square.classList.add('empty')
            let data = square.getAttribute('data-position')
            square.addEventListener('click', () => {
            if (gameState[data] === '' && gameOver === false) {
                gameState[data] = activePlayer.gamePiece
                square.textContent = activePlayer.gamePiece
                square.classList.remove('empty')
                winCheck();
                togglePlayer();
            }
            })    
        }) 
        resetBtn.addEventListener('click', () => {
            reset();
            console.log(gameState)
        })
    }
    
    return{gameState, reset, togglePlayer, boardSet}
})();
game.boardSet();