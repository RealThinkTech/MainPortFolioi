
import 'bootstrap/dist/css/bootstrap.min.css';
import blogimg from "./image/blog-sec-img.jpeg";
import blogimg1 from "./image/blog-img1.png";
import blogimg2 from "./image/blog-img2.png";
import blogimg3 from "./image/blog-img3.png";
function Blog() {
    return (
        <>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div class="container-fluid header-blog">
                <div class="container">
                    <div class="row">
                    </div>
                </div>
            </div>
            <div class="container-fluid blog-img-section">
                <div class="container">
                    <div class="row">
                        <div className='col-lg-8 blog-img1'>
                            <div className='blog-contain'>
                                <img src={blogimg} alt='' style={{ width: '100%' }}></img>
                                <h2>Our Best Services</h2>

                                <p><b style={{ color: "#eb4747" }}>Custom Web Development:</b>Tailored web development services to meet the unique needs of clients, including responsive design, robust functionality, and user-friendly interfaces....</p>

                                <p><b style={{ color: "#eb4747" }}>Software Development: </b>Full-cycle software development services, including requirements gathering, architecture design, development, testing, deployment, and maintenance for desktop, web, and mobile platforms......</p>

                                <p><b style={{ color: "#eb4747" }}>Mobile App Development:</b> Creation of native and cross-platform mobile applications for iOS and Android platforms, ensuring seamless performance and user experience.....</p>

                                <p><b style={{ color: "#eb4747" }}>UI/UX Design:</b> Expert UI/UX design services to enhance user engagement and satisfaction, focusing on intuitive interfaces, attractive visuals, and smooth user experiences across all devices......</p>

                                <p><b style={{ color: "#eb4747" }}>E-commerce Solutions:</b> Development of secure and scalable e-commerce platforms, incorporating features such as product management, payment gateway integration, order processing, and customer management.......</p>

                                <p><b style={{ color: "#eb4747" }}>Content Management Systems (CMS):</b> Implementation of CMS solutions like WordPress, Drupal, or custom-built CMS platforms to enable easy content creation, publishing, and management for websites and applications.....</p>

                                <p><b style={{ color: "#eb4747" }}>Web Application Development:</b> Building dynamic and interactive web applications using modern technologies like JavaScript frameworks (e.g., React, Angular, Vue.js), backend technologies (e.g., Node.js, Django, Flask), and databases (e.g., MongoDB, MySQL, PostgreSQL)....</p>

                                <p><b style={{ color: "#eb4747" }}>API Development and Integration:</b>  Creation of custom APIs to facilitate seamless communication between different software components or third-party services, enabling data exchange and system integration....</p>

                                <p>< b style={{ color: "#eb4747" }}>Quality Assurance and Testing:</b> Comprehensive testing services, including functional testing, performance testing, security testing, and usability testing, to ensure the reliability, scalability, and security of web and software applications.....</p>

                                <p><b style={{ color: "#eb4747" }}> Maintenance and Support:</b> Ongoing maintenance, monitoring, and support services to ensure the smooth operation and optimal performance of web applications and software systems, including bug fixes, updates, and security patches.....</p>

                                <p>By offering these comprehensive services, our company can cater to a wide range of client needs and deliver high-quality solutions that drive business growth and success..</p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='blog-search'>
                                <h3>Search</h3>
                                <div className='d-flex'>
                                    <input type='text'></input><button><i class="fa fa-search"></i></button>
                                </div>
                                <h3>Categories</h3>
                                <p>IT(1)</p>
                                <p>Tech Update(1)</p>
                                <div className='row'>
                                    <h3>Recent Posts</h3>
                                    <div className='col-lg-4'>
                                        <img src={blogimg} alt='' style={{ width: '100%' }}></img>

                                    </div>
                                    <div className='col-lg-8'>
                                        <p>Why Small Business Need a Website</p>
                                    </div>

                                    <div className='col-lg-4' id='post-img'>

                                        <img src={blogimg2} alt='' style={{ width: '100%' }}></img>

                                    </div>
                                    <div className='col-lg-8'>
                                        <p>Why Small Business Need a Website</p>
                                    </div>
                                </div>

                                <h5>Tags</h5>
                                <ul>
                                    <li>Development</li>
                                    <li>Email Marketing</li>
                                    <li>Website</li>
                                    <li>SMO</li>
                                    <li>Mobile APP</li>
                                    <li>IT</li>
                                    <li>Marketing</li>
                                    <li>Graphic Designing</li>
                                    <li>Tech Update</li>
                                    <li>SMM</li>
                                    <li>Ads</li>
                                    <li>ERP</li>
                                    <li>SEO</li>
                                </ul>

                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-8'>
                                <div className='blog-containn'>
                                    <img src={blogimg1} alt='' style={{ width: '100%' }}></img>

                                    <h2>Pros and Cons of Mobile Native Apps vs Mobile Web Apps</h2>

                                    <p><b>Custom Web Development:</b>Tailored web development services to meet the unique needs of clients, including responsive design, robust functionality, and user-friendly interfaces....</p>

                                    <p><b style={{ color: "#eb4747" }}>Software Development: </b>Full-cycle software development services, including requirements gathering, architecture design, development, testing, deployment, and maintenance for desktop, web, and mobile platforms......</p>

                                    <p><b style={{ color: "#eb4747" }}>Mobile App Development:</b> Creation of native and cross-platform mobile applications for iOS and Android platforms, ensuring seamless performance and user experience.....</p>

                                    <p><b style={{ color: "#eb4747" }}>UI/UX Design:</b> Expert UI/UX design services to enhance user engagement and satisfaction, focusing on intuitive interfaces, attractive visuals, and smooth user experiences across all devices......</p>

                                    <p><b style={{ color: "#eb4747" }}>E-commerce Solutions:</b> Development of secure and scalable e-commerce platforms, incorporating features such as product management, payment gateway integration, order processing, and customer management.......</p>

                                    <p><b style={{ color: "#eb4747" }}>Content Management Systems (CMS):</b> Implementation of CMS solutions like WordPress, Drupal, or custom-built CMS platforms to enable easy content creation, publishing, and management for websites and applications.....</p>

                                    <p><b style={{ color: "#eb4747" }}>Web Application Development:</b> Building dynamic and interactive web applications using modern technologies like JavaScript frameworks (e.g., React, Angular, Vue.js), backend technologies (e.g., Node.js, Django, Flask), and databases (e.g., MongoDB, MySQL, PostgreSQL)....</p>

                                    <p><b style={{ color: "#eb4747" }}>API Development and Integration:</b>  Creation of custom APIs to facilitate seamless communication between different software components or third-party services, enabling data exchange and system integration....</p>

                                    <p><b style={{ color: "#eb4747" }}>Quality Assurance and Testing:</b> Comprehensive testing services, including functional testing, performance testing, security testing, and usability testing, to ensure the reliability, scalability, and security of web and software applications.....</p>

                                    <p><b style={{ color: "#eb4747" }}> Maintenance and Support:</b> Ongoing maintenance, monitoring, and support services to ensure the smooth operation and optimal performance of web applications and software systems, including bug fixes, updates, and security patches.....</p>

                                    <p>By offering these comprehensive services, our company can cater to a wide range of client needs and deliver high-quality solutions that drive business growth and success..</p>

                                </div>
                            </div>
                            <div className='col-lg-4'>&nbsp;</div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-8'>
                                <div className='blog-containn'>
                                    <img src={blogimg2} alt='' style={{ width: '100%' }}></img>

                                    <h2>Pros and Cons of Mobile Native Apps vs Mobile Web Apps</h2>

                                    <p><b>Custom Web Development:</b>Tailored web development services to meet the unique needs of clients, including responsive design, robust functionality, and user-friendly interfaces....</p>

                                    <p><b style={{ color: "#eb4747" }}>Software Development: </b>Full-cycle software development services, including requirements gathering, architecture design, development, testing, deployment, and maintenance for desktop, web, and mobile platforms......</p>

                                    <p><b style={{ color: "#eb4747" }}>Mobile App Development:</b> Creation of native and cross-platform mobile applications for iOS and Android platforms, ensuring seamless performance and user experience.....</p>

                                    <p><b style={{ color: "#eb4747" }}>UI/UX Design:</b> Expert UI/UX design services to enhance user engagement and satisfaction, focusing on intuitive interfaces, attractive visuals, and smooth user experiences across all devices......</p>

                                    <p><b style={{ color: "#eb4747" }}>E-commerce Solutions:</b> Development of secure and scalable e-commerce platforms, incorporating features such as product management, payment gateway integration, order processing, and customer management.......</p>

                                    <p><b style={{ color: "#eb4747" }}>Content Management Systems (CMS):</b> Implementation of CMS solutions like WordPress, Drupal, or custom-built CMS platforms to enable easy content creation, publishing, and management for websites and applications.....</p>

                                    <p><b style={{ color: "#eb4747" }}>Web Application Development:</b> Building dynamic and interactive web applications using modern technologies like JavaScript frameworks (e.g., React, Angular, Vue.js), backend technologies (e.g., Node.js, Django, Flask), and databases (e.g., MongoDB, MySQL, PostgreSQL)....</p>

                                    <p><b style={{ color: "#eb4747" }}>API Development and Integration:</b>  Creation of custom APIs to facilitate seamless communication between different software components or third-party services, enabling data exchange and system integration....</p>

                                    <p><b style={{ color: "#eb4747" }}>Quality Assurance and Testing:</b> Comprehensive testing services, including functional testing, performance testing, security testing, and usability testing, to ensure the reliability, scalability, and security of web and software applications.....</p>

                                    <p><b style={{ color: "#eb4747" }}> Maintenance and Support:</b> Ongoing maintenance, monitoring, and support services to ensure the smooth operation and optimal performance of web applications and software systems, including bug fixes, updates, and security patches.....</p>

                                    <p>By offering these comprehensive services, our company can cater to a wide range of client needs and deliver high-quality solutions that drive business growth and success..</p>

                                </div>
                            </div>
                            <div className='col-lg-4'>&nbsp;</div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-8'>
                                <div className='blog-containn'>
                                    <img src={blogimg3} alt='' style={{ width: '100%' }}></img>

                                    <h2>Pros and Cons of Mobile Native Apps vs Mobile Web Apps</h2>
                                    <ul>
                                        <li><i class="fa fa-calendar-o"></i> 2021-08-14</li>
                                    </ul>
                                    <p><b>Custom Web Development:</b>Tailored web development services to meet the unique needs of clients, including responsive design, robust functionality, and user-friendly interfaces....</p>

                                    <p><b style={{ color: "#eb4747" }}>Software Development: </b>Full-cycle software development services, including requirements gathering, architecture design, development, testing, deployment, and maintenance for desktop, web, and mobile platforms......</p>

                                    <p><b style={{ color: "#eb4747" }}>Mobile App Development:</b> Creation of native and cross-platform mobile applications for iOS and Android platforms, ensuring seamless performance and user experience.....</p>

                                    <p><b style={{ color: "#eb4747" }}>UI/UX Design:</b> Expert UI/UX design services to enhance user engagement and satisfaction, focusing on intuitive interfaces, attractive visuals, and smooth user experiences across all devices......</p>

                                    <p><b style={{ color: "#eb4747" }}>E-commerce Solutions:</b> Development of secure and scalable e-commerce platforms, incorporating features such as product management, payment gateway integration, order processing, and customer management.......</p>

                                    <p><b style={{ color: "#eb4747" }}>Content Management Systems (CMS):</b> Implementation of CMS solutions like WordPress, Drupal, or custom-built CMS platforms to enable easy content creation, publishing, and management for websites and applications.....</p>

                                    <p><b style={{ color: "#eb4747" }}>Web Application Development:</b> Building dynamic and interactive web applications using modern technologies like JavaScript frameworks (e.g., React, Angular, Vue.js), backend technologies (e.g., Node.js, Django, Flask), and databases (e.g., MongoDB, MySQL, PostgreSQL)....</p>

                                    <p><b style={{ color: "#eb4747" }}>API Development and Integration:</b>  Creation of custom APIs to facilitate seamless communication between different software components or third-party services, enabling data exchange and system integration....</p>

                                    <p><b style={{ color: "#eb4747" }}>Quality Assurance and Testing:</b> Comprehensive testing services, including functional testing, performance testing, security testing, and usability testing, to ensure the reliability, scalability, and security of web and software applications.....</p>

                                    <p><b style={{ color: "#eb4747" }}> Maintenance and Support:</b> Ongoing maintenance, monitoring, and support services to ensure the smooth operation and optimal performance of web applications and software systems, including bug fixes, updates, and security patches.....</p>

                                    <p>By offering these comprehensive services, our company can cater to a wide range of client needs and deliver high-quality solutions that drive business growth and success..</p>

                                </div>
                            </div>
                            <div className='col-lg-4'>&nbsp;</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Blog
