import "bootstrap/dist/css/bootstrap.min.css";
import Aboutus from "./image/about us.png";
function About() {
  return (
    <>
      <div className="about-img">
      <img src={Aboutus} className="img-fluid" alt="..." />
              </div>
      <div className="container-fluid about-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about">
                <h1>About Us</h1>
                <p>
                  At [REALTHINK TECHNOLOGY ], we are passionate about crafting
                  exceptional web experiences that help businesses succeed
                  online. With a dedicated team of talented professionals, we
                  specialize in delivering customized web development solutions
                  tailored to our clients' unique needs and goals.
                </p>
                <button>Read More</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img">
                <img
                  src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/about.jpg"
                  alt=""
                  style={{ width: "100%" }}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid apart-section">
        <div className="container">
          <div className="row">
            <h1>What Sets Us Apart</h1>
            <div className="col-lg-4 apart-section">
              <img
                src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/values-1.png"
                alt=""
                style={{ width: "80%" }}
              ></img>
              <h4>Expertise</h4>
              <p>
                With years of industry experience and a deep understanding of
                the latest technologies and trends, our team brings expertise
                and creativity to every project we undertake.
              </p>
            </div>
            <div className="col-lg-4 apart-section">
              <img
                src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/values-2.png"
                alt=""
                style={{ width: "80%" }}
              ></img>
              <h4>Collaborative Approach</h4>
              <p>
                We believe in collaboration and communication. From initial
                consultation to final delivery, we work closely with our clients
                to ensure their vision is brought to life with precision and
                excellence.
              </p>
            </div>
            <div className="col-lg-4 apart-section">
              <img
                src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/values-3.png"
                alt=""
                style={{ width: "80%" }}
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
          <div className="row">
            <div className="col-lg-2"></div>

            <div className="col-lg-4">
              <img
                src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/values-1.png"
                alt=""
                style={{ width: "80%" }}
              ></img>
              <h4>Quality Assurance</h4>
              <p>
                Quality is at the forefront of everything we do. Our rigorous
                quality assurance processes ensure that every website we deliver
                meets the highest standards of performance, functionality, and
                <br></br> security.
              </p>
            </div>
            <div className="col-lg-4">
              <img
                src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/values-2.png"
                alt=""
                style={{ width: "80%" }}
              ></img>
              <h4>Customer Satisfaction</h4>
              <p>
                {" "}
                Our commitment to customer satisfaction is unwavering. We
                prioritize transparency, responsiveness, and reliability to
                ensure our clients have a positive and rewarding experience
                working with us.
              </p>
            </div>
            <div className="col-lg-2"></div>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
export default About;
