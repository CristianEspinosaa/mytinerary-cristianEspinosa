import { createReducer } from "@reduxjs/toolkit";
import { login, setUser } from "../actions/authActions.js";

const initialState = {
    loading : false,
    error : false,
    user : null,
    token : null
}

const authReducer = createReducer(initialState,(builder) => {
    builder.addCase(login.fulfilled,(state, action) => {
        state.loading = false,
        state.error = false,
        state.user = action.payload.user,
        state.token = action.payload.token
    })

    builder.addCase(login.pending,(state, action)=>{
        state.loading = true,
        state.error = false,
        state.user = null,
        state.token = null
    })

    builder.addCase(login.rejected, (state, action) => {
        state.loading = false,
        state.error = action.error.message,
        state.user = null,
        state.token = null,
        localStorage.removeItem("token")
    })

    builder.addCase(setUser, (state, action) => {
        state.user = action.payload.user,
        state.token = action.payload.token
    })
})

export default authReducer