import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
//import {useNavigate} from "react-router-dom";
import {Account} from "../index";
import {ButtonBase} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../store";
import {useEffect} from "react";
import {getAccounts} from "../../store/accounts-slice";
import {getTransactions} from "../../store/transactions-slice";
import {Transaction} from "../index";

interface Transaction {
    date: string,
    account: number,
    amount: number,
    counterparty: string,
    id: number,
}

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


// detta blir nya accountList
export default function TransactionListMui() {
    // const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const transactions = useAppSelector(state => state.transactions.transactions);

    useEffect(() => {
        dispatch(getTransactions(1337));
    }, [dispatch])

    console.log("i TransactionsListMui");
    console.log(transactions);

    // fetch accounts state
    //  const accounts2 = useAppSelector(state => state.accounts.accounts);
    //console.log(accounts2.filter(account => account.accountNumber === 7777));

    return (
        <Box sx={{width: '100%'}}>
            <Stack spacing={2}>

                {transactions.map((transaction: Transaction) => <Item><Transaction key={transaction.id}
                                                                                   date={transaction.date}
                                                                                   account={transaction.account}
                                                                                   amount={transaction.amount}
                                                                                   counterpary={transaction.counterparty}
                                                                                   id={transaction.id}/>
                </Item>)}

            </Stack>
        </Box>
    );
}



