import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const login = createAsyncThunk('login', async({email, password}) => {
    const credentials = {
        email : email,
        password : password
    }
    const response = await axios.post('http://localhost:8080/api/auth/signin', credentials)
    console.log(response.data);
    
    return response.data
})

export {login}
