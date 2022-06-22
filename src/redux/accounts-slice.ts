import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface initialState {
    accounts: number[];
    transactions: [];
}

export const stateSlice = createSlice({
    name: 'accounts',
    initialState: {
        accounts: [],
        transactions: [],
    },
    reducers: {
        updateAccounts: (state, action: PayloadAction) => {
            // @ts-ignore
            state.accounts = [...state.accounts, action.payload];
        }
    }
})

// Action creators are generated for each case reducer function
export const {updateAccounts} = stateSlice.actions

export default stateSlice.reducer