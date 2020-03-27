import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers/indexreducers';
//import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
/*import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';*/
import * as firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router';

class App extends React.Component {
  componentDidMount(){
  var firebaseConfig = {
  apiKey: "AIzaSyAXY2pH8R8Qk8v3yUrAfCROuTdX4ockc-A",
  authDomain: "covid-981e1.firebaseapp.com",
  databaseURL: "https://covid-981e1.firebaseio.com",
  projectId: "covid-981e1",
  storageBucket: "covid-981e1.appspot.com",
  messagingSenderId: "786210655968",
  appId: "1:786210655968:web:82e0bf41ce7b6438a08a85"
}; 


// Initialize Firebase
if (!firebase.apps.length)
firebase.initializeApp(firebaseConfig);
  }

   render () {
     const store=createStore(reducers, {}, applyMiddleware(ReduxThunk));
     
      return(
          <Provider store={store}>
                  <Router/>  
          </Provider>
      );
  };
};
//const AppStack = createStackNavigator({
//  Home: HomeScreen
//})

//const AuthStack = createStackNavigator({
  //Login: LoginScreen,
  //Register: RegisterScreen
//});

export default App; //createAppContainer(
  //createSwitchNavigator(
 //   {
 //     Loading: LoadingScreen,
 //     App: AppStack,
 //     Auth: AuthStack
 //   },
 //   {
 //     initialRouteName: "Loading"
 //   }
////  )
//)
