import { Reducer } from "react";
import {configureStore} from "@reduxjs/toolkit"
import moviesreducer from "./movies/movieslice"

const  store =configureStore({
    reducer:{movies:moviesreducer}
})

export default store; 