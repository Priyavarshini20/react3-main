import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/auth/registerSlice";
import loginReducer from "../features/auth/loginSlice";
import alertReducer from "../features/toast/alertSlice";

const store = configureStore({
    reducer: {
        register: registerReducer,
        login: loginReducer,
        alerts: alertReducer
    }
});

export default store;