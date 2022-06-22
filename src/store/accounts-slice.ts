import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {api} from "../api";


export const getAccounts = createAsyncThunk(
    "getAccounts",
    async (userId: number) => {
        const response = await api.get(`accounts?userId=${userId}`);
        return response.data;
    }
)

export const updateAccountName = createAsyncThunk(
    "updateAccountName",
    async (data: any) => {
        console.log(data);
        const response = await api.post(`accountName?accountNumber=${data.number}&accountName=${data.newAccountName}`);
        console.log(response);
        return response.data;
    }
)

// @ts-ignore
// state.accounts (iom name:'accounts') och sen accounts array
const accountsSlice = createSlice({
    name: 'accounts',
    initialState: {
        isLoading: false,
        accounts: [],
    },
    extraReducers: (builder) => {
        builder.addCase(getAccounts.fulfilled, (state, action) => {
            state.accounts = action.payload;
            state.isLoading = false;

        });

        builder.addCase(updateAccountName.fulfilled, (state, action) => {
            state.accounts = action.payload;
            state.isLoading = false;
        });


        builder.addCase(getAccounts.pending, (state, action) => {
            state.isLoading = true
        });
    }
});

export const selectAllAccounts = (state: any) => state.accounts.accounts;
export const isLoading = (state: any) => state.isLoading;
export default accountsSlice;

