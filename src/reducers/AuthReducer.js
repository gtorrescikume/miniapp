import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, SIGNUP_USER } from '../actions/types';

const INITIAL_STATE = {
    email:'',
    password:'',
    user:null,
    error:'',
}

export default (state=INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload};
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, error:'',  };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Please try again!', email: '' ,password: ''};
        case SIGNUP_USER:
                return {...state, user: action.payload}
        default:
            return state;
    }
}