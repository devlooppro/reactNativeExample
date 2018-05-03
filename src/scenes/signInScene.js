import {View, Text, Image, ScrollView, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import styles from "../themes/styles";
import Input from "../components/input";
import Button from "../components/button";
import Loader from "../components/loader";
import {signIn, changeAuthData} from "../actions"

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    }
  }
  componentWillMount(){
    console.log('props',this.props);
  }

  changeAuthData(field,value){
    this.props.changeAuthData(field,value);
  }

  loginButtonPress() {
    this.setState({loading: true});

    this.props.signIn(this.props.auth)
      .then(Actions.profile)
      .catch(error=>{alert(error)})
      .finally(() => {
        this.setState({loading: false})
      });
  }

  renderForm() {
    return (
      <View>
        <View style={styles.top}>
          <Image style={styles.logo}
                 source={require('../themes/coffee-logo.png')}
          />

        </View>
        <Input
          onChangeText={(email) => this.changeAuthData('email',email)}
          value={this.props.auth.email}
          placeholder="email"
          keyboardType="email-address"
          icon="user"
         />

        <Input
          onChangeText={(password) => this.changeAuthData('password',password)}
          value={this.props.auth.password}
          secureTextEntry={true}
          placeholder="password"
          icon="key"
          />
        <View>
          <View style={styles.navigation}>
            <Button text="LOGIN" click={this.loginButtonPress.bind(this)}/>
          </View>
          <TouchableOpacity>
            <Text style={styles.signUpLink}>reset password</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    return (

      <KeyboardAvoidingView behavior="padding" style={styles.container}>

        <ScrollView style={styles.content}>

          {this.state.loading ? <Loader/> : this.renderForm()}
        </ScrollView>
        <View style={styles.navigation}>
          <TouchableOpacity onPress={Actions.signUp}>
            <Text style={styles.signUpLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

    );
  }
}

export default connect(({auth})=>{ return {auth}}, { changeAuthData, signIn })(App);