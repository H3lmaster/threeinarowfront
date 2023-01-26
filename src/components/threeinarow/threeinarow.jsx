import React from 'react';
import Board from "../board/board";

class ThreeInARow extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            board: [null, null, null, null, null, null, null, null, null],
            nextPlayer: "X",
            result: ""
        }
    } 

    squareClick(i) {
        if ( this.state.result != "" ) return;
        const board = this.state.board.slice();
        board[i] = this.state.nextPlayer === "X" ? "X" : "O";
        this.checkWinner(board, this.state.nextPlayer);
    }

    async checkWinner(board, currentPlayer) {
        const response = await fetch('http://localhost:8080/api/threeinarow',{
                method: 'POST',
                body: JSON.stringify({
                    positionsPlayed: board,
                    currentPlayer: currentPlayer
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });

        const results = await response.json();
        let result = results.currentPlayerWon? "The player " + this.state.nextPlayer + " is the winner" : "";

        this.setState({
            board: board,
            nextPlayer: this.state.nextPlayer === "X" ? "O" : "X",
            result: result
        })
    }

    render() {

        const boardSquares = this.state.board;

        return (
            <Board squares={boardSquares}
                   onClick={(i) => this.squareClick(i)} 
                   currentPlayer={this.state.nextPlayer}
                   result={this.state.result}
            />
        );
    }
    
}

export default ThreeInARow;