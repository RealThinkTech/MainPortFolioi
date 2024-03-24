import "./footer.css";
import imge from "./image/1-removebg-preview.png";
import 'bootstrap/dist/css/bootstrap.min.css';
function Footer() {
    return (
        <>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="footer-sec">
                <div className="container-fluid ">
                    <div className="container footer">
                        <div className="row">
                            <div className="col-lg-4">
                                <span> <i class="fa fa-map-marker"></i> Find Us</span>
                                <p>Piplani petrol pump bhopal m.p</p>

                            </div>
                            <div className='col-lg-4'>
                                <span><i class="fa fa-phone"></i>  Call Us</span>
                                <p>6299171117</p>
                            </div>
                            <div className='col-lg-4'>
                                <span><i class="fa fa-envelope-o"></i>  Mail us</span>
                                <p>realthingtechnology@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid footer-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <img src={imge} alt=""></img>
                                <p>REALTHINK TECHNOLOGY is a leading provider of innovative UI/UX design solutions for businesses looking to create engaging and user-friendly digital experiences. With a team of experienced designers and developers, we specialize in crafting custom solutions that meet the unique needs of our clients and their target audiences.</p>
                                <h3 className="usefull-link">Follow US</h3>
                                <span>
                                    <ul>
                                        <li><i class="fa fa-facebook"></i></li>
                                        <li><i class="fa fa-instagram"></i></li>
                                        <li><i class="fa fa-youtube-play"></i></li>
                                    </ul>
                                </span>

                            </div>
                            <div className='col-lg-4'>
                                <h2 className="usefull-link">Useful Links</h2>
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
                                <h2 className="usefull-link">subscribe</h2>
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