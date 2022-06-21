import React from 'react';

function Transaction(props:any) {
    const transactionDate = props.date;
    const transactionAccount = props.account;
    const transactionAmount = props.amount;
    const transactionCounterparty = props.counterparty;
    const transactionId = props.transactionId;


    return (
        <div>
            <span className={"transaction-date"}>{transactionDate}</span>
            <span className={"transaction-account"}>{transactionAccount}</span>
            <span className={"transaction-amount"}>{transactionAmount}</span>
            <span className={"transaction-counterparty"}>{transactionCounterparty}</span>
            <span className={"transaction-id"}>{transactionId}</span>
        </div>
    );
}

export default Transaction;