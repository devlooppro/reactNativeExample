import React from 'react';
import {AppRegistry} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router';
import reducers from './src/reducers';

import RootScene from './src/components/rootScene';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const App = () =>
  <Provider store={store}>
    <RootScene>
      <Router/>
    </RootScene>
  </Provider>;


AppRegistry.registerComponent('App2', () => App);
