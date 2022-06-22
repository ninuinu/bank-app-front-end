import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {Button, Typography , Card} from '@mui/material';
import {useParams, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store";
import {useEffect, useState} from "react";
import {selectAllAccounts, updateAccountName} from "../../store/accounts-slice";

import {CircularProgress, TextField} from '@mui/material';
import styles from './AccountCard.module.css';
import {BankAccount} from "../account/Account";


export default function AccountCard() {
    const {accountNumber }= useParams();
    const account = useAppSelector(selectAllAccounts)
        .filter((account: BankAccount) => account.number === parseInt(accountNumber as string))[0];

    const [editableName, setEditableName] = useState(false);
    const [newName, setNewName] = useState("");
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // called when a user updates the name of an account
    const saveName = () => {
        const data = {number: accountNumber, newAccountName: newName};
        dispatch(updateAccountName(data));
        setEditableName(false);
    };

    // stores the new account name inputed from the user
    const handleChange = (e: any) => {
        setNewName(e.target.value);
    };

    // update accounts information in global store object
    useEffect(() => {

    }, [accountNumber, dispatch])


    return (
        <>
            {account ?
                <Card className={styles["card"]} sx={{minWidth: 275}}>
                    <CardContent>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                            {account.number}
                        </Typography>
                        {editableName ? <><TextField defaultValue={account.name} autoFocus={true}
                                                     onChange={handleChange}/> <Button onClick={saveName}
                                                                                       size="small">Save</Button></> :
                            <Typography variant="h5" component="div">{account.name}</Typography>}
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
                    <Button onClick={() => navigate("/accounts")}>Back to accounts</Button>
                </Card>
                : <CircularProgress/>
            }
        </>
    );
}
