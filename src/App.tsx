import React, {useEffect} from 'react';
import {NavBar, AccountList} from './components/index';
import Account from "./components/account/Account";
import {getAccounts} from "./api";
//import {update} from "./redux/accounts-slice";
//import {useDispatch, useSelector} from "react-redux";
import {useSelector, useDispatch} from 'react-redux';
import {MyState} from "./store/state.interface";
import {Dispatch} from "redux";
import {actions} from './store/index';

/**
const test = async () =>  {
    const dispatch = useDispatch();
    const state = useSelector(state => state.accounts.value)
    const accounts = await getAccounts(2451);
    dispatch(update(accounts));
} **/



function App() {
    // @ts-ignore
    const counter = useSelector((state)=>state.counter);
    const dispatch:Dispatch = useDispatch();
    const increment = () => {
        dispatch(actions.increment());
    }
    const decrement = () => {
        dispatch(actions.decrement());
    }
    const addBy = () => {
        dispatch(actions.addBy(10));
    }
/**
    useEffect(() => {
        test();
    }, [])
**/


  return (
    <div>
        <NavBar />
        <h1>Counter App</h1>
        <h2>{counter}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={addBy}>Add by 10</button>
        <AccountList/>
    </div>
  );
}

export default App;
