import { useState } from "react";
import "./Homepage.css";
import "./Blog.css";
import Enqiry from "./Enqiry";
import realthink from "./image/REALTHINK.png";
import bannars from "./image/bannner2.png";
import lakes from "./image/RTT.jpg";

import Aboutimg from "./image/pexels-christina-morillo-1181396.jpg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import contact_icon from "./image/contact-book.png";
import groupicon from "./image/group.png";
import { FaStar } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import handshake_icon from "./image/handshake.png";
import api_icon from "./image/api.png";
import globe_earth from "./image/globe-earth.gif";
import why from "./image/why choose.png";





const Homepage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    
  };
  return (
    <>

      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src={lakes} className="col-lg-12 col-md-12 col-12 banner_1" alt="..." />
          <div class="background background0"></div>
          <div class="background background1"></div>
          <div class="background background2"></div>
          <div class="background background3"></div>
          <div class="background background4"></div>
          <div class="background background5"></div>
          <div class="background background6"></div>
          <div class="background background7"></div>
          <div class="criterion">

            <div class="frame frame0"></div>
            <div class="frame frame1"></div>
            <div class="frame frame2"></div>
            <div class="frame frame3"></div>
            <div class="frame frame4"></div>
            <div class="frame frame5"></div>
            <div class="frame frame6"></div>
            <div class="frame frame7"></div>
            <div class="particle particle00"></div>
            <div class="particle particle01"></div>
            <div class="particle particle02"></div>
            <div class="particle particle03"></div>
            <div class="particle particle04"></div>
            <div class="particle particle05"></div>
            <div class="particle particle06"></div>
            <div class="particle particle07"></div>
            <div class="particle particle08"></div>
            <div class="particle particle09"></div>
            <div class="particle particle010"></div>
            <div class="particle particle011"></div>
            <div class="particle particle10"></div>
            <div class="particle particle11"></div>
            <div class="particle particle12"></div>
            <div class="particle particle13"></div>
            <div class="particle particle14"></div>
            <div class="particle particle15"></div>
            <div class="particle particle16"></div>
            <div class="particle particle17"></div>
            <div class="particle particle18"></div>
            <div class="particle particle19"></div>
            <div class="particle particle110"></div>
            <div class="particle particle111"></div>
            <div class="particle particle20"></div>
            <div class="particle particle21"></div>
            <div class="particle particle22"></div>
            <div class="particle particle23"></div>
            <div class="particle particle24"></div>
            <div class="particle particle25"></div>
            <div class="particle particle26"></div>
            <div class="particle particle27"></div>
            <div class="particle particle28"></div>
            <div class="particle particle29"></div>
            <div class="particle particle210"></div>
            <div class="particle particle211"></div>
            <div class="particle particle30"></div>
            <div class="particle particle31"></div>
            <div class="particle particle32"></div>
            <div class="particle particle33"></div>
            <div class="particle particle34"></div>
            <div class="particle particle35"></div>
            <div class="particle particle36"></div>
            <div class="particle particle37"></div>
            <div class="particle particle38"></div>
            <div class="particle particle39"></div>
            <div class="particle particle310"></div>
            <div class="particle particle311"></div>
            <div class="particle particle40"></div>
            <div class="particle particle41"></div>
            <div class="particle particle42"></div>
            <div class="particle particle43"></div>
            <div class="particle particle44"></div>
            <div class="particle particle45"></div>
            <div class="particle particle46"></div>
            <div class="particle particle47"></div>
            <div class="particle particle48"></div>
            <div class="particle particle49"></div>
            <div class="particle particle410"></div>
            <div class="particle particle411"></div>
            <div class="particle particle50"></div>
            <div class="particle particle51"></div>
            <div class="particle particle52"></div>
            <div class="particle particle53"></div>
            <div class="particle particle54"></div>
            <div class="particle particle55"></div>
            <div class="particle particle56"></div>
            <div class="particle particle57"></div>
            <div class="particle particle58"></div>
            <div class="particle particle59"></div>
            <div class="particle particle510"></div>
            <div class="particle particle511"></div>
            <div class="particle particle60"></div>
            <div class="particle particle61"></div>
            <div class="particle particle62"></div>
            <div class="particle particle63"></div>
            <div class="particle particle64"></div>
            <div class="particle particle65"></div>
            <div class="particle particle66"></div>
            <div class="particle particle67"></div>
            <div class="particle particle68"></div>
            <div class="particle particle69"></div>
            <div class="particle particle610"></div>
            <div class="particle particle611"></div>
            <div class="particle particle70"></div>
            <div class="particle particle71"></div>
            <div class="particle particle72"></div>
            <div class="particle particle73"></div>
            <div class="particle particle74"></div>
            <div class="particle particle75"></div>
            <div class="particle particle76"></div>
            <div class="particle particle77"></div>
            <div class="particle particle78"></div>
            <div class="particle particle79"></div>
            <div class="particle particle710"></div>
            <div class="particle particle711"></div>
          </div>

          <div class="stage">
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={realthink} className="col-lg-12 col-md-12 col-12 banner_1" style={{height:600}}  alt="..." />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={bannars} className="col-lg-12 col-md-12 col-12" style={{height:600}} alt="..." />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

      </Carousel>




      {/* ---------- Start ABOUT-US-------------------------- */}
      <div className="main-section">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="about-sec">
                  <h3>About Us</h3>
                  <p>REALTHINK TECHNOLOGY is a cutting-edge technology company specializing in providing innovative solutions for businesses worldwide.
                    We have rapidly grown into a leading provider of Software and UI/UX Development known for our commitment to excellence and customer satisfaction.
                    Our team consists of highly skilled professionals with years of experience in the technology industry .We are committed to staying ahead of the curve by continuously innovating and adopting new technologies.We believe in building long-term partnerships with our clients, working together to achieve mutual success.</p>
                  <a className="readmore" href="...">Know more...</a>
                </div>
              </div>
              <div className="col-lg-6 col-12">

                <div className="about-img">
                  <img height="400px" width="100%" src={Aboutimg} alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Start OUR-SERVICE-------------------------- */}

      <div className="main-section bg-blue">
        <div className="container-fluid">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2 className="section-title">Services We Provide</h2>
                <p className="services-p">We have a team of experienced and talented professionals who can help you with every aspect of the product development process, from ideation to prototyping to launch.</p>
                <div className="row justify-content col-lg-6">

                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mb-4">
                <div class="card ">
                  <div class="card-body">

                    <img height="60px" src={globe_earth} alt="..." />
                    <h4 class="mt-4 mb-3">Software Development</h4>
                    <p>
                      Innovative software solutions driving business success and technological advancement effortlessly.
                    </p>
                    <a className="readmore" href="...">Read more...</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mb-4">
                <div class="card">
                  <div class="card-body">

                    <img height="60px" src={globe_earth} alt="..." />
                    <h4 class="mt-4 mb-3">UI/UX Design</h4>
                    <p>
                      Designing immersive experiences that captivate users and drive meaningful interactions.
                    </p>
                    <a className="readmore" href="...">Read more...</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mb-4">
                <div class="card">
                  <div class="card-body">

                    <img height="60px" src={globe_earth} alt="..." />
                    <h4 class="mt-4 mb-3">App Development</h4>
                    <p>
                      Our Custom Mobile App Development service offers end-to-end solutions for businesses and individuals looking to create innovative and user-friendly mobile applications.
                    </p>
                    <a className="readmore" href="...">Read more...</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mb-4">
                <div class="card">
                  <div class="card-body">

                    <img height="60px" src={globe_earth} alt="..." />
                    <h4 class="mt-4 mb-3">Graphics Design</h4>
                    <p>
                      Comprehensive training programs covering the fundamentals of graphic design.
                    </p>
                    <a className="readmore" href="...">Read more...</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mb-4">
                <div class="card">
                  <div class="card-body">

                    <img height="60px" src={globe_earth} alt="..." />
                    <h4 class="mt-4 mb-3">Web Development</h4>
                    <p>
                      We can help you to design and develop a new website, or to update your existing website. We specialize in creating user-friendly websites.
                    </p>
                    <a className="readmore" href="...">Read more...</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mb-4">
                <div class="card">
                  <div class="card-body">

                    <img height="60px" src={globe_earth} alt="..." />
                    <h4 class="mt-4 mb-3">SEO & Digital Marketing</h4>
                    <p>
                      This training program is designed for fresher students who are interested in learning about search engine optimization (SEO) and digital marketing.
                    </p>
                    <a className="readmore" href="...">Read more...</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mb-4">
                <div class="card">
                  <div class="card-body">

                    <img height="60px" src={globe_earth} alt="..." />
                    <h4 class="mt-4 mb-3">Training for fresher</h4>
                    <p>
                      This training program is designed for fresher students who are interested in pursuing a career in web/App and Software development.
                    </p>
                    <a className="readmore" href="...">Read more...</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mb-4">
                <div class="card">
                  <div class="card-body">
                    {" "}
                    <img height="60px" src={globe_earth} alt="..." />
                    <h4 class="mt-4 mb-3">Online Courses</h4>
                    <p>
                      This course is designed for fresher students who are interested in learning the essentials of web/App and Software development.
                    </p>
                    <a className="readmore" href="...">Read more...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- END OUR-SERVICE-------------------------- */}
      <div className="main-section ">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading">
                  <h3>WHY CHOOSE US</h3>
                  <p>
                    "At REALTHINK TECHNOLOGY, we understand that selecting the
                    right partner for your needs is crucial for success. <br />
                    Here's why we believe we're the perfect fit for you."
                  </p>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="col-lg-12">
                    <div className="cardbox">
                      <h6>Expertise in Web Development:</h6>
                      <p>
                        {" "}
                        Our team comprises highly skilled and experienced web
                        developers who are proficient in a wide range of
                        programming languages, frameworks, and technologies.
                        From front-end to back-end development, we have the
                        expertise to bring your vision to life.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="cardbox">
                      <h6>Customized Solutions</h6>
                      <p>
                        {" "}
                        understand that every project is unique. That's why we
                        take a personalized approach to development, crafting
                        custom solutions tailored to your specific requirements
                        and objectives. Whether you need a simple website or a
                        complex web application, we have the skills and
                        creativity to deliver.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <img src={why} className="img-fluid" alt="..." />
                </div>

                <div className="col-lg-4">
                  <div className="col-lg-12">
                    <div className="cardbox">
                      <h6>Responsive and Mobile-Friendly Designs</h6>
                      <p>
                        
                        Our team comprises highly skilled and experienced web
                        developers who are proficient in a wide range of
                        programming languages, frameworks, and technologies.
                        From front-end to back-end development, we have the
                        expertise to bring your vision to life.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="cardbox">
                      <h6>Cutting-Edge Technologies</h6>
                      <p>
                        We stay up-to-date with the latest trends and
                        technologies in web development to ensure that our
                        clients always have access to the most innovative
                        solutions. Whether it's HTML5, CSS3, JavaScript
                        frameworks, or server-side technologies, we leverage the
                        latest tools and techniques to deliver best-in-class
                        results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------Portfolio-sec-------------------------- */}
      <div class="container-fluid">
        <div class="container">
          <div class="row">
            <div className='col-lg-3'></div>
            <div className='col-lg-6 vlog'><p>Portfolio</p></div>
            <div className='col-lg-3'></div>
            <div className='col-lg-3'></div>
            <div className='col-lg-6 vlog'><h1>Our Recent Projects</h1></div>
            <div className='col-lg-3'></div>

            <div className='col-lg-4'>
              <div className='blog-home'>
                <img src='https://roctics.com/assets/img/blog/blog-1.jpg' style={{ width: '100%' }}
                  alt='...'></img>
                <p>Tue,jun 15</p>
                <h5>How a website/ERP/Software boosts your bussiness</h5>
                <button>Read More</button>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='blog-home'>
                <img src='https://roctics.com/assets/img/blog/blog-1.jpg' style={{ width: '100%' }}
                  alt=''></img>
                <p>Tue,jun 15</p>
                <h5>How a website/ERP/Software boosts your bussiness</h5>
                <button>Read More</button>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='blog-home'>
                <img src='https://roctics.com/assets/img/blog/blog-3.jpg' style={{ width: '100%' }}
                  alt=''></img>
                <p>Tue,jun 15</p>
                <h5>How a website/ERP/Software boosts your bussiness</h5>
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------commitment-section-------------------------- */}
      <div className="main-section bg-blue ">
        <div className="container-fluid">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="Yearly-timeline">
                  <div class="timeline">
                    <a href="/#" class="timeline-content" >
                      <div class="timeline-icon">
                        <img height="50px" src={api_icon} alt="..." />
                      </div>
                      <h6>Innovation</h6>
                      <p>
                        we are committed to driving innovation and delivering
                        cutting-edge solutions that exceed our clients'
                        expectations.
                      </p>

                    </a>
                  </div>
                  <div class="timeline">
                    <a href="/#" class="timeline-content">
                      <div class="timeline-icon">
                        {" "}
                        <img height="50px" src={handshake_icon} alt="..." />
                      </div>
                      <h6>Commitment</h6>
                      <p>
                        we are dedicated to delivering exceptional service and
                        support to our clients.
                      </p>

                    </a>
                  </div>
                  <div class="timeline">
                    <a href="/#" class="timeline-content">
                      <div class="timeline-icon">
                        <img height="50px" src={contact_icon} alt="..." />
                      </div>
                      <h6>Integrity</h6>
                      <p>
                        we hold ourselves to the highest standards of integrity
                        in all our interactions and transactions with our
                        clients.
                      </p>
                    </a>
                  </div>
                  <div class="timeline">
                    <a href="/#" class="timeline-content">
                      <div class="timeline-icon">
                        <img height="50px" src={groupicon} alt="..." />
                      </div>
                      <h6>Value for Clients</h6>
                      <p>
                        we are committed to delivering exceptional value to our
                        clients in every interaction and engagement.
                      </p>

                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* ----------Blog-section-------------------------- */}
      <div class="container-fluid img-card">
        <div class="container">
          <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6 img-card-q">
              <button>BLOG</button>
            </div>
            <div class="col-lg-3"></div>
            <div class="row">
              <div class="col-lg-3"></div>
              <div class="col-lg-6 img-card-q">
                <h2>
                  Our Latest<b style={{ color: "#106eea;" }}> Blog</b>
                </h2>
              </div>
              <div class="col-lg-3"></div>
            </div>

          </div>
          <div class="row">
            <div class="col-lg-3 col-12">
              <div class="img-w">
                <img
                  src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/team/team-1.jpg "
                  style={{ width: "100%" }} alt="..."
                />
                <ul>
                  <li>
                    <i class="fa fa-instagram"></i>
                  </li>
                  <li>
                    <i class="fa fa-youtube-play"></i>
                  </li>
                  <li>
                    <i class="fa fa-twitter"></i>
                  </li>
                  <li>
                    <i class="fa fa-linkedin-square"></i>
                  </li>
                </ul>
                <h5>Walter White</h5>
                <p>Chief Executive Officer</p>
              </div>
            </div>
            <div class="col-lg-3 col-12">
              <div class="img-w">
                <img
                  src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/team/team-2.jpg"
                  style={{ width: "100%" }} alt="..."
                />
                <ul>
                  <li>
                    <i class="fa fa-instagram"></i>
                  </li>
                  <li>
                    <i class="fa fa-youtube-play"></i>
                  </li>
                  <li>
                    <i class="fa fa-twitter"></i>
                  </li>
                  <li>
                    <i class="fa fa-linkedin-square"></i>
                  </li>
                </ul>
                <h5>Sarah Jhonson</h5>
                <p>Product Manager</p>
              </div>
            </div>
            <div class="col-lg-3 col-12">
              <div class="img-w">
                <img
                  src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/team/team-3.jpg"
                  style={{ width: "100%" }} alt="..."
                />
                <ul>
                  <li>
                    <i class="fa fa-instagram"></i>
                  </li>
                  <li>
                    <i class="fa fa-youtube-play"></i>
                  </li>
                  <li>
                    <i class="fa fa-twitter"></i>
                  </li>
                  <li>
                    <i class="fa fa-linkedin-square"></i>
                  </li>
                </ul>
                <h5>William Anderson</h5>
                <p>CTO</p>
              </div>
            </div>
            <div class="col-lg-3 col-12">
              <div class="img-w">
                <img
                  src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/team/team-4.jpg "
                  style={{ width: "100%" }} alt="..."
                />

                <ul>
                  <li>
                    <i class="fa fa-instagram"></i>
                  </li>
                  <li>
                    <i class="fa fa-youtube-play"></i>
                  </li>
                  <li>
                    <i class="fa fa-twitter"></i>
                  </li>
                  <li>
                    <i class="fa fa-linkedin-square"></i>
                  </li>
                </ul>

                <h5>Amanda Jepson</h5>
                <p>Accountant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------Testimonials----------------------- */}
      <div className="main-section">
        <div className="container-fluid">
          <div className="container">
            <div class="row">
              <div class="col-lg-3"></div>
              <div class="col-lg-6 img-card-q">

              </div>
              <div class="col-lg-3"></div>
              <div class="row">
                <div class="col-lg-3"></div>
                <div class="col-lg-6 img-card-q">
                  <h2>
                    <b> TESTIMONIALS</b>
                  </h2>
                  <p>Checkout what our client says about REALTHINK TECHNOLOGY </p>
                </div>
                <div class="col-lg-3"></div>
              </div>

            </div>


            <div className="row">

              <div className=" col-lg-4 col-12 ">
                <div className="box ">
                  <ImQuotesLeft />
                  <p>Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.</p>
                  <div class="content">
                    <div class="info">
                      <div class="name">Alex Smith</div>
                      <div class="job">Designer | Developer</div>
                      <div class="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                    <div class="image">
                      <img src={groupicon} alt="..." />
                    </div>
                  </div>
                </div>

              </div>

              <div className=" col-lg-4 col-12 ">
                <div class="box">
                  <ImQuotesLeft />
                  <p>Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.</p>
                  <div class="content">
                    <div class="info">
                      <div class="name">Steven Chris</div>
                      <div class="job">YouTuber | Blogger</div>
                      <div class="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                    <div class="image">
                      <img src={groupicon} alt="..." />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-12 ">
                <div class="box">
                  <ImQuotesLeft />
                  <p>Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.</p>
                  <div class="content">
                    <div class="info">
                      <div class="name">Kristina Bellis</div>
                      <div class="job">Freelancer | Advertiser</div>
                      <div class="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                    <div class="image">
                      <img src={groupicon} alt="..." />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      <Enqiry />




    </>


  );

};


export default Homepage;
