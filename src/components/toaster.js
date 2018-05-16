import React from 'react';
import {View,Text} from 'react-native';


class Toaster {
  constructor(){
    this.message = '';
    this.showListener = null;
    this.hideListener = null;
  }

  registerShowListener(listener){
    this.showListener = listener;
    console.log('registerShowListener');
  }
  registerHideListener(listener){
    this.hideListener = listener;
  }

  showMessage(message){
    this.message = message;
console.log(message);
console.log(this);
    if(this.showListener && this.hideListener) {
      this.showListener(message);
      setTimeout(() => {
        this.hideListener();
      }, 3000);
    }
  }
}

export const ToasterView = (props)=>
  <View style={{position:'absolute', top: 30, width:'100%',  backgroundColor: 'red'}}>
    <Text>
      {props.text}
    </Text>
  </View>
;


export default new Toaster();