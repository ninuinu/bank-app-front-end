import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {createTheme, styled} from '@mui/material/styles';
//import {useNavigate} from "react-router-dom";
import {Account} from "../index";
import {Button, ButtonBase} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../store";
import {useEffect} from "react";
import {getAccounts} from "../../store/accounts-slice";
import {useNavigate} from "react-router-dom";
import styles from "./AccountList.module.css";
import {ThemeProvider} from "@mui/material/styles";
import shadows from "@mui/material/styles/shadows";


interface Account {
    accountNumber: number;
    accountName: string;
    balance: number;
    userId: number;
    currency: string;
}


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

// detta blir nya accountList
export default function AccountList() {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const accounts = useAppSelector(state => state.accounts.accounts);
    // const userId = useAppSelector(state => state.accounts.userId);


    useEffect(() => {
        dispatch(getAccounts(2451));
    }, [dispatch])


    // fetch accounts state
    //  const accounts2 = useAppSelector(state => state.accounts.accounts);
    //console.log(accounts2.filter(account => account.accountNumber === 7777));

    console.log("i AccountlistMUI");
    console.log(accounts);

    return (
        <Box sx={{width: '100%', boxShadow:1, borderRadius:'5px'}}>
            <Stack spacing={2}>
                {accounts.map((account: Account) => <ButtonBase className={styles["MuiButtonBase-root"]}
                                                                onClick={() => {
                                                                    navigate(`/transactions/${account.accountNumber}`)
                                                                }}><Item
                    className={styles["account-paper-row"]}><Account key={account.accountNumber}
                                                                     number={account.accountNumber}
                                                                     name={account.accountName}
                                                                     balance={account.balance}
                                                                     userId={account.userId}
                                                                     currency={account.currency}/>
                </Item></ButtonBase>)}

            </Stack>
        </Box>
    );
}



