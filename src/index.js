import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss'
import App from './App';
import {createStore}from 'redux'
import allReducers from './reducers';
import {Provider} from 'react-redux'
const store=createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//redux store (globalized state)

//action what i need the stuff to do (action=function that returns an object)

//reducer describes actions how to transform

//dispatch:: execute that action:: send message to reducer, reducer checks what to do, store gets updated

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

