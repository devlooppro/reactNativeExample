import { View, KeyboardAvoidingView} from "react-native";
import React from 'react';
import Header from "../components/header";
import Nav from "../components/nav";

import styles from "../themes/styles"


const Layout = (props)=> (
  <View style={ styles.container }>
    <Header {...props}/>
    <View style={styles.content}>

      {props.children}

    </View>
    <Nav {...props}/>
  </View>

)

export default Layout;