import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'


const Footer = () => {
    const element1 = <FontAwesomeIcon icon={faEnvelope} />
    const element2 = <FontAwesomeIcon icon={faMobile} />
    const element3 = <FontAwesomeIcon icon={faLocationArrow} />
    return (
        <>
            <div className="footer-all " collapseOnSelect expand="lg" >
                <div className=" footer bg-info p-5" >
                    <div className="row ">
                        <div className="col-md-4">
                            <h2 className="footer-head fs-3">Doctor Bari</h2>
                            <div className="footer-p text-center">
                                <p >To provide healthcare services in a fiscally responsible manner which contribute to the physical, psychological, social and spiritual well being of the patients and community which it serves.</p>
                            </div>

                        </div>

                        <div className="col-md-4">
                            <h2 className="footer-head fs-3">About Doctor-Bari</h2>

                            <div className="footer-p">
                                <ul>
                                    <li>About Us</li>
                                    <li>Our Team</li>
                                    <li>Careers </li>
                                    <li>Services </li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <h2 className="footer-head fs-3">Contact Info</h2>
                            <div className="footer-p  text-start">
                                <p><span className="contact-info">{element1} </span> mahbuburemon60@gmail.com</p>
                                <p> <span className="contact-info">{element2} </span> 01516762425</p>
                                <p> <span className="contact-info">{element3} </span> S/K Mannan road,Tongi-Gazipur</p>
                                <p></p>
                            </div>
                        </div>
                        <div>
                            <hr />
                            <h6 className="mt-3 p-2 text-center text-secondary ">Copyright © 2021 Mahbubur Rahman. All Rights Reserved.</h6>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Footer;