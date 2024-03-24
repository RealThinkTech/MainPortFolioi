import "bootstrap/dist/css/bootstrap.min.css";
import Aboutussec from "./image/about us.png";
import about from "./image/about.jpg";
import about1 from "./image/about1.png";
import about2 from "./image/about2.png";
import about3 from "./image/about3.png";
import about4 from "./image/about4.png";
import about5 from "./image/about5.png";
import about6 from "./image/about6.png";
import "./about.css";
function About() {
  return (
    <>
   
      <div className="about-img">
      <img src={Aboutussec} className="img-fluid" alt="..."/>
              </div>
      <div className="container-fluid about-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-page-1">
                <h1>About Us</h1>
                <p>
                  At [REALTHINK TECHNOLOGY ],Our expert guidance and strategic insights to help you navigate the complexities of technology and achieve your business goals.We stay at the forefront of technological advancements and industry trends to harness the power of innovation in everything we do. From adopting emerging technologies to implementing best practices, we continuously strive to push the boundaries of what's possible.
                </p>
            
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img-1">
                <img
                   src={about}
                  alt=""
                  style={{ width: "100%" }}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 h1style">
            <h1>What Sets Us Apart</h1>
            </div>
            <div className="col-lg-4">
              <div className="apart-section-1">
        <img
                src={about1}
                alt=""
                style={{ width: "100%", height:"200px" }}
              ></img>
              <h4>Expertise</h4>
              <p>
                With years of industry experience and a deep understanding of
                the latest technologies and trends, our team brings expertise
                and creativity to every project we undertake.
              </p>
              </div>
            </div>
            <div className="col-lg-4 ">
            <div className="apart-section-1">
              <img
                   src={about2}
                alt=""
                style={{  width: "100%", height:"200px" }}
              ></img>
              <h4>Collaborative Approach</h4>
              <p>
                We believe in collaboration and communication. From initial
                consultation to final delivery, we work closely with our clients
                to ensure their vision is brought to life with precision and
                excellence.
              </p>
              </div>
            </div>
            <div className="col-lg-4">
            <div className="apart-section-1">
              <img
  src={about3}
                alt=""
                style={{ width: "100%", height:"200px" }}
              ></img>
              <h4>Tailored Solutions</h4>
              <p>
                
                We understand that one size does not fit all. That's why we take
                the time to understand each client's objectives, target
                audience, and industry landscape to create bespoke solutions
                that drive results.
              </p>
              </div>
            </div>
        
            <div className="col-lg-4">
            <div className="apart-section-1">
              <img
                     src={about4}
                     alt=""
                     style={{ width: "100%", height:"200px" }}
              ></img>
              <h4>Quality Assurance</h4>
              <p>
                Quality is at the forefront of everything we do. Our rigorous
                quality assurance processes ensure that every website we deliver
                meets the highest standards of performance, functionality, and
                security.
              </p>
              </div>
            </div>
        <div className="col-lg-4">
            <div className="apart-section-1">
              <img
                  src={about5}
                alt=""
                style={{  width: "100%", height:"200px" }}
              ></img>
              <h4>Customer Satisfaction</h4>
              <p>
               
                Our commitment to customer satisfaction is unwavering. We
                prioritize transparency, responsiveness, and reliability to
                ensure our clients have a positive and rewarding experience
                working with us.
              </p>
              </div>
            </div>
            <div className="col-lg-4">
            <div className="apart-section-1">
              <img
              src={about6}
              alt=""
              style={{  width: "100%", height:"200px" }}
              ></img>
              <h4>Innovative Solutions</h4>
              <p>
                
                We don't just follow trends; we set them. Our team is constantly exploring new technologies, methodologies, and strategies to develop innovative solutions that address the evolving needs of our clients.
              </p>
              </div>
            </div>
         
            </div>
         
      </div>
      </div>
    </>
  );
}
export default About;
