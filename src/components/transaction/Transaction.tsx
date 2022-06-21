import React from 'react';

function Transaction(props:any) {
    const transactionDate = props.transactionDate;
    const transactionAccount = props.transactionAccount;
    const transactionAmount = props.transactionAmount;
    const transactionCounterparty = props.transactionCounterparty;
    const transactionId = props.transactionId;
    return (
        <div>
            <div className={"transaction-date"}>{transactionDate}</div>
            <div className={"transaction-account"}>{transactionAccount}</div>
            <div className={"transaction-amount"}>{transactionAmount}</div>
            <div className={"transaction-counterparty"}>{transactionCounterparty}</div>
            <div className={"transaction-id"}>{transactionId}</div>
            <div>TEST</div>
        </div>
    );
}

export default Transaction;