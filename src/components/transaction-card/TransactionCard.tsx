import * as React from 'react';
import {Card, Button, CardContent, Typography, CircularProgress} from '@mui/material';
import {useParams, useNavigate} from "react-router-dom";
import {useAppSelector} from "../../store";
import {useEffect} from "react";
import styles from './TransactionCard.module.css';
import {selectAllTransactions} from "../../store/transactions-slice";
import {BankTransaction} from "../transaction/Transaction";


export default function TransactionCard() {
    const {id} = useParams();
    const navigate = useNavigate();

    const transaction = useAppSelector(selectAllTransactions)
        .filter((transaction: BankTransaction) => transaction.id === parseInt(id as string))[0];

    useEffect(() => {
    }, [id])

    return (
        <>
            {transaction ?
                <Card className={styles["card"]} sx={{minWidth: 275}}>
                    <CardContent>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                            Transaction ID: {transaction.id}
                        </Typography>
                        <div className={styles["wrapper"]}>
                            <Typography variant="h5" component="div">
                                {transaction.counterparty}
                            </Typography>
                            <Typography className={styles["currency"]} variant="h5">
                                {transaction.currency}
                            </Typography>
                            <Typography className={styles["amount"]} variant="h5" component="div">
                                {transaction.amount}
                            </Typography></div>
                        <Typography sx={{mb: 1.5}} color="text.secondary">
                            IBAN: {transaction.iban}
                        </Typography>
                        <Typography variant="body2">
                            {transaction.type}
                        </Typography>
                    </CardContent>
                    <Button onClick={() => navigate(`/transactions/${transaction.account}`)}>Back to transactions</Button>
                </Card>
                : <CircularProgress/>
            }
        </>
    );
}
