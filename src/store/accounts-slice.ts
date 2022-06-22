import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchAccounts, fetchAccount, api, updateAccount} from "../api";
//import {fetchAccounts, fetchAccount, api} from "../api";


export const getAccounts = createAsyncThunk(
    "getAccounts",
    async(userId: number) => {
        const response = await api.get(`accounts?userId=${userId}`);
        return response.data;
    }
)

export const getAccount = createAsyncThunk(
    "getAccount",
    async(userId: number) => {
        const response = await fetchAccount(userId)

        return response.data;
    }
)

export const updateAccountName = createAsyncThunk(
    "updateAccountName",
    async(data:any) => {
        const accountNumber = data.accountNumber;
        const newAccountName = data.newAccountName;
        console.log("I THUNK");
        console.log(newAccountName);
        const response = await updateAccount(accountNumber, newAccountName);
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

        builder.addCase(updateAccountName.fulfilled, (state, action) => {
            console.log(action.payload);
            state.accounts = action.payload;
            // state.isLoading = false;
        });


        /*
        builder.addCase(updateAccountName.fulfilled, (state, action) => {


            let myClonedArray = state.accounts.slice();

            myClonedArray.map((account) => {
                // @ts-ignore
                console.log("I MAPPEN:");
                // @ts-ignore
                console.log(account.accountNumber);
                // @ts-ignore
                if(account.accountNumber === action.payload.accountNumber) {
                    console.log("MAAAAAAAAAATCH");
                    // @ts-ignore
                    account.accountName = action.payload.accountName;
                }});
            state.accounts = myClonedArray;

            console.log("LOCAL ACCOUNTS COPY");
            console.log(myClonedArray);
        }); */

        builder.addCase(getAccounts.pending, (state, action) => {
            state.isLoading = true
        });
    }
});

export const accountsActions = accountsSlice.actions;
export default accountsSlice;

