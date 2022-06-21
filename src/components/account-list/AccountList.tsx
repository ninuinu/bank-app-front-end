import React, {useEffect} from 'react';
import {Account} from "../index";
import {fetchAccounts} from "../../api";
import {useAppDispatch, useAppSelector} from "../../store";
import {getAccounts} from "../../store/accounts-slice";

interface Account {
    accountNumber: number;
    accountName: string;
    balance: number;
    userId: number;
    currency: string;
}

function AccountList(props: any) {

    const dispatch = useAppDispatch();

    const accounts = useAppSelector(state => state.accounts.accounts);
    // const userId = useAppSelector(state => state.accounts.userId);

    // körs första gången man renderar en komponent

    // "om action list skapas, gör .... "
    useEffect(() => {
        dispatch(getAccounts(2451));
    }, [dispatch])


    // varje gång accounts ändras, så gör det som är innanför
    useEffect(() => {
        console.log("accounts uppdaterades!")
    }, [accounts])

    console.log("i Accountlist");
    console.log(accounts);
    return (

        accounts.map((account: Account) => <Account key={account.accountNumber}
                                                    number={account.accountNumber}
                                                    name={account.accountName}
                                                    balance={account.balance}
                                                    userId={account.userId}
                                                    currency={account.currency}/>
        )
    )

}

export default AccountList;