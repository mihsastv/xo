import React from 'react';
import '../index.css'

/*class Square extends React.Component { //использование в качестве компонента
    /!*constructor(props) { // было при хранении стейта локально
        super(props);
        this.state = {
            value: null,
        }
    }*!/
    /!*onChangeState = () => {
        //this.setState({value: 'X'})
        this.props.onClick()
    }

    render() {
        return (
            <button
                className="square"
                onClick={() => this.onChangeState()}>
                {this.props.value}
            </button>
        );
    }*!/

}
*/

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square
