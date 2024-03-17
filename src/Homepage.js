import { useState } from "react";
import "./Homepage.css";
import realthink from "./image/REALTHINK.png";
import bannars from "./image/bannner2.png";
import lakes from "./image/RTT.jpg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import contact_icon from "./image/contact-book.png";
import group_icon from "./image/group.png";
import handshake_icon from "./image/handshake.png";
import api_icon from "./image/api.png";
import globe_earth from "./image/globe-earth.gif";
import why from "./image/why choose.png";
// import React, { Component } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Homepage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src={lakes} className="d-block w-100 h-600 " alt="..." />
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
          <img src={realthink} className="d-block w-100 h-600" alt="..." />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={bannars} className="d-block w-100 h-600" alt="..." />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* ---------- Start OUR-SERVICE-------------------------- */}

      <div className="main-section bg-blue">
        <div className="container-fluid">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2 class="section-title">Services We Provide</h2>
                <p>We have a team of experienced and talented professionals who can help you with every aspect of the product development process, from ideation to prototyping to launch.</p>
              </div>
              <div class="col-lg-3 col-sm-6 mb-4">
                <div class="card ">
                  <div class="card-body">
                    {" "}
                    <img height="60px" src={globe_earth} alt="..." />
                    <h4 class="mt-4 mb-3">Web Development</h4>
                    <p>
                      We can help you to design and develop a new website, or to update your existing website. We specialize in creating user-friendly websites.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mb-4">
                <div class="card">
                  <div class="card-body">
                    {" "}
                    <img height="60px" src={globe_earth} alt="..." />
                    <h4 class="mt-4 mb-3">UI/UX Design</h4>
                    <p>
                      Designing immersive experiences that captivate users and drive meaningful interactions.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mb-4">
                <div class="card">
                  <div class="card-body">
                    {" "}
                    <img height="60px" src={globe_earth} alt="..." />
                    <h4 class="mt-4 mb-3">App Development</h4>
                    <p>
                      Our Custom Mobile App Development service offers end-to-end solutions for businesses and individuals looking to create innovative and user-friendly mobile applications.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mb-4">
                <div class="card">
                  <div class="card-body">
                    {" "}
                    <img height="60px" src={globe_earth} alt="..." />
                    <h4 class="mt-4 mb-3">Web Design</h4>
                    <p>
                      For what reason would it be advisable for me to think
                      about business content?
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mb-4">
                <div class="card">
                  <div class="card-body">
                    {" "}
                    <img height="60px" src={globe_earth} />
                    <h4 class="mt-4 mb-3">Web Design</h4>
                    <p>
                      For what reason would it be advisable for me to think about business content?
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mb-4">
                <div class="card">
                  <div class="card-body">
                    {" "}
                    <img height="60px" src={globe_earth} alt="..." />
                    <h4 class="mt-4 mb-3">Web Design</h4>
                    <p>
                      For what reason would it be advisable for me to think
                      about business content?
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mb-4">
                <div class="card">
                  <div class="card-body">
                    {" "}
                    <img height="60px" src={globe_earth} alt="..." />
                    <h4 class="mt-4 mb-3">Web Design</h4>
                    <p>
                      For what reason would it be advisable for me to think
                      about business content?
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mb-4">
                <div class="card">
                  <div class="card-body">
                    {" "}
                    <img height="60px" src={globe_earth} alt="..." />
                    <h4 class="mt-4 mb-3">Web Design</h4>
                    <p>
                      For what reason would it be advisable for me to think
                      about business content?
                    </p>
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
                    Here's why we believe we're the perfect fit for you:
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

      {/* ---------- Blog-------------------------- */}
      <div class="container-fluid">
        <div class="container">
          <div class="row">
            <div className='col-lg-3'></div>
            <div className='col-lg-6 vlog'><p>BLOG</p></div>
            <div className='col-lg-3'></div>
            <div className='col-lg-3'></div>
            <div className='col-lg-6 vlog'><h1>Recent posts form our Blog</h1></div>
            <div className='col-lg-3'></div>

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
                    <a href="" class="timeline-content">
                      <div class="timeline-icon">
                        <img height="50px" src={api_icon} alt="..." />
                      </div>
                      <h6>Innovation</h6>
                      <p>
                        we are committed to driving innovation and delivering
                        cutting-edge solutions that exceed our clients'
                        expectations.
                      </p>
                      <a className="btn_click">Read More....</a>
                    </a>
                  </div>
                  <div class="timeline">
                    <a href="" class="timeline-content">
                      <div class="timeline-icon">
                        {" "}
                        <img height="50px" src={handshake_icon} alt="..." />
                      </div>
                      <h6>Commitment</h6>
                      <p>
                        we are dedicated to delivering exceptional service and
                        support to our clients.
                      </p>
                      <a className="btn_click">Read More....</a>
                    </a>
                  </div>
                  <div class="timeline">
                    <a href="" class="timeline-content">
                      <div class="timeline-icon">
                        <img height="50px" src={contact_icon} alt="..." />
                      </div>
                      <h6>Integrity</h6>
                      <p>
                        we hold ourselves to the highest standards of integrity
                        in all our interactions and transactions with our
                        clients.
                      </p>
                      <a className="btn_click">Read More....</a>
                    </a>
                  </div>
                  <div class="timeline">
                    <a href="" class="timeline-content">
                      <div class="timeline-icon">
                        <img height="50px" src={group_icon} />
                      </div>
                      <h6>Value for Clients</h6>
                      <p>
                        we are committed to delivering exceptional value to our
                        clients in every interaction and engagement.
                      </p>
                      <a className="btn_click">Read More....</a>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------Testimonials----------------------- */}
      <div className="mySwiper" >
        <Swiper
          direction={"Horizontal"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}

        >
          <SwiperSlide>
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="swip-img">
                    <img
                      className="img-fluid"
                      src="https://st4.depositphotos.com/5228995/20079/i/450/depositphotos_200790088-stock-photo-man-in-official-wear-in.jpg"
                      alt=""
                    />

                    <h2> Lorem ipsum</h2>
                    <ul>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                    </ul>
                    <span>
                      <i class="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Lorem3 ipsum dolor, sit amet consectetur adipisicing elit.
                      Minima quo fugiat quaerat quae nulla vero iusto perspiciatis
                      reiciendis, possimus culpa placeat necessitatibus molestias
                      impedit totam laboriosam quod corrupti quos nemo.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="swip-img">
                    <img
                      className="img-fluid"
                      src="https://st4.depositphotos.com/5228995/20079/i/450/depositphotos_200790088-stock-photo-man-in-official-wear-in.jpg"
                      alt=""
                    />

                    <h2> Lorem ipsum</h2>
                    <ul>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                    </ul>
                    <span>
                      <i class="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Lorem3 ipsum dolor, sit amet consectetur adipisicing elit.
                      Minima quo fugiat quaerat quae nulla vero iusto perspiciatis
                      reiciendis, possimus culpa placeat necessitatibus molestias
                      impedit totam laboriosam quod corrupti quos nemo.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="swip-img">
                    <img
                      className="img-fluid"
                      src="https://st4.depositphotos.com/5228995/20079/i/450/depositphotos_200790088-stock-photo-man-in-official-wear-in.jpg"
                      alt=""
                    />

                    <h2> Lorem ipsum</h2>
                    <ul>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                    </ul>
                    <span>
                      <i class="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Lorem3 ipsum dolor, sit amet consectetur adipisicing elit.
                      Minima quo fugiat quaerat quae nulla vero iusto perspiciatis
                      reiciendis, possimus culpa placeat necessitatibus molestias
                      impedit totam laboriosam quod corrupti quos nemo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="swip-img">
                    <img
                      className="img-fluid"
                      src="https://st4.depositphotos.com/5228995/20079/i/450/depositphotos_200790088-stock-photo-man-in-official-wear-in.jpg"
                      alt=""
                    />

                    <h2> Lorem ipsum</h2>
                    <ul>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                    </ul>
                    <span>
                      <i class="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Lorem3 ipsum dolor, sit amet consectetur adipisicing elit.
                      Minima quo fugiat quaerat quae nulla vero iusto perspiciatis
                      reiciendis, possimus culpa placeat necessitatibus molestias
                      impedit totam laboriosam quod corrupti quos nemo.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="swip-img">
                    <img
                      className="img-fluid"
                      src="https://st4.depositphotos.com/5228995/20079/i/450/depositphotos_200790088-stock-photo-man-in-official-wear-in.jpg"
                      alt=""
                    />

                    <h2> Lorem ipsum</h2>
                    <ul>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                    </ul>
                    <span>
                      <i class="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Lorem3 ipsum dolor, sit amet consectetur adipisicing elit.
                      Minima quo fugiat quaerat quae nulla vero iusto perspiciatis
                      reiciendis, possimus culpa placeat necessitatibus molestias
                      impedit totam laboriosam quod corrupti quos nemo.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="swip-img">
                    <img
                      className="img-fluid"
                      src="https://st4.depositphotos.com/5228995/20079/i/450/depositphotos_200790088-stock-photo-man-in-official-wear-in.jpg"
                      alt=""
                    />

                    <h2> Lorem ipsum</h2>
                    <ul>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                    </ul>
                    <span>
                      <i class="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Lorem3 ipsum dolor, sit amet consectetur adipisicing elit.
                      Minima quo fugiat quaerat quae nulla vero iusto perspiciatis
                      reiciendis, possimus culpa placeat necessitatibus molestias
                      impedit totam laboriosam quod corrupti quos nemo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="swip-img">
                    <img
                      className="img-fluid"
                      src="https://st4.depositphotos.com/5228995/20079/i/450/depositphotos_200790088-stock-photo-man-in-official-wear-in.jpg"
                      alt=""
                    />

                    <h2> Lorem ipsum</h2>
                    <ul>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                    </ul>
                    <span>
                      <i class="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Lorem3 ipsum dolor, sit amet consectetur adipisicing elit.
                      Minima quo fugiat quaerat quae nulla vero iusto perspiciatis
                      reiciendis, possimus culpa placeat necessitatibus molestias
                      impedit totam laboriosam quod corrupti quos nemo.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="swip-img">
                    <img
                      className="img-fluid"
                      src="https://st4.depositphotos.com/5228995/20079/i/450/depositphotos_200790088-stock-photo-man-in-official-wear-in.jpg"
                      alt=""
                    />

                    <h2> Lorem ipsum</h2>
                    <ul>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                    </ul>
                    <span>
                      <i class="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Lorem3 ipsum dolor, sit amet consectetur adipisicing elit.
                      Minima quo fugiat quaerat quae nulla vero iusto perspiciatis
                      reiciendis, possimus culpa placeat necessitatibus molestias
                      impedit totam laboriosam quod corrupti quos nemo.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="swip-img">
                    <img
                      className="img-fluid"
                      src="https://st4.depositphotos.com/5228995/20079/i/450/depositphotos_200790088-stock-photo-man-in-official-wear-in.jpg"
                      alt=""
                    />

                    <h2> Lorem ipsum</h2>
                    <ul>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                    </ul>
                    <span>
                      <i class="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Lorem3 ipsum dolor, sit amet consectetur adipisicing elit.
                      Minima quo fugiat quaerat quae nulla vero iusto perspiciatis
                      reiciendis, possimus culpa placeat necessitatibus molestias
                      impedit totam laboriosam quod corrupti quos nemo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default Homepage;
