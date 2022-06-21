import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchTransactions} from "../api";

export const getTransactions = createAsyncThunk(
    "getTransactions",
    async(accountNumber:number)=>{
        const response = await fetchTransactions(accountNumber);
        console.log("I TRANSACTIONS SLICE");
        console.log(response.data);
        return response.data;
    }
)

// @ts-ignore
const transactionsSlice = createSlice({
    name: 'transactions',
    initialState:{
        transactions: []
    },
    extraReducers:(builder)=>{
        builder.addCase(getTransactions.fulfilled,(state,action)=>{
            state.transactions = action.payload;
        })
    }
    }
);

export const transactionsActions = transactionsSlice.actions;
export default transactionsSlice;