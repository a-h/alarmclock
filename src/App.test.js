import React from 'react';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import { defaultState } from './reducers'
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const rootReducer = state => state;
  const store = createStore(rootReducer, defaultState);
  ReactDOM.render(
    <Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
