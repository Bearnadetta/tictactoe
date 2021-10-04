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
    startBtn.addEventListener('click', function () {
        game.startGame();
    })
    newGameBtn.addEventListener('click', function () {
        game.newGame();
    })
    renamePlayerOneBtn.addEventListener('click', function () {
        let xPlayer = prompt ('Please Enter Your Name', 'Player One')
        if (xPlayer != null) {
            playerOneTitle.textContent = xPlayer
            playerOneName.textContent = xPlayer
        }
    })
    renamePlayerTwoBtn.addEventListener('click', function () {
        let oPlayer = prompt ('Please Enter Your Name', 'Player Two')
        if (oPlayer != null) {
            playerTwoTitle.textContent = oPlayer
            playerTwoName.textContent = oPlayer
        }
    })
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
    let playerX = displayController.playerOneName.textContent
    let playerO = displayController.playerTwoName.textContent
    let playerOne = Player(playerX, 'X')
    let playerTwo = Player(playerO, 'O')
    let activePlayer = playerOne; 
    let boardIsSet = false;
    //an Array of potential win conditions
    const winCons = [[0,1,2,],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]]; 
    //starts and resets the game by emptying squares
    function reset() {
        grid.forEach((square) => {
            square.textContent = ''
            square.classList.remove('full')
            if(!square.classList.contains('empty')) {
                square.classList.add('empty')
            }
        })
        gameState = ['','','','','','','','',''];
        activePlayer = playerOne;
        gameOver = false
    }
    // starts the game, updates player names and titles
    function startGame() {
        
        playerX = displayController.playerOneName.textContent
        playerO = displayController.playerTwoName.textContent
        playerOne = Player(playerX, 'X')
        playerTwo = Player(playerO, 'O')
        activePlayer = playerOne
        displayController.gameMenu.classList.add('invisible')
        boardSet();



    }
    // new game button to bring up menu and allow for renaming
    function newGame() {
        reset()
        displayController.gameMenu.classList.remove('invisible')
        winMessage.textContent = 'Begin with these players?'
    }
    //switches the current active player
    function togglePlayer() {
        activePlayer === playerOne ? activePlayer = playerTwo : activePlayer = playerOne;
    }
    //checks current gamestate for satisfied win conditions
    function winCheck() {
        let winner = ''
        winCons.forEach((item) => {
            if (gameState[item[0]] == activePlayer.gamePiece && gameState[item[1]] == activePlayer.gamePiece && gameState[item[2]] == activePlayer.gamePiece) {
                winner = activePlayer.playerName
            } 
        })
        if (!gameState.includes('') && winner === '') {
            gameOver = true;
            displayController.gameMenu.classList.remove('invisible')
            winMessage.textContent = 'It\'s a draw! Play again?'
            reset()
        } else if (winner !== '') {
            gameOver = true;
            grid.forEach(square => {
                square.classList.remove('empty')
                square.classList.remove('full')
            })
            displayController.gameMenu.classList.remove('invisible')
            winMessage.textContent = (winner + ' is the winner! Play again?')
            reset()
        }
    }
    //creates game board
    function boardSet() {
        if(boardIsSet === false) {
            grid.forEach((square, i) => {
                square.setAttribute('data-position', i)
                square.classList.add('empty')
                let data = square.getAttribute('data-position')
                square.addEventListener('click', () => {
                if (gameState[data] === '' && gameOver === false) {
                    gameState[data] = activePlayer.gamePiece
                    square.textContent = activePlayer.gamePiece
                    square.classList.remove('empty')
                    square.classList.add('full')
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
        boardIsSet = true;
    }
    
    return{gameState, reset, togglePlayer, boardSet, newGame, startGame}
})();
