import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const setUser = createAction("setUser", (data) => {
    return {
        payload:data
    }
})

const login = createAsyncThunk('login', async({email, password}) => {
    const credentials = {
        email : email,
        password : password
    }
    const response = await axios.post('http://localhost:8080/api/auth/signin', credentials)
    console.log(response.data);
    localStorage.setItem("token", response.data.token)
    return response.data
})

export {login, setUser}
