import {View, Text, Image, ScrollView, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import styles from "../themes/styles";
import Input from "../components/input";
import Button from "../components/button";
import Loader from "../components/loader";
import {signUp} from "../actions"

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      loading: false,
    }
  }

  loginButtonPress() {
    this.setState({loading: true});

    signUp(this.state)
      .then(Actions.list)
      .catch(error => {
        alert(error)
      })
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
        <Input onChangeText={(name) => this.setState({name})}
               value={this.state.name}
               placeholder="name" icon="user" additionalStyle={styles.inputWrapperTop}/>
        <Input onChangeText={(email) => this.setState({email})}
               value={this.state.email}
               placeholder="email" icon="envelope"/>
        <Input onChangeText={(password) => this.setState({password})}
               value={this.state.password}
               placeholder="password" icon="key" additionalStyle={styles.inputWrapperBottom}/>
        <View>
          <TouchableOpacity onPress={Actions.signIn}>
            <Text style={styles.signUpLink}>Sign In</Text>
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
          <Button text="Sign up" click={this.loginButtonPress.bind(this)}/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default App;