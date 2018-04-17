import {View, TextInput} from "react-native";
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from "../themes/styles";


class Input extends Component {

  render() {
    const {props} = this;
    return (
      <View style={[styles.inputWrapper, props.additionalStyle]}>
        <View style={styles.iconWrapper}>
          <Icon name={props.icon} size={20} color="#fcfcfd" style={styles.inputIcon}/>
        </View>
        <TextInput {...props} style={styles.textInput} placeholderTextColor="#fcfcfd"/>
      </View>
    )
  }
}


export default Input;