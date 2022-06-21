import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
//import {useNavigate} from "react-router-dom";
import {Account} from "../index";
import {ButtonBase, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../store";
import {useEffect} from "react";
import {getAccounts} from "../../store/accounts-slice";
import {getTransactions} from "../../store/transactions-slice";
import {Transaction} from "../index";
import {useParams} from 'react-router-dom';
import styles from './TransactionList.module.css';

interface Transaction {
    date: string,
    account: number,
    amount: number,
    counterparty: string,
    id: number,
}




// detta blir nya accountList
export default function TransactionList() {
    const {accountNumber} = useParams();

    const dispatch = useAppDispatch();

    const transactions = useAppSelector(state => state.transactions.transactions);

    useEffect(() => {
        dispatch(getTransactions(parseInt(accountNumber as string)));
    }, [dispatch])



    // fetch accounts state
    //  const accounts2 = useAppSelector(state => state.accounts.accounts);
    //console.log(accounts2.filter(account => account.accountNumber === 7777));

    console.log(" TRANSACTION LIST ");
    console.log(transactions);
    return (

        <Paper className={styles["transactions-container"]} sx={{width: '100%'}}>
            <Stack spacing={2}>

                { transactions.length > 0 ? transactions.map((transaction: Transaction) => <Paper className={styles["transaction-card"]} elevation={0}><Transaction key={transaction.id}
                                                                                   date={transaction.date}
                                                                                   account={transaction.account}
                                                                                   amount={transaction.amount}
                                                                                   counterparty={transaction.counterparty}
                                                                                   id={transaction.id}/>
                </Paper>) : <Typography className={styles["no-transactions"]} align="center">No Transactions</Typography>
                }

            </Stack>
        </Paper>


    );
}



