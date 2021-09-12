// player factory function
const Player = (playerName, gamePiece) => {
    return {playerName, gamePiece};
}

const gameBoard = (() => {
    let gameArray = []
    for( let i = 0; i < 9; i++) {
        gameArray.push('')
    }
    return{gameArray}; //returns board array in object
})();

const displayController = (() => {
    function makeBoard() {
        let display = document.getElementById('tictactoe-game')
        let squaresCollection = display.getElementsByClassName('square')
        let squares = Array.prototype.slice.call(squaresCollection)
        let boardArray = gameBoard.gameArray;
        squares.forEach((square, i) => {
            square.setAttribute('data-position', i)
                square.addEventListener('click', () => {
                    let data = square.getAttribute('data-position')
                    console.log(data)
                    if(boardArray[data] === '') {
                        boardArray[data] = gameLogic.activePlayer.gamePiece
                        square.textContent = gameLogic.activePlayer.gamePiece
                        gameLogic.winCheck();
                        gameLogic.togglePlayer()
                    }
                })
        });
    }
    return{makeBoard};
})
const gameLogic = (() => {
    // establishing variables for setup, creating two players
    const playerOne = Player('PlayerOne', 'X')
    const playerTwo = Player('PlayerTwo', 'O')
    let activePlayer = playerOne; 

    //an Array of potential win conditions
    const winCons = [[0,1,2,],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]]; 
    //switches the current active player
    function startGame() {
        displayController.makeBoard;
        this.activePlayer = playerOne;
    }
    function togglePlayer() {
        this.activePlayer === playerOne ? this.activePlayer = playerTwo : this.activePlayer = playerOne;
    }
    //called on each legal play in order to check for a winner or a draw
    function winCheck() {
        let myArray = gameBoard.boardArray
        console.log(myArray)
        let winner = ''
        let gameOver = false
        winCons.forEach((item) => {
            if (myArray[item[0]] === this.activePlayer.gamePiece && myArray[item[1]] === this.activePlayer.gamePiece && myArray[item[2]] === this.activePlayer.gamePiece) {
                winner = this.activePlayer.playerName
            } 
        })
        if (!myArray.includes('') && winner === '') {
            gameOver = true;
            return alert('it\'s a draw!')
        } else if (winner !== '') {
            gameOver = true;
            return alert('Game Over! ' + winner + ' is the winner!') 
        }
        if(gameOver === true) {

        }
    }

    return {activePlayer, togglePlayer, winCheck, startGame};
})();

gameLogic.startGame();

