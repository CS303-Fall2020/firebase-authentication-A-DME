import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from './screens/HomeScreen'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'


import * as firebase from 'firebase'

var firebaseConfig= {
  apiKey: 'AIzaSyBP9uUhwLBoiGkLOEyipKfGMCUG4bcGtes',
  authDomain: 'todo-app-4442e.firebaseapp.com',
  databaseURL: 'https://todo-app-4442e.firebaseio.com',
  projectId: 'todo-app-4442e',
  storageBucket: 'todo-app-4442e.appspot.com',
  messagingSenderId: '385769084560',
  appId: '1:385769084560:web:9d10bfca974e569398aa15'
}

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home:HomeScreen,
})

const screens={
  Login:{
    screen :LoginScreen,
    navigationOptions:  {
      
      headerLeft: null
  },
  Register:{
    screen:RegisterScreen,
    navigationOptions:  {
      
      headerLeft: null
  }
  }
  }
}

  const AuthStack =createStackNavigator({
    Login:LoginScreen,
    Register:RegisterScreen,
    
  })

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading:LoadingScreen,
      App:AppStack,
      Auth:AuthStack
    },
    {
      initialRouteName:'Loading'
    }
  )
)