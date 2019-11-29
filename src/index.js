import React from 'react';
import ReactDOM from 'react-dom';
import Game from "./component/Game";
import './index.css';
import {createStore} from 'redux';
import rootReducer from "./redux/rootReducer"; //начальный редусер для иницилизации State
import {Provider} from 'react-redux'

const store = createStore(rootReducer); // инициализуем Store

//Оборачиваем наше приложение в Redux
const app = (
    <Provider store={store}>
        <Game />
    </Provider>
)

ReactDOM.render(
    app,
    document.getElementById('root')
);
