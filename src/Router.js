import React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';

import welcomeScene from './scenes/welcomeScene';
import singInScene from './scenes/signInScene';
import signUpScene from './scenes/signUpScene';
import listScene from './scenes/listScene';
import itemScene from './scenes/itemScene';
import profileScene from './scenes/profileScene';

const Routers = () => <Router>
  <Scene key="root">
    <Stack key="unregistered">
      <Scene key="signIn"
             component={singInScene}
             title=""
             hideNavBar

      />
      <Scene key="signUp"
             component={signUpScene}
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
      <Scene key="profile"
             component={profileScene}
             title=""
             hideNavBar

      />
    </Stack>

  </Scene>
</Router>;


export default Routers;