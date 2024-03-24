import "./Homepage.css"
import Enqiry from "./Enqiry"
import Aboutussec  from "./image/contact us.png"
function Contact(){
    return(
 
     <>
     <div className="about-img">
      <img src={Aboutussec} className="img-fluid" alt="..."/>
              </div>
     <Enqiry/>
  
     </>
    )
 
 }
 export default Contact