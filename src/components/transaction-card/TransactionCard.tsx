import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store";
import {useEffect} from "react";
import {getAccount} from "../../store/accounts-slice";
import {CircularProgress} from '@mui/material';
import styles from './TransactionCard.module.css';
import {getTransaction} from "../../store/transactions-slice";

const bull = (
    <Box
        component="span"
        sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
    >
        •
    </Box>
);

export default function TransactionCard() {
    const {id} = useParams();

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const transaction = useAppSelector(state => state.transactions.latestTransactionCard)[0];
    const account = useAppSelector(state => state.accounts.latestAccountCard)[0];


    useEffect(() => {
        dispatch(getTransaction(Number(id)));


    }, [dispatch])

    useEffect(() => {
        if (transaction) dispatch(getAccount(Number(transaction.account)));

    }, [transaction])


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
                            <Typography className={styles["currency"]} variant="h5">{account.currency} </Typography>
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
                </Card>
                : <CircularProgress/>
            }

        </>


    );
}
