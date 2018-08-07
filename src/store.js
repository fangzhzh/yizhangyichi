import { createStore, applyMiddleware, compose } from 'redux';
// import { routerMiddleware } from 'react-router-redux';
// import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootReducer from './reducer';
// import mySaga from './sagas';

const history = createBrowserHistory();
// saga
// const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const enhancers = [];
const middleware = [];
// const middleware = [sagaMiddleware, routerMiddleware(history)];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
  })
  : compose;

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = composeEnhancers(
  applyMiddleware(...middleware, routerMiddleware(history)),
  ...enhancers,
);

const store = createStore(connectRouter(history)(rootReducer), initialState, composedEnhancers);
// sagaMiddleware.run(mySaga);

export default { ...store, history };
