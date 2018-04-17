import { View, KeyboardAvoidingView} from "react-native";
import React from 'react';
import Header from "../components/header";
import Nav from "../components/nav";

import styles from "../themes/styles"


const Layout = (props)=> (
  <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={66}>
  <View style={ styles.container }>
    <Header/>
    <View style={styles.content}>

      {props.children}

    </View>
    <Nav/>
  </View>
  </KeyboardAvoidingView>
)

export default Layout;