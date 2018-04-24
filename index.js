import React from 'react';
import { AppRegistry } from 'react-native';
//import App from './src/scenes/welcomeScene';
import './src/test';
 import Router from './src/Router';

 const App = ()=>
   <Router/>



AppRegistry.registerComponent('App2', () => App);
