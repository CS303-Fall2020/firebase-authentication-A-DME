import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import * as firebase from 'firebase';

export default class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
    errorMessage: null
  };

  handleLogin = () => {
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => this.setState({ errorMessage: err.message }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>{'Hello again\nWelcome back'}</Text>

        <View style={styles.errmsg}>
          {this.state.errorMessage && (
            <Text style={styles.err}>{this.state.errorMessage}</Text>
          )}
        </View>
        <View style={styles.form}>
          <Text style={styles.iTitle}>Email</Text>
          <TextInput
            style={styles.input}
            autoCapitalize='none'
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          ></TextInput>
        </View>
        <View style={{ marginTop: 32 }}>
          <Text style={styles.iTitle}>Password</Text>
          <TextInput
            style={styles.input}
            autoCapitalize='none'
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={{ color: '#fff', fontWeight: '500' }}>SignIn</Text>
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
    fontSize: 13,
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
