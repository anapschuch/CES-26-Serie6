import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux";
import calculator from "./reducer";
import App from './App';
import thunk from 'redux-thunk';

const middleware = [thunk]

// estado inicial da store
var initialState = {
  expression: '',
  displayE: '',
  result: 0
};
 
// store
var store = createStore(calculator, initialState, composeWithDevTools(applyMiddleware(...middleware)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


