import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchAccounts, fetchAccount} from "../api";

export const getAccounts = createAsyncThunk(
    "getAccounts",
    async(userId: number) => {
        const response = await fetchAccounts(userId);
        return response.data;
    }
)

export const getAccount = createAsyncThunk(
    "getAccount",
    async(userId: number) => {
        const response = await fetchAccount(userId);
        return response.data;
    }
)

// @ts-ignore
// state.accounts (iom name:'accounts') och sen accounts array
const accountsSlice = createSlice({
    name: 'accounts',
    initialState:{
        isLoading: false,
        accounts: [],
        latestAccountCard: [],
    },
    reducers: {
        setLoadingState(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAccounts.fulfilled, (state, action) => {
            state.accounts = action.payload;
            state.isLoading = false;
        });

        builder.addCase(getAccount.fulfilled, (state, action) => {
            state.latestAccountCard = action.payload;
          // state.isLoading = false;
        });

        builder.addCase(getAccounts.pending, (state, action) => {
            state.isLoading = true
        });
    }
});

export const accountsActions = accountsSlice.actions;
export default accountsSlice;

