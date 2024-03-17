import "./footer.css";
import imge from "./image/1-removebg-preview.png";
import 'bootstrap/dist/css/bootstrap.min.css';
 function Footer(){
    return(
        <>
       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
       <div className="footer-sec">
<div className="container-fluid ">
            <div className="container footer">
            <div className="row">
<div className="col-lg-4">
<i class="fa fa-map-marker"></i><span>Find Us</span>
<p>piplani petrol pump bhopal m.p</p>

</div>
<div className='col-lg-4'>
<i class="fa fa-phone"></i><span>call Us</span>
<p>8305617720</p>  
</div>
<div className='col-lg-4'>
<i class="fa fa-envelope-o"></i> <span>Mail us</span>
<p>sakshipal232k4@gmail.com</p>  
</div>
       </div>
            </div>
        </div>
        <div className="container-fluid footer-page">
            <div className="container">
            <div className="row">
<div className="col-lg-4">
<img src={imge} alt=""></img>
<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
<h3>Follow US</h3>
<span>
<ul>
    <li><i class="fa fa-facebook"></i></li>
    <li><i class="fa fa-instagram"></i></li>
    <li><i class="fa fa-youtube-play"></i></li>
</ul>
</span>

</div>
<div className='col-lg-4'>
<h2>Useful Links</h2>
<div className="footer-icon">
<ul>
    <li>Home</li>
    <li>Services</li>
    <li>Contact</li>
    <li>Our Services</li>
    <li>Contact</li>  
<li>Home</li>
    <li>Services</li>
    <li>Contact</li>
   </ul>

</div>
</div>
<div className='col-lg-4'>
 <h2>subscribe</h2>
<p>Don't miss to subscribe to our new teeds ,kindly fill the from below</p> 
<input type="email" placeholder="Email Address"></input><button><i class="fa fa-send-o "></i></button>
</div>
       </div>
            </div>
        </div>
        </div>
        </>
    );
}
export default Footer