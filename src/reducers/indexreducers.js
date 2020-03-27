import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import CasesReducer from './CasesReducer'
import CasesListReducer from './CasesListReducer';

export default combineReducers ({
    auth: AuthReducer,
    cases: CasesReducer,
    person: CasesListReducer
});