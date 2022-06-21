import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store";
import {useEffect} from "react";
import {getAccount} from "../../store/accounts-slice";

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

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const account = useAppSelector(state => state.accounts.latestAccountCard)[0];

    useEffect(() => {
        dispatch(getAccount(Number(accountNumber)));
    }, [dispatch])

    console.log("accountnumber i accountcard");
    console.log(account.accountName);

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {account.accountNumber}
                </Typography>
                <Typography variant="h5" component="div">
                    {account.accountName}
                </Typography>
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
                <Button size="small">Edit Name</Button>
            </CardActions>
        </Card>
    );
}
