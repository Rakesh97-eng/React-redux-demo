import {useSelector} from "react-redux";
import  {getallmovies}  from "../../features/movies/movieslice";
import Moviecard from "../moviecard/moviecard";
import "./movielisting.scss"

const Movielisting =  ()=>{
    var  products = useSelector(getallmovies)
    console.log("movies",products.products);
    let renderproducts = products.products;
    let display;
   if  (renderproducts){
 display =  renderproducts.map((data,index)=>{
     return(
       <Moviecard key={index} value = {data}/>
    )
    })
   }
   
    return(
        <>
       <div className="pd-images"> 
       {display}

       </div>
       
       
        
    </>
    )
}

export default Movielisting