import React from 'react';
import {Typography} from "@mui/material";
import styles from "./Account.module.css";

function Account(props: any) {
    const accountNumber = props.number;
    const accountName = props.name;
    const accountBalance = props.balance;
    const accountUserId = props.userId;
    const accountCurrency = props.currency;


    return (
        <div className={styles["account"]}>
            <Typography className={styles["number"]}>{accountNumber}</Typography>
            <Typography className={styles["name"]}>{accountName}</Typography>
            <Typography className={styles["user-id"]}>{accountUserId}</Typography>
            <Typography className={styles["balance"]}>{accountBalance}</Typography>

            <Typography className={styles["currency"]}>{accountCurrency}</Typography>
        </div>
    );
}

export default Account;


