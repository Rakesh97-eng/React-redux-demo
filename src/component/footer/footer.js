import './footer.scss';
import logo from "../../images/logo.jpg"

const Footer = ()=>{
    return(
        <>
       
        <div className="footer">
        <div>
        <img src = {logo}></img>
        </div>
        <div className="footer-text">
          <div>Movie App</div>  
          <div className="footer-add">
            East street, Thirunageswaram, Kumbakonam
        </div>
        </div>
        </div>
        

        </>
    )
}

export default Footer;