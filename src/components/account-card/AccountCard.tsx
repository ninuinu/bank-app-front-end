import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {Button, Typography, Box, Card} from '@mui/material';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store";
import {useEffect, useState} from "react";
import {getAccount, getAccounts, updateAccountName} from "../../store/accounts-slice";

import {CircularProgress, TextField} from '@mui/material';
import styles from './AccountCard.module.css';

const bull = (
    <Box
        component="span"
        sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
    >
        •
    </Box>
);

export default function AccountCard() {
    const {accountNumber} = useParams();
    const account = useAppSelector(state => state.accounts.latestAccountCard)[0];

    // show/hide text field + submit button
    const [editableName, setEditableName] = useState(false);

    // text field input from user
    const [inputValue, setInputValue] = useState("");

    // flag to know once its time to fetch updated accounts
    const [newNameHasBeenSet, setNewNameHasBeenSet] = useState(false);

    // store new name
    const [newName, setNewName] = useState("");

    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(getAccount(Number(accountNumber)));
    }, [])

    // called when a user updates the name of an account
    const saveName = (e: any) => {
        setEditableName(false);
        const data = {accountNumber: accountNumber, newAccountName: inputValue};
        dispatch(updateAccountName(data));
        setEditableName(false);
        setNewNameHasBeenSet(true);

    };

    // stores the new account name inputed from the user
    const handleChange = (e: any) => {
        setInputValue(e.target.value);
    };

    // update accounts information in global store object
    useEffect(() => {
        dispatch(getAccounts(Number(accountNumber)));
        dispatch(getAccount(Number(accountNumber)));
        setNewNameHasBeenSet(false);
    }, [newNameHasBeenSet])


    return (
        <>

            {account ?

                <Card className={styles["card"]} sx={{minWidth: 275}}>
                    <CardContent>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                            {account.accountNumber}
                        </Typography>
                        {editableName ? <><TextField defaultValue={account.accountName} autoFocus={true}
                                                     onChange={handleChange}/> <Button onClick={saveName}
                                                                                       size="small">Save</Button></> :
                            <Typography variant="h5" component="div">{account.accountName}</Typography>}
                        <Typography sx={{mb: 1.5}} color="text.secondary">
                            {account.currency}
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br/>
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => setEditableName(!editableName)} size="small">Edit Name</Button>
                    </CardActions>
                </Card>
                : <CircularProgress/>
            }

        </>


    );
}
