import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setToken = token =>{
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const cleanToken = () =>{
    axios.defaults.headers.common.Authorization = ''
}

export const register = createAsyncThunk(
    'auth/register',
    async(credentials, thunkAPI) => {
        try {
            const {data} = await axios.post('/users/signup', credentials);
            setToken(data.token)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)


export const login = createAsyncThunk(
    'auth/login',
    async(credentials, thunkAPI) => {
        try {
            const {data} = await axios.post('/users/login', credentials);
            setToken(data.token)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    } 
)       

export const logout = createAsyncThunk(
    'auth/logout',
    async(_, thunkAPI) => {
        try {
            axios.post('/users/logout');
            cleanToken()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const refreshUser = createAsyncThunk(
   'auth/refresh',
    async(_, thunkAPI) => {
        const {token} = thunkAPI.getState().auth;
        if(!token){
            return thunkAPI.rejectWithValue('No valid token')
        }
        setToken(token)

        try{
            const currentUser = await axios.get('/users/current');
            return currentUser.data
        } catch (error){
            return thunkAPI.rejectWithValue(error.message)

        }
    } 
)