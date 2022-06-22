import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import accountsSlice from "./accounts-slice";
import transactionsSlice from "./transactions-slice";
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'

const store: any = configureStore({
    reducer: {
        auth: authSlice.reducer,
        accounts: accountsSlice.reducer,
        transactions: transactionsSlice.reducer
    },

});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
