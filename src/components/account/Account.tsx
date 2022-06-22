import React from 'react';
import {Typography} from "@mui/material";
import styles from "./Account.module.css";

export interface BankAccount {
    number: number,
    name: string,
    balance: number,
    userId: number,
    currency: string,
}

function Account(props: any) {
    const number = props.number;
    const name = props.name;
    const balance = props.balance;
    const userId = props.userId;
    const currency = props.currency;


    return (
        <div className={styles["account"]}>
            <Typography className={styles["number"]}>{number}</Typography>
            <Typography className={styles["name"]}>{name}</Typography>
            <Typography className={styles["user-id"]}>{userId}</Typography>
            <Typography className={styles["balance"]}>{balance}</Typography>
            <Typography className={styles["currency"]}>{currency}</Typography>
        </div>
    );
}

export default Account;


