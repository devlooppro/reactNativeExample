import {TouchableOpacity, ScrollView, View, Image} from "react-native";
import React, {Component} from "react";
import Layout from "../components/layout"
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ImagePicker from "react-native-image-picker";
import {connect} from 'react-redux';

import Input from "../components/input";
import Loader from "../components/loader";
import Button from "../components/button";
import {profileStyle} from "../themes/styles";
import {changeAuthData,updateUser} from "../actions";

class profileScene extends Component {

  constructor() {
    super();
    this.state = {loading: false}
  }

  componentWillMount() {

  }
  changeAuthData(field,value){
    this.props.changeAuthData(field,value);
  }

  updateButtonPress(){
    this.props.updateUser(this.props.auth);
  }
  uploadAvatarPress(){
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    ImagePicker.showImagePicker({}, (response) => {
   //   if(response.didCancel) reject(new Error('Image picker cancelled'));

    //  else if(response.error) reject(response.error);
     // else resolve(response);
    });

  }
  render() {
    return (
      <Layout title="Your profile" active="profile">
        <ScrollView>
          {this.state.loading ? <Loader/> : null}
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={profileStyle.avatarButton} onPress={this.uploadAvatarPress.bind(this)}>
              <Image style={profileStyle.avatar}
                     source={require('../themes/cup.png')}/>
              <Icon style={profileStyle.avatarEditIcon} name="pencil" size={20} color="#7f8c8d" />
            </TouchableOpacity>
          </View>
          <View style={profileStyle.editSettings}>
            <Input
              onChangeText={(name) => this.changeAuthData('name',name)}
              value={this.props.auth.name}
              placeholder="name"
              icon="user"
            />
            <Input
              onChangeText={(email) => this.changeAuthData('email',email)}
              value={this.props.auth.email}
              placeholder="email"
              keyboardType="email-address"
              icon="user"
            />
            <Input
              onChangeText={(phone) => this.changeAuthData('phone',phone)}
              value={this.props.auth.phone}
              placeholder="phone"
              keyboardType="phone-pad"
              icon="phone"
            />
            <View style={profileStyle.editSettingsButton}>
              <Button text="Update" click={this.updateButtonPress.bind(this)}/>
            </View>
          </View>
        </ScrollView>
      </Layout>
    )
  }
}

export default connect(({auth})=>{ return {auth}}, {changeAuthData, updateUser})(profileScene);
