import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import {globalStyles} from '../styles/global'
import * as firebase from 'firebase';

export default class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
    // errorMessage: null
  };

  handleLogin = () => {
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {Alert.alert(err.message)});
  };

  render() {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.hello}>{'Hello again\nWelcome back'}</Text>

        {/* <View style={globalStyles.errmsg}>
          {this.state.errorMessage && (
            <Text style={globalStyles.err}>{this.state.errorMessage}</Text>
          )}
        </View> */}
        <View style={globalStyles.form}>
          <Text style={globalStyles.iTitle}>Email</Text>
          <TextInput
            style={globalStyles.input}
            autoCapitalize='none'
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            keyboardType='email-address'
            autoCorrect={false}
          ></TextInput>
        </View>
        <View style={{ marginTop: 32,marginHorizontal:30 }}>
          <Text style={globalStyles.iTitle}>Password</Text>
          <TextInput
            style={globalStyles.input}
            autoCapitalize='none'
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            secureTextEntry={true}
            autoCorrect={false}
          ></TextInput>
        </View>
        <TouchableOpacity style={globalStyles.button} onPress={this.handleLogin}>
          <Text style={{ color: '#fff', fontWeight: '500' }}>SignIn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.button} onPress={()=>this.props.navigation.navigate('Forget')}>
          <Text style={{ color: '#fff', fontWeight: '500' }}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignSelf: 'center', marginTop: 32 }} onPress={()=>this.props.navigation.navigate('Register')}>
          <Text style={{ color: '#414959', fontSize: 13 }}>
            New here?
            <Text style={{ fontWeight: '500', color: 'blue' }}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  hello: {
    marginTop: 32,
    fontSize: 22,
    fontWeight: '400',
    textAlign: 'center'
  },
  errmsg: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30
  },
  err: {
    color: '#E9446A',
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center'
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30
  },
  iTitle: {
    color: '#8A8F9E',
    fontSize: 10,
    textTransform: 'uppercase'
  },
  input: {
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#161F30'
  },
  button: {
    marginHorizontal: 30,
    marginTop:32,
    backgroundColor: 'grey',
    borderRadius: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
