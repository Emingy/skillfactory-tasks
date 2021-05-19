import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './components/reducers';
import { carCardReducer } from './components/reducers/carCardReducer';


const middlewares = [
  thunk,
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTANSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
