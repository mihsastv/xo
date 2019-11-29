import React from 'react';
import {connect} from 'react-redux'
import Board from "./Border";
import './games.css'
import '../index.css'

class Game extends React.Component {
    //был начальный стейт до подключение Redux
    /*constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true
        };
    }*/

    handleClick(i) {
        const history = this.props.state.history.slice(0, this.props.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.props.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.props.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        console.log('APP', this.props)
        const history = this.props.state.history;
        const current = history[this.props.state.stepNumber];
        const winner = calculateWinner(current.squares);


        // eslint-disable-next-line
        const moves= history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (

                <li key = {move}>
                    <button onClick={() => this.jumpTo(move)}
                            className="bot1"
                    >{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Победитель: ' + winner;
        } else {
            status = 'Следующий игрок: ' + (this.props.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game" style = {{background: '#fc3',
                textAlign: 'center'}}>
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        // вызов локальной функции при кликеonClick={(i) => this.handleClick(i)}
                        onClick={(i) => this.props.onHahdleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <div>{moves}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;

}
//получаем свойства из стайта в компонент
function mapStateToProps(state) {
    return{
        state: state
    }
}

//манипуляции со стором
function mapDispatchToProps(dispatch) {
    return{
        onHahdleClick: (number) => dispatch({type: 'HANDELCLICK', payload: number}),
        onJumpTo: () => dispatch({type: 'JUMPTO'})
    }
}

//connect()подключаемся к redux --> возвращает нам новый компнент обернутый в редакс(Game)
//Порядок передачи функций важно
export default connect(mapStateToProps, mapDispatchToProps)(Game)
