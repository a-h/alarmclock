import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { secondElapsed } from './components/timer';
import { Provider } from 'react-redux';
import { default as rootReducer, defaultState } from './reducers'
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, defaultState, composeEnhancers(
  applyMiddleware(thunk)))

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
  },
  typography: {
    useNextVariants: true,
  },
});

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    useNextVariants: true,
  },
});

const getTheme = darkMode => {
  if (darkMode) {
    return darkTheme;
  }
  return lightTheme;
}

const Root = ({ isInDarkMode }) => (
  <MuiThemeProvider theme={getTheme(isInDarkMode)}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>
);

const mapStateToProps = state => ({
  isInDarkMode: state.app.modes.isInDarkMode,
});

const RootContainer = connect(mapStateToProps, {})(Root);

ReactDOM.render(
  <Provider store={store}>
    <RootContainer />
  </Provider>,
  document.getElementById('root')
);

setInterval(() => store.dispatch(secondElapsed()), 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
