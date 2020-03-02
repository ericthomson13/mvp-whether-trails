import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';

import rootReducer from './store/reducers/rootReducer';
import App from './screens/Main';

const client = axios.create({});
const store = createStore(rootReducer, applyMiddleware(thunk, axiosMiddleware(client)));

const ReduxApp = () => {
  return (
    <Provider store={store} ><App /></Provider>
  )
};

export default ReduxApp;