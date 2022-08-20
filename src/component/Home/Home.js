import Movielisting from "../movielisting/movielisting";
import { MovieApi } from "../../common/Apis/movieApikey";
import movieApi from "../../common/Apis/movieApi";
import {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { createAsyncmovies } from "../../features/movies/movieslice";

const Home = () => {
  
   const dispatch = useDispatch();
    useEffect(() => {
 
      dispatch (createAsyncmovies());
    },[])


    return (
        <>
            <div>
              
              
                <Movielisting />
            </div>
        </>
    )
}

export default Home;