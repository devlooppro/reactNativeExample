import {View, TouchableOpacity} from "react-native";
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Actions} from 'react-native-router-flux';

import styles from "../themes/styles";

const Nav = (props) => (
  <View
    style={styles.nav}
  >
    <TouchableOpacity onPress={Actions.list}>
      <Icon name="list" size={30} color={props.active == 'list' ? '#2c3e50' : '#7f8c8d'}/>
    </TouchableOpacity>
    <TouchableOpacity>
      <Icon name="map" size={30} color={props.active == 'map' ? '#2c3e50' : '#7f8c8d'}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={Actions.profile}>
      <Icon name="user" size={30} color={props.active == 'profile' ? '#2c3e50' : '#7f8c8d'}/>
    </TouchableOpacity>
    <TouchableOpacity>
      <Icon name="bars" size={30} color={props.active == 'bars' ? '#2c3e50' : '#7f8c8d'}/>
    </TouchableOpacity>

  </View>
);

export default Nav;