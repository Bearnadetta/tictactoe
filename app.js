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
    return{boardContainer, squares, resetBtn, newGameBtn}
})();

const game = (() => {
    let gameState = gameBoard.boardArray;
    let grid = displayController.squares;
    // establishing variables for setup, creating two players
    const playerOne = Player('PlayerOne', 'X')
    const playerTwo = Player('PlayerTwo', 'O')
    let activePlayer = playerOne; 
    //an Array of potential win conditions
    const winCons = [[0,1,2,],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]]; 
    //starts and resets the game by emptying squares
    function reset() {
        grid.forEach(square => square.textContent = '')
        gameState = ['','','','','','','','',''];
        activePlayer = playerOne;
    }
    //switches the current active player
    function togglePlayer() {
        activePlayer === playerOne ? activePlayer = playerTwo : activePlayer = playerOne;
    }
    function winCheck() {
        let winner = ''
        let gameOver = false
        console.log(activePlayer.gamePiece)
        winCons.forEach((item) => {
            if (gameState[item[0]] === activePlayer.gamePiece && gameState[item[1]] === gameState.gamePiece && gameState[item[2]] === activePlayer.gamePiece) {
                winner = activePlayer.playerName
                
            } 
        })
        if (!gameState.includes('') && winner === '') {
            gameOver = true;
            return alert('it\'s a draw!')
        } else if (winner !== '') {
            gameOver = true;
            return alert('Game Over! ' + winner + ' is the winner!') 
        }
        if(gameOver === true) {

        }
    }
    function boardSet() {
        grid.forEach((square, i) => {
            square.setAttribute('data-position', i)
            square.addEventListener('click', () => {
            let data = square.getAttribute('data-position')
            console.log(data);
            if (gameState[data] === '') {
                gameState[data] = activePlayer.gamePiece
                square.textContent = activePlayer.gamePiece
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