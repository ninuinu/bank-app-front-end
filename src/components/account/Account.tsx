import React from 'react';


function Account(props: any) {
    const accountNumber = props.accountNumber;
    const accountName = props.accountName;
    const accountBalance = props.accountBalance;
    const accountUserId = props.accountUserId;
    const accountCurrency = props.accountCurrency;

    return (
        <div className={"account"}>
            <span className={"account-number"}>{accountNumber}</span>
            <span className={"account-name"}>{accountName}</span>
            <span className={"account-balance"}>{accountBalance}</span>
            <span className={"account-user-id"}>{accountUserId}</span>
            <span className={"account-currency"}>{accountCurrency}</span>
        </div>
    );
}

export default Account;


