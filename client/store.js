import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

const enhancers = compose(
 applyMiddleware(thunk),
 window.devToolsExtension ? window.devToolsExtension() : f => f
)

let data = document.getElementById('app').dataset
let remember = data.remember === 'true'

const store = createStore(rootReducer, { remember }, enhancers)

if(module.hot) {
 module.hot.accept('./reducers/',() => {
   const nextRootReducer = require('./reducers/index').default;
   store.replaceReducer(nextRootReducer);
 });
}

export const history = syncHistoryWithStore(browserHistory, store)

export default store
