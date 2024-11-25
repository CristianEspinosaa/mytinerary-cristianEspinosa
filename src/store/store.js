import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authReducer.js"


const store = configureStore({
    reducer: {
        authStore: authReducer
    },
});

export default store