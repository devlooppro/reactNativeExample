import React, {Component} from 'react';
import {View} from 'react-native';

import Toaster, {ToasterView} from './toaster';


export default  class RootScene extends Component {
  constructor(){
    super();
    this.state = {
      showToaster: false,
      message: ''
    }
  }
  componentDidMount(){
    Toaster.registerShowListener(this.handleShowToaster.bind(this));
    Toaster.registerHideListener(this.handleHideToaster.bind(this));
  }
  handleShowToaster(message){
    this.setState({message, showToaster: true})
  }
  handleHideToaster(){
    this.setState({showToaster: false})
  }
  render() {
    return  <View style={{flex:1}}>
        {this.props.children}
        {this.state.showToaster?<ToasterView text={this.state.message}/>:null}
      </View>

  }

}


