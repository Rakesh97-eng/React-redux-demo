import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const state ={
    movies:{},
    selectedmovies:{}
}

export const createAsyncmovies = createAsyncThunk(
    'movies/fetchmovies',async () => {
        const response =  await axios.get("https://dummyjson.com/products")   
         console.log("resss",response);
          return(response.data);
    }
)

export const createAsyncmoviedetails=createAsyncThunk(
    'movies/fetchmoviesdetail',async (id)=>{
        const response = await axios.get(`https://dummyjson.com/products/${id}`)
        console.log("res",response);
        return(response.data);
    }
)

const movieSlice =  createSlice({
    name : 'movies',
    initialState:state ,
    reducers:{
        removemovies:(state)=>{
            state.selectedmovies = {};
        }
    },
    extraReducers:{
       
        [createAsyncmovies.fulfilled]:(state,{payload})=>{
            console.log("fetched",payload);
            return {...state,movies:payload}
        },
        [createAsyncmoviedetails.fulfilled]:(state,{payload})=>{
            return {...state,selectedmovies:payload}
        }
    }
    
})

export const {removemovies} = movieSlice.actions;
export default movieSlice.reducer; 
export const getmoviedetails = (state)=>
    state.movies.selectedmovies
export const getallmovies = (state)=>
    state.movies.movies
