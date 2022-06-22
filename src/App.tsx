import React from 'react';
import {ResponsiveAppBar, AccountList, TransactionList, AccountCard, TransactionCard} from './components/index';
import {Button, CssBaseline, Container} from "@mui/material";
import {authActions} from "./store/auth-slice";
import {accountsActions, getAccounts} from "./store/accounts-slice";
import styles from './App.module.css';
import {useAppDispatch, useAppSelector} from "./store";
import {Route, Routes} from "react-router-dom";

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


    // connected to button
    const toggleLoggedInState = (e: any) => {
        e.preventDefault();
        dispatch(authActions.toggleView());
        dispatch(authActions.logout());
    }

    return (
        <>
            <CssBaseline/>
            <ResponsiveAppBar/>
            <Container className={styles["wrapper"]} maxWidth="sm">

                <Routes>
                    <Route path={"/"}
                           element={<AccountList/>}/>

                    <Route path={"/accounts"}
                           element={<AccountList/>}/>


                    <Route path={"/transactions/:accountNumber"}
                           element={
                               <>
                                   <AccountCard/>
                                   <TransactionList/>

                               </>}/>
                    <Route path={"/transaction/:id"}
                           element={
                            <>
                               <TransactionCard/>
                            </>
                           }/>
                </Routes>

                <Button onClick={toggleLoggedInState}>TOGGLE</Button>
                <Button onClick={() => dispatch(getAccounts(2451))}>Get accounts</Button>

            </Container>
        </>

    );
}

export default App;


// fixa routes
// rendera accountslists
// den hämtar sen accounts iom redux
