import React from 'react';
import {Account} from "../index";
import {fetchAccounts} from "../../api";
import {useAppSelector} from "../../store";

interface Account {
    accountNumber: number;
    accountName: string;
    balance: number;
    userId: number;
    currency: string;
}

function AccountList(props: any) {

    const accounts = useAppSelector(state => state.accounts.accounts);

    const getAccountsApi = async () => {
        //const accounts = await getAccounts(5462);
        return fetchAccounts(2451);
    };

    getAccountsApi().then(r => {
        //      r.data.map((account:any) => console.log(account.accountNumber))
        //     console.log("HELLO");
    });

    return (
        <div>
            {
                accounts.map((account: Account) => <Account key={account.accountNumber}
                                                 accountNumber={account.accountNumber}
                                                 accountName={account.accountName} balance={account.balance}
                                                 accountUserId={account.userId} currency={account.currency}/>
                )}
        </div>
    )

}

export default AccountList;