import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Timer from './components/timer';
import { Provider } from 'react-redux';
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Timer/>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
