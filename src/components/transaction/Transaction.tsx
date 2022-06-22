import React from 'react';
import styles from './Transaction.module.css';
import {Typography} from "@mui/material";

export interface BankTransaction {
    date: string,
    account: number,
    amount: number,
    counterparty: string,
    id: number,
}

function Transaction(props: any) {
    const date = props.date;
    const account = props.account;
    const amount = props.amount;
    const counterparty = props.counterparty;
    const id = props.id;

    return (
        <div className={styles["transaction"]}>
            <Typography className={styles["date"]}>{date}</Typography>
            <Typography className={styles["account"]}>{account}</Typography>
            <Typography className={styles["amount"]}>{amount}</Typography>
            <Typography className={styles["counterparty"]}>{counterparty}</Typography>
            <Typography className={styles["id"]}>{id}</Typography>
        </div>
    );
}

export default Transaction;