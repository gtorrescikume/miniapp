import React from 'react';
import {StyleSheet} from 'react-native'
import {Scene, Router, Stack, Actions} from 'react-native-router-flux';
import LoginScreen from '../screens/LoginScreen'
import List from './components/List';
import AddPerson from './components/AddPerson';
import RegisterScreen from '../screens/RegisterScreen';

const RouterComponent = () => {
    return (
        <Router>
            <Stack //parent scene, router flux needs a parent // 
            key='root' hideNavBar>
                <Stack key='auth'>
                    <Scene   key='login' component={LoginScreen} title = "" initial/>
                    <Scene key='signup' component={RegisterScreen} title="Create Account"/>
                </Stack>
           
               <Stack  key="main" tabs tabBarPosition={'bottom'}
               >
                <Scene 
                   
                    key='list' 
                    component={List} 
                    title="Current Cases" 
                    initial
                    />
                <Scene 
                    key="addPerson" 
                    component= {AddPerson} 
                    title="Add New Case"/>
               </Stack>

            </Stack>
        </Router>
    )
}



export default RouterComponent;