import React from 'react';
import {Account} from "../index";
import {getAccounts} from "../../api";

function AccountList(props: any) {

    const getAccountsApi = async () => {
        //const accounts = await getAccounts(5462);
        const accounts = await getAccounts(2451);
        return accounts;
    }

    getAccountsApi().then(r => {
        r.data.map((account:any) => console.log(account.accountNumber))
        console.log("HELLO");
    }
    );

    return (
        <div>
            <Account/>
        </div>
    );
}

export default AccountList;