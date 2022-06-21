import React from 'react';


function Account(props: any) {
    const accountNumber = props.number;
    const accountName = props.name;
    const accountBalance = props.balance;
    const accountUserId = props.userId;
    const accountCurrency = props.currency;

    console.log("i Account");
    console.log(accountNumber);

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


