import React from 'react';
import {NavBar, AccountList, ResponsiveAppBar} from './components/index';
import {useDispatch, useSelector} from "react-redux";
import {Button, CssBaseline} from "@mui/material";
import {authActions} from "./store/auth-slice";

/**
 const test = async () =>  {
    const dispatch = useDispatch();
    const state = useSelector(state => state.accounts.value)
    const accounts = await getAccounts(2451);
    dispatch(update(accounts));
} **/

/**
 const test = async () =>{
    const accounts = await getAccounts(2451);
    console.log(accounts);
}
 test();**/



function App() {
    // @ts-ignore
    const dispatch = useDispatch();

    // @ts-ignore
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const toggleLoggedInState = (e: any) => {
        e.preventDefault();
        dispatch(authActions.toggleView());
    }

    return (
        <div>
            <CssBaseline/>
            <ResponsiveAppBar/>
            {isLoggedIn && <AccountList/>}
            <Button onClick={toggleLoggedInState}>TOGGLE</Button>
        </div>
    );
}

export default App;
