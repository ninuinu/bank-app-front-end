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

interface Account {
    accountNumber: number;
    accountName: string;
    balance: number;
    userId: number;
    currency: string;
}


// ska hätmas från backend sen
const accounts = [1337, 2022, 1231];


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

// detta blir nya accountList
export default function AccountListMui() {
    // const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const accounts2 = useAppSelector(state => state.accounts.accounts);
    // const userId = useAppSelector(state => state.accounts.userId);

    // körs första gången man renderar en komponent

    // "om action list skapas, gör .... "
    useEffect(() => {
        dispatch(getAccounts(2451));
    }, [dispatch])


    // fetch accounts state
    //  const accounts2 = useAppSelector(state => state.accounts.accounts);
    //console.log(accounts2.filter(account => account.accountNumber === 7777));

    return (
        <Box sx={{width: '100%'}}>
            <Stack spacing={2}>

                {accounts2.map((account: Account) => <Item><Account key={account.accountNumber}
                                                                    accountNumber={account.accountNumber}
                                                                    accountName={account.accountName}
                                                                    balance={account.balance}
                                                                    accountUserId={account.userId}
                                                                    currency={account.currency}/> </Item>)}

            </Stack>
        </Box>
    );
}



