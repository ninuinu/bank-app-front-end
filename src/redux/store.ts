import {configureStore} from '@reduxjs/toolkit'
import accountsReducer from "./accounts-slice";

export default configureStore({
    reducer: {
        accounts: accountsReducer
    }
})