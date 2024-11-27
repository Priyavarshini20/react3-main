import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
    name: "alerts",
    initialState: [],
    reducers: {
        addAlert: (state, action) => {
            state.push(action.payload);
        },
        removeAlert: (state, action) => {
            return state.filter((alert) => alert.id !== action.payload);
        }
    }
});

export const { addAlert, removeAlert } = alertSlice.actions;

export default alertSlice.reducer;