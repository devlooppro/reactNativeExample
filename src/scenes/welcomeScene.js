import { View, Image, Text} from "react-native";
import React, { Component } from "react";

import styles from "../themes/styles";
import { checkAuth } from "../actions"
import Loader from '../components/loader';
//import Input from "../components/input";
// constructor()
// componentWillReceiveProps()
// componentWillUpdate()
// componentWillMount()
// render()
// componentDidMount()
// componentDidUpdate()
// componentWillUnmount()



class welcomeScene extends Component {
  constructor(){
    super();
    this.state = {
      isShow: true,
      icon: 'rocket'
    };
  }

  componentWillMount(){
    checkAuth();
  }


  render(){
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Image style={styles.logo}
                 source={require('../themes/coffee-logo.png')}
          />

        </View>
        <Loader/>
      </View>
    )
  }
}

export default welcomeScene;