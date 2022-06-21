import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import accountsSlice from "./accounts-slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const store: any = configureStore({
    reducer: {
        auth: authSlice.reducer,
        accounts: accountsSlice.reducer,
    },

});

export type RootState = ReturnType<typeof store.getState>;

// @ts-ignore
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
