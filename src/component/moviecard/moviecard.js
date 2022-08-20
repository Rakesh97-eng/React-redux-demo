import "./moviecard.scss"
import {Link} from "react-router-dom"

const Moviecard = (props)=>{

    let images = props.value.images[0]

    return(
        < div>
       
        <Link to={`/movie/${props.value.id}`}>
        <div  className="movie-content">
        <img  src={images}/> 
        <p>{props.value.description}</p>
        </div>
        </Link>
        
        </div>
    )
}

export default Moviecard