import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,Alert
} from 'react-native';
import {globalStyles} from '../styles/global'
import * as firebase from 'firebase';

export default class ForgetScreen extends Component {
  state = {
    email: '',
    
    errorMessage: null
  };

  handleForget = () => {
    const { email } = this.state;
    

    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(()=>{Alert.alert('An email has been sent to your inbox')},err=>{Alert.alert(err.message)});
  };

  render() {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.hello}>{'Wanna reset your\nPASSWORD'}</Text>

        <View style={globalStyles.errmsg}>
          {this.state.errorMessage && (
            <Text style={globalStyles.err}>{this.state.errorMessage}</Text>
          )}
        </View>
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
        
        <TouchableOpacity style={globalStyles.button} onPress={this.handleForget}>
          <Text style={{ color: '#fff', fontWeight: '500' }}>Reset Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignSelf: 'center', marginTop: 32 }} onPress={()=>this.props.navigation.navigate('Login')}>
          <Text style={{ color: '#414959', fontSize: 13 }}>
            Wanna sign in?
            <Text style={{ fontWeight: '500', color: 'blue' }}>Sign In</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignSelf: 'center', marginTop: 32 }} onPress={()=>this.props.navigation.navigate('Register')}>
          <Text style={{ color: '#414959', fontSize: 13 }}>
            Or are you new here?
            <Text style={{ fontWeight: '500', color: 'blue' }}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

