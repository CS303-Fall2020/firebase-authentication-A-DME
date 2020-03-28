import React, { Component } from 'react';
import { View, Text, StyleSheet  ,TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/global'
import * as firebase from 'firebase'

export default class HomeScreen extends Component {
 state ={
   email:"",
   displayName:""
 }
 
 componentDidMount(){
   const {email,displayName}=firebase.auth().currentUser

   this.setState({email,displayName})
 }


 signOutUser=()=>{
   firebase.auth().signOut()
 }
 
 
  render() {
    return (
      <View style={globalStyles.container2}>
        <Text style={{marginTop:50,fontSize:30}}>{this.state.email}</Text>
        <Text style={{marginTop:32,fontSize:30}}> نورت بيتك ياخويا...اطلع برا بقا</Text>
<TouchableOpacity style={globalStyles.button2} onPress={this.signOutUser}>
  <Text style={{textDecorationColor:'white'}}>Logout</Text>
</TouchableOpacity>

      </View>
    );
  }
}


