import {UPDATE_CASES, CASE_CREATE, CASES_FETCH_SUCCESS }from './types';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const updateCases = ({prop, value}) => {
    return {
        type: UPDATE_CASES,
        payload:{prop, value}
    }
};

export const addPerson= ({number, name, age,description,longitude,latitude}) => {
    const {currentUser}=firebase.auth(); //reference to user in data store

    return (dispatch) => {

    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({number, name, age,description,longitude,latitude}) //this information showed up in firebase database
        .then (()=>{
            dispatch({type: CASE_CREATE})
         Actions.pop()}
        )      
}
    }

export const casesFetch = () => {
    const {currentUser} = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapshot => {
            dispatch({type: CASES_FETCH_SUCCESS, payload:snapshot.val()})
        })
    }
}