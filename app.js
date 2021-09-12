"use strict";

// player factory function
const Player = (playerName, gamePiece) => {
    return {playerName, gamePiece};
}

const gameBoard = (() => {
    let boardArray = ['','','','','','','','','']
    return{boardArray}
})();