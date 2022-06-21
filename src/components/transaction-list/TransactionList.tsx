import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../store";
import {getAccounts} from "../../store/accounts-slice";
import {getTransactions} from "../../store/transactions-slice";

function TransactionList(props:any) {

    const dispatch = useAppDispatch();

    const transactions = useAppSelector(state => state.transactions.transactions);

    useEffect(() => {
        dispatch(getTransactions(1337));
    }, [dispatch])

    return (
        <div>{transactions.amount}</div>
    );
}

export default TransactionList;