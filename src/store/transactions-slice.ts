import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchTransactions, fetchTransaction} from "../api";

export const getTransactions = createAsyncThunk(
    "getTransactions",
    async (accountNumber: number) => {
        const response = await fetchTransactions(accountNumber);
        return response.data;
    }
)

export const getTransaction = createAsyncThunk(
    "getTransaction",
    async (transactionId: number) => {
        const response = await fetchTransaction(transactionId);
        return response.data;
    }
)

// @ts-ignore
const transactionsSlice = createSlice({
        name: 'transactions',
        initialState: {
            transactions: [],
            latestTransactionCard: []
        },
        extraReducers: (builder) => {
            builder.addCase(getTransactions.fulfilled, (state, action) => {
                state.transactions = action.payload;
            });

            builder.addCase(getTransaction.fulfilled, (state, action) => {
                state.latestTransactionCard = action.payload;
                // state.isLoading = false;
            });
        }
    }
);

export const transactionsActions = transactionsSlice.actions;
export default transactionsSlice;