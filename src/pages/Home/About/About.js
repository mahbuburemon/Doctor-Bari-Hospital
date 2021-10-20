import React from 'react';
import { Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div id="aboutus" className="about">
            <h2 className="p-4 m-3 fw-bold shadow-md">Mission & Vision</h2>


            <div className="row m-2 p-5 ">
                <div className="col-sm-6">

                    <div className="card-body border border-5">
                        <h2 className="card-title text-primary">Vision</h2>

                        <p className="card-text text-start">

                            Vision Dctor Bari Specialized Hospital will Create healthier communities by creatively challenging individuals to be more responsible for their personal health status. Relentlessly pursue unparalleled quality, value, patient, customer and staff satisfaction. Create the national model for integrated health care service deliver. .</p>

                    </div>

                </div>
                <div className="col-sm-6">

                    <div className="card-body border border-5">
                        <h2 className="card-title text-primary">Mission</h2>
                        <p className="card-text text-start">
                            To provide healthcare services in a fiscally responsible manner which contribute to the physical, psychological, social and spiritual well being of the patients and community which it serves.
                            To carry on educational and research activities related to the provision of care to the sick and injured or related to the promotion of health.</p>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default About;