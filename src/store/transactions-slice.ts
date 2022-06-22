import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../api";

export const getTransactions = createAsyncThunk(
    "getTransactions",
    async (accountNumber: number) => {
        const response = await api.get(`transactions?accountNumber=${accountNumber}`);
        return response.data;
    }
)

// @ts-ignore
const transactionsSlice = createSlice({
        name: 'transactions',
        initialState: {
            transactions: [],
            isLoading: false,
        },
        extraReducers: (builder) => {
            builder.addCase(getTransactions.fulfilled, (state, action) => {
                state.transactions = action.payload;
                state.isLoading = false;
            });
            builder.addCase(getTransactions.pending, (state, action) => {
                state.isLoading = true;
            });
        }
    }
);

export const selectAllTransactions = (state: any) => state.transactions.transactions;
export const isLoading = (state: any) => state.isLoading;
export default transactionsSlice;