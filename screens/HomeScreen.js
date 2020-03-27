import React, { Component } from 'react';
import { View, Text, StyleSheet  ,TouchableOpacity} from 'react-native';
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
      <View style={styles.container}>
        <Text>{this.state.email}</Text>
        <Text> نورت بيتك ياخويا...اطلع برا بقا</Text>
<TouchableOpacity style={{marginTop:32}} onPress={this.signOutUser}>
  <Text>Logout</Text>
</TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
