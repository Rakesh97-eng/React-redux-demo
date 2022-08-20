import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { createAsyncmoviedetails } from "../../features/movies/movieslice";
import { getmoviedetails,removemovies } from "../../features/movies/movieslice";
import "./moviedetail.scss"

const Moviedetail = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const data = useSelector(getmoviedetails)
    console.log(data, "55");
    useEffect(() => {
        dispatch(createAsyncmoviedetails(id))
        return()=>(dispatch(removemovies()))
    }, [id])

    return (
        <>
            Moviedetail
            <div className="movie-section">
                {Object.keys(data) == 0 ? (<div>...Loading</div>):
               ( <>
                <div className="product-left">
                    <div className="product-title">
                      Name:  {data.title}
                    </div>
                    <div>
                       Price: {data.price}
                    </div>
                    <div>
                      Discount:  {data.discountPercentage}
                    </div>
                    <div>
                       Rating: {data.rating}
                    </div>
                    <div>
                       Brand: {data.brand}
                    </div>
                    <div>
                      Des:  {data.description}
                    </div>
                </div>
                <div className="product-right">
                   <img src={data.thumbnail}/>
                </div>
                </>)
                } 
            </div>
        </>
    )
}

export default Moviedetail