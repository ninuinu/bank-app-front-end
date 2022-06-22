import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {isLoggedIn: true},
    reducers: {
        toggleView(state) {
            if (state.isLoggedIn) {
                state.isLoggedIn = false
            } else if (!state.isLoggedIn) {
                state.isLoggedIn = true;
            }
        },
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
    }
});

export const authActions = authSlice.actions;
export default authSlice;
