import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store";
import {useCallback, useEffect, useState} from "react";
//import {getAccount, updateAccountName} from "../../store/accounts-slice";
import {getAccount, getAccounts, updateAccountName} from "../../store/accounts-slice";

import {CircularProgress, TextField} from '@mui/material';
import styles from './AccountCard.module.css';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function AccountCard() {
    const {accountNumber} = useParams();
    const account = useAppSelector(state => state.accounts.latestAccountCard)[0];
 //   const accounts = useAppSelector(state => state.accounts.accounts);

//    const [newName, setNewName] = useState("");

    // show/hide text field + submit button
    const [editableName, setEditableName] = useState(false);

    // text field input from user
    const [inputValue, setInputValue] = useState("");

    // flag to know once its time to fetch updated accounts
    const [newNameHasBeenSet, setNewNameHasBeenSet] = useState(false);

    // store new name
    const [newName, setNewName] = useState("");


//    const navigate = useNavigate();
    const dispatch = useAppDispatch();



    useEffect(() => {
        dispatch(getAccount(Number(accountNumber)));
    }, [])

    // onclick submit function
    const saveName =(e:any)=>{
        setEditableName(false);
        const data = {accountNumber: accountNumber, newAccountName: inputValue};
        dispatch(updateAccountName(data));
        setEditableName(false);
        setNewNameHasBeenSet(true);

    }; // on change, save to saveName


    // store input from user
    const handleChange = (e:any) =>{
        setInputValue(e.target.value);
        console.log(inputValue);
    };

/*
    useEffect(()=>{

        const data = {accountNumber: accountNumber, newAccountName: newName};

        dispatch(updateAccountName(data));
        setEditableName(false);
        setNewNameHasBeenSet(true);
        console.log(account);
    },[newName]);
*/
    useEffect(() => {
        dispatch(getAccounts(Number(accountNumber)));
        dispatch(getAccount(Number(accountNumber)));
        setNewNameHasBeenSet(false);
    }, [newNameHasBeenSet])

    /*
    const handleClick = () =>{
        console.log(newName);
        // @ts-ignore
        dispatch(updateAccountName(Number(account.accountNumber),newName));
    }*/





    return (
        <>

            {account ?

        <Card className={styles["card"]} sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {account.accountNumber}
                </Typography>
                    {editableName?<><TextField defaultValue={account.accountName} autoFocus={true} onChange={handleChange}/> <Button onClick={saveName} size="small">Save</Button></>:
                        <Typography variant="h5" component="div">{account.accountName}</Typography>}
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {account.currency}
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={()=>setEditableName(!editableName)} size="small">Edit Name</Button>
            </CardActions>
        </Card>
                : <CircularProgress/>
            }

        </>


    );
}
