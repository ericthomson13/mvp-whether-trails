import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './store/reducers/rootReducer';
import Main from './screens/Main';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => <Provider store={store} ><Main /></Provider>

export default App;