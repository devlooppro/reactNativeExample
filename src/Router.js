import React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';

import welcomeScene from './scenes/welcomeScene';
import loginScene from './scenes/loginScene';
import listScene from './scenes/listScene';
import itemScene from './scenes/itemScene';

const Routers = () => <Router>
  <Scene key="root">
    <Stack key="unregistered">
      <Scene key="login"
             component={loginScene}
             title=""
             hideNavBar
      />

      <Scene key="welcome"
             component={welcomeScene}
             title=""
             hideNavBar
      />
      <Scene key="list"
             component={listScene}
             title=""
             hideNavBar
             initial
      />
      <Scene key="item"
             component={itemScene}
             title=""
             hideNavBar
      />
    </Stack>

  </Scene>
</Router>;


export default Routers;