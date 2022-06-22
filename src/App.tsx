import React from 'react';
import {ResponsiveAppBar, AccountList, TransactionList, AccountCard, TransactionCard} from './components/index';
import {Button, CssBaseline, Container} from "@mui/material";
import {authActions} from "./store/auth-slice";
import {getAccounts} from "./store/accounts-slice";
import styles from './App.module.css';
import {useAppDispatch, useAppSelector} from "./store";
import {Route, Routes} from "react-router-dom";

function App() {

    const dispatch = useAppDispatch();


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
            </Container>
        </>
    );
}

export default App;