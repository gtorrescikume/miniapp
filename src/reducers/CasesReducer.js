import {
    UPDATE_CASES, CASE_CREATE
} from '../actions/types';

const INITIAL_STATE={
    number:'',
    name:'',
    age: '',
    description:'',
    longitude:'',
    latitude:''
};

export default (state=INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case UPDATE_CASES:
            return {
                ...state, [action.payload.prop]: action.payload.value
            };
        case CASE_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
};