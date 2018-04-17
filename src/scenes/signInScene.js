import {View, Text, Image, ScrollView, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import styles from "../themes/styles";
import Input from "../components/input";
import Button from "../components/button";
import Loader from "../components/loader";
import {signIn} from "../actions"

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      loading: false,
    }
  }

  loginButtonPress() {
    this.setState({loading: true});

    signIn(this.state)
      .then(Actions.list)
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
                 source={require('../themes/logo.png')}
          />
          <Text style={styles.companyName}>
            Awesome company
          </Text>
        </View>
        <Input
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          placeholder="email"
          keyboardType="email-address"
          icon="user"
          additionalStyle={styles.inputWrapperTop}/>

        <Input
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          secureTextEntry={true}
          placeholder="password"
          icon="key"
          additionalStyle={styles.inputWrapperBottom}/>
        <View>
          <TouchableOpacity onPress={Actions.signUp}>
            <Text style={styles.signUpLink}>Sign Up</Text>
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
          <Button text="LOGIN" click={this.loginButtonPress.bind(this)}/>
        </View>
      </KeyboardAvoidingView>

    );
  }
}

export default App;