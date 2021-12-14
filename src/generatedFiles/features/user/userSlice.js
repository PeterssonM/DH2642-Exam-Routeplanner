import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    uid: null,
    logged_in: false,
    cards: {}
}

export const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        login: (state, action) => {
            state.logged_in = true;
            state.uid = action.payload;
        },

        logout: (state) => {
            state.logged_in = false;
        }
    }
})

//Actions
export const { login, logout } = userSlice.actions;

//Selectors
export const selectUserId = (state) => state.user.uid;
export const selectLoggedState = (state) => state.user.logged_in;
export const selectCards = (state) => state.user.cards;

export default userSlice.reducer;