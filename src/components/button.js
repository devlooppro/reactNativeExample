import {TouchableOpacity, Text} from "react-native";
import React from 'react';
import styles from "../themes/styles";
import PropTypes from 'prop-types';


const Button = (props) => (
  <TouchableOpacity
    onPress={props.click}
    style={styles.button}
  >
    <Text style={styles.buttonInside}> {props.text} </Text>
  </TouchableOpacity>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  click: PropTypes.func
}
export default Button;