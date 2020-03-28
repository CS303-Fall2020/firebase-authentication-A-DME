import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {globalStyles} from '../styles/global'
import * as firebase from 'firebase';

export default class RegisterScreen extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirm:'',
    // errorMessage: null
  };

  handleSignUp=()=>{
    if(this.state.passwordConfirm!==this.state.password){
      Alert.alert('Passwords do not match')
      return;
    }


    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(userCredentials=>{
      return userCredentials.user.updateProfile({
        displayName:this.state.name
      })
    }).catch(err=>{Alert.alert(err.message)})
  }

  render() {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.hello}>{'Hello\nSign up to get started'}</Text>

        {/* <View style={globalStyles.errmsg}>
          {this.state.errorMessage && (
            <Text style={globalStyles.err}>{this.state.errorMessage}</Text>
          )}
        </View> */}
        <View style={globalStyles.form}>
          <Text style={globalStyles.iTitle}>Full Name</Text>
          <TextInput
            style={globalStyles.input}
            autoCapitalize='none'
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
          ></TextInput>
        </View>
        <View style={{ marginTop: 2,marginHorizontal:30 }}>
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
        <View style={{ marginTop: 32,marginHorizontal:30 }}>
          <Text style={globalStyles.iTitle}>Confirm Password</Text>
          <TextInput
            style={globalStyles.input}
            autoCapitalize='none'
            onChangeText={passwordConfirm => this.setState({ passwordConfirm })}
            value={this.state.passwordConfirm}
            secureTextEntry={true}
            autoCorrect={false}
          ></TextInput>
        </View>
        <TouchableOpacity style={globalStyles.button} onPress={this.handleSignUp}>
          <Text style={{ color: '#fff', fontWeight: '500' }}>SignUp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignSelf: 'center', marginTop: 32 }} onPress={()=>this.props.navigation.navigate('Login')}>
          <Text style={{ color: '#414959', fontSize: 13 }}>
            An old member?
            <Text style={{ fontWeight: '500', color: 'blue' }}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


