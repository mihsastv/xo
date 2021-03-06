import React from 'react';
import Square from "./Square";
import '../index.css'

class Board extends React.Component {
    /*constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        };
    }*/ //использовался до хранения истории в компонете Game


    renderSquare(i) {
        return (
            <Square value={this.props.squares[i]}
                    onClick={() => this.props.onClick(i)}
        />
        );
    }


    render() {
        /*const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Победитель: ' + winner;
        } else {
            status = 'Следующий игрок: ' + (this.state.xIsNext ? 'X' : 'O');
        }*/

        return (
            <div style = {{background: '#fc3',
                textAlign: 'center'}}>
                    <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}



export default Board
