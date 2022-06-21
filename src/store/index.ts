import {legacy_createStore as createStore} from 'redux';
import {MyActions} from "./action.interface";
import {MyState} from "./state.interface";


const reducerFn = (state={counter:10}, action:any) => {
    // needs to be a synchronous function
    // we should not mutate the original state
    // always a copy of the original state, otherwise everything will crash

    if(action.type==='INC'){
        return {counter: state.counter+1};
    }
    if(action.type==='DEC'){
        return {counter: state.counter-1};
    }
    if(action.type==='ADD'){
        return {counter: state.counter+action.payload};
    }

    return state;
}

const store = createStore(reducerFn);

export default store;