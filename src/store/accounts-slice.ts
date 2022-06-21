import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchAccounts} from "../api";

export const getAccounts = createAsyncThunk(
    "getAccounts",
    async(userId: number) => {
        const response = await fetchAccounts(userId);
        return response.data;
    }
)

// @ts-ignore
// state.accounts (iom name:'accounts') och sen accounts array
const accountsSlice = createSlice({
    name: 'accounts',
    initialState:{
        isLoading: false,
        accounts: []
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
        builder.addCase(getAccounts.pending, (state, action) => {
            state.isLoading = true
        });
    }
});

export const accountsActions = accountsSlice.actions;
export default accountsSlice;

