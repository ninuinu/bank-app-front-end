import React from 'react';


function Account(props: any) {
    const accountNumber = props.accountNumber;
    const accountName = props.accountName;
    const accountBalance = props.accountBalance;
    const accountUserId = props.accountUserId;
    const accountCurrency = props.accountCurrency;

    return (
        <div className={"account"}>
            <div className={"account-number"}>{accountNumber}</div>
            <div className={"account-name"}>{accountName}</div>
            <div className={"account-balance"}>{accountBalance}</div>
            <div className={"account-user-id"}>{accountUserId}</div>
            <div className={"account-currency"}>{accountCurrency}</div>
            <div>TEST</div>
        </div>
    );
}

export default Account;


