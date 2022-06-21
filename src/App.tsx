import React from 'react';
import {NavBar, AccountList, ResponsiveAppBar, AccountListMui, TransactionList} from './components/index';
import {Button, CssBaseline, Container} from "@mui/material";
import {authActions} from "./store/auth-slice";
import {accountsActions, getAccounts} from "./store/accounts-slice";
//import styles from './App.module.css';
import {useAppDispatch, useAppSelector} from "./store";

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

    const dispatch = useAppDispatch();

    // get state variable isLoggedIn (used as condition in components down below)
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
    const isLoading = useAppSelector(state => state.accounts.isLoading);
    const accounts = useAppSelector(state => state.accounts.accounts);
    const transactions = useAppSelector(state => state.transactions.transactions);

    console.log("trans");
    console.log(transactions);

    // connected to button
    const toggleLoggedInState = (e: any) => {
        e.preventDefault();
        dispatch(authActions.toggleView());
        dispatch(authActions.logout());
    }

    return (
        <div>
            <CssBaseline/>
            <ResponsiveAppBar/>
            <div className="tt">
            <Container maxWidth="sm">
                {/** isLoggedIn && <AccountList /> */}

                <AccountListMui/>
                <Button onClick={toggleLoggedInState}>TOGGLE</Button>
                <Button onClick={() => dispatch(getAccounts(2451))}>Get accounts</Button>
                {accounts && accounts.map( (account: any) => <div key={account.accountNumber}> {account.accountName} </div>)}
            </Container>
                <TransactionList/>
            </div>

        </div>
    );
}

export default App;


// fixa routes
// rendera accountslists
// den hämtar sen accounts iom redux
