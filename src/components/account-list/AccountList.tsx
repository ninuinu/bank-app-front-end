import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
import {Account} from "../index";
import {ButtonBase, CircularProgress} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../store";
import {useEffect} from "react";
import {getAccounts, isLoading, selectAllAccounts} from "../../store/accounts-slice";
import {useNavigate} from "react-router-dom";
import styles from "./AccountList.module.css";
import './AccountList.css';
import {BankAccount} from "../account/Account";


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function AccountList() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const accounts = useAppSelector(selectAllAccounts);
    const loading: boolean = useAppSelector(isLoading);

    useEffect(() => {
        dispatch(getAccounts(2451));
    }, [dispatch])

    return (
        <>
        {
            loading ?
           <CircularProgress/>
                :
        <Box sx={{width: '100%', boxShadow: 1, borderRadius: '5px'}}>
            <Stack spacing={2}>
                {accounts.map((account: BankAccount) =>
                    <ButtonBase key={account.number}
                                className={styles["MuiButtonBase-root"]}
                                onClick={() => {
                                    navigate(`/transactions/${account.number}`)
                                }}>
                        <Item
                        className={styles["account-paper-row"]}>
                        <Account
                        number={account.number}
                        name={account.name}
                        balance={account.balance}
                        userId={account.userId}
                        currency={account.currency}/>
                        </Item>
                    </ButtonBase>)
                }
            </Stack>
        </Box>
        }
        </>
    );
}



