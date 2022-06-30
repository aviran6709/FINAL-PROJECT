import facebook from "../../image/facebook-min.svg"
import gitHub from "../../image/gitHub-min.svg"
const Footer =()=>{
    
    
    return(
        <div className="footer">
            <h3 className="footer__tittle">© 2021 Supersite, Powered by News API</h3>
            <div className="footer__content" >
            < div className="footer__links">
               <a className="footer__links_text" href="#" >Home</a>
                <p className="footer__links_text" >Practicum By Yandex</p>      
                </div>      
                <div className="footer__links_btn" >
                <img  className="footer__links_btn" src={gitHub} alt="github icon" ></img>
                <img className="footer__links_btn" src={facebook} alt="facebook icon" ></img>
              </div>
     
           
              </div>
        </div>
    )
}

export default Footer