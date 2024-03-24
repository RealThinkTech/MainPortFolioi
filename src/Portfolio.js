import "./portfolio.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import  topdealiimg from "./image/topdeal.png";
import  orfarmimg from "./image/orfarm.png";
import  portimg from "./image/portfolio.png";
import  aratbimg from "./image/artab2024-03-24 at 6.36.11 PM.png";
import  nvimg from "./image/webnv2024-03-24 at 6.38.47 PM.png";
import  rusrtimg from "./image/webrust2024-03-24 at 6.41.35 PM.png";
import portfolio from "./image/portfolio (1).png";
 function Portfolio(){
    return(
<>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
<div className="about-img">
      <img src={portfolio} className="img-fluid" alt="..."/>
              </div>
<div class="container-fluid">
    <div class="container">
      <div class="row">
        <div className='col-lg-4'>
            <div className='portfolio'>
            <img src={portimg} style={{width:"100%"}} alt=''></img>
            <h2>Portfolio Website Developement</h2>
            <h5><a className="btn btn-primary" href="https://dancing-biscuit-0ee7dd.netlify.app" rel="noreferrer" target="_blank">Visit Website</a></h5>
            </div>
        </div>

        <div className='col-lg-4'>
            <div className='portfolio'>
            <img src={topdealiimg} style={{width:"100%"}} alt=''></img>
            <h2>Top-Deals E-Commerce</h2>
            <h5><a className="btn btn-primary" href="https://rupali123r.github.io/Top-Deals/" rel="noreferrer" target="_blank">Visit Website</a></h5>
            </div>
        </div>

        <div className='col-lg-4'>
            <div className='portfolio'>
            <img src={orfarmimg} style={{width:"100%"}} alt=''></img>
            <h2>ORFarms E-Commerce</h2>
            <h5><a className="btn btn-primary" href="https://rupali123r.github.io/Orfarm_Website_fullResponsive/" rel="noreferrer" target="_blank">Visitt Website</a></h5>
            </div>
        </div>
        <div className='col-lg-4'>
            <div className='portfolio'>
            <img src={aratbimg} style={{width:"100%"}} alt=''></img>
            <h2>Aratb Property Booking Site</h2>
            <h5><a className="btn btn-primary" href="https://aratb.com/" rel="noreferrer" target="_blank">Visit Website</a></h5>
            </div>
        </div>
        <div className='col-lg-4'>
            <div className='portfolio'>
            <img src={nvimg} style={{width:"100%"}} alt=''></img>
            <h2>NVsparkle E-Commerce</h2>
            <h5><a className="btn btn-primary" href="https://nvsparkle.com/" rel="noreferrer" target="_blank">Visit Website</a></h5>
            </div>
        </div>
        <div className='col-lg-4'>
            <div className='portfolio'>
            <img src={rusrtimg} style={{width:"100%"}} alt=''></img>
            <h2>Rust Console Community Social-Media</h2>
            <h5><a className="btn btn-primary" href="https://rust-consolecommunity.com" rel="noreferrer" target="_blank">Visit Website</a></h5>
            </div>
        </div>
     
     </div>
 </div>
 </div>
</>
)
}
export default Portfolio
