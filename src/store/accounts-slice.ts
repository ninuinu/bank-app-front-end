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
        })
    }
});

export const accountsActions = accountsSlice.actions;
export default accountsSlice;


// is home page
// is accounts view (userId as payload)
// is single acounts view (account number as payload)
