import React from 'react';
import styles from './Transaction.module.css';

function Transaction(props: any) {
    const transactionDate = props.date;
    const transactionAccount = props.account;
    const transactionAmount = props.amount;
    const transactionCounterparty = props.counterparty;
    const transactionId = props.id;

    return (
        <div className={styles["transaction-row"]}>
            <div className={"transaction-date"}>{transactionDate}</div>
            <div className={"transaction-account"}>{transactionAccount}</div>
            <div className={"transaction-amount"}>{transactionAmount}</div>
            <div className={"transaction-counterparty"}>{transactionCounterparty}</div>
            <div className={"transaction-id"}>{transactionId}</div>
        </div>
    );
}

export default Transaction;