import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {ButtonBase, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../store";
import {useEffect} from "react";
import {getTransactions} from "../../store/transactions-slice";
import {Transaction} from "../index";
import {useNavigate, useParams} from 'react-router-dom';
import styles from './TransactionList.module.css';

interface Transaction {
    date: string,
    account: number,
    amount: number,
    counterparty: string,
    id: number,
}

export default function TransactionList() {
    const {accountNumber} = useParams();
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const transactions = useAppSelector(state => state.transactions.transactions);

    useEffect(() => {
        dispatch(getTransactions(parseInt(accountNumber as string)));
    }, [dispatch])


    return (

        <Paper className={styles["transactions-container"]} sx={{width: '100%'}}>
            <Stack spacing={2}>

                {transactions.length > 0 ? transactions.map((transaction: Transaction) =>
                        <ButtonBase key={transaction.id} onClick={() => navigate(`/transaction/${transaction.id}`)}>
                            <Paper className={styles["transaction-card"]} elevation={0}><Transaction
                                date={transaction.date}
                                account={transaction.account}
                                amount={transaction.amount}
                                counterparty={transaction.counterparty}
                                id={transaction.id}/>
                            </Paper></ButtonBase>) :
                    <Typography className={styles["no-transactions"]} align="center">No Transactions</Typography>
                }

            </Stack>
        </Paper>


    );
}



