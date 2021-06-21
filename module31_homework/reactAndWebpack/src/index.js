import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './components/reducers';
import { carCardReducer } from './components/reducers/carCardReducer';
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from './utils/apollo-client';
const middlewares = [
  thunk,
];


const store = createStore(rootReducer, compose(
  applyMiddleware(
    ...middlewares
  ),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <Provider store={store} >
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
