

import { useState } from "react";
import Alert from 'react-bootstrap/Alert'
import "./enq.css";



function Enqiry() {
    const [Msg, setMsg] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Subject, setSubject] = useState("");
    const [Message, setMessage] = useState("");
    const [Variant, setVariant] = useState("");

    function Submitform(e) {
        e.preventDefault();


        if (FirstName === '') {
            setVariant('danger');
            setMsg("First name is required");
        }
        if (LastName === '') {
            setVariant('danger');
            setMsg("Last name is required");
        }
        if (Subject === '') {
            setVariant('danger');
            setMsg("Subject is required");
        }
        if (Message === '') {
            setVariant('danger');
            setMsg("Message is required");

        }
        if (FirstName !== '' && LastName !== '' && Subject !== '' && Message !== '') {
            setVariant('success');
            setMsg("Submitted Successfully.");
        }

    }


    return (
        <>
            <div class="container-fluid">
                <div class="container">
                    <div class="row">
                        <div class="row">
                            <div class="col-lg-3"></div>
                            <div class="col-lg-6 img-card-q">
                                <h2 style={{ color: '#fff' }}>Contact Us</h2>
                            </div>
                            <div class="col-lg-3"></div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4"></div>
                            <div class="col-lg-6 img-card-q">
                                <span></span>
                            </div>
                            <div class="col-lg-3"></div>
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-lg-4">
                            <div class="contact-sec">

                                <h3> <i class="fa fa-envelope-o"></i> Email Us</h3>
                                <p>contact@realthingtechnology.com</p>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="contact-sec">

                                <h3><i class="fa fa-volume-control-phone"></i> Call Us</h3>
                                <p>+91 6299171117</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="contact-sec">

                                <h3><i class="fa fa-podcast"></i> Our Address</h3>
                                <p>Sector-C Near Piplani petrol Pump</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="contact">
                                    <form id="contactform" onSubmit={Submitform}>
                                        <div class="row" style={{ marginTop: '10px' }}>
                                            <div class="col-6" >
                                                <input type="text" class="form-control" placeholder="First name" onChange={(e) => { setFirstName(e.target.value) }} />
                                            </div>
                                            <div className="col-6">
                                                <input type="text" class="form-control" placeholder="Last name" onChange={(e) => { setLastName(e.target.value) }} />
                                            </div>
                                            <div className="col-12" style={{ marginTop: '20px' }}>
                                                <input type="text" class="form-control" placeholder="Subject" onChange={(e) => { setSubject(e.target.value) }} />
                                            </div>

                                        </div>
                                        <div class="form-group" style={{ marginTop: '20px' }}>
                                            <textarea class="form-control" placeholder="Message" rows="3" onChange={(e) => { setMessage(e.target.value) }} ></textarea>
                                        </div>
                                        {Msg !== '' ?
                                            <Alert variant={Variant} style={{ marginTop: '10px' }}>
                                                {Msg}
                                            </Alert> : ''}
                                        <button className="btn btn-info" style={{ marginTop: '10px' }}>Send Message</button>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <iframe  className="map_location" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15608.171800381682!2d77.47311894322259!3d23.24097234931451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710074460710!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} title="..." allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Enqiry;
