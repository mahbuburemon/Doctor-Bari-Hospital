import React from 'react';
import './Doctor.css'

const Doctor = (props) => {
    const { Name, img, Qualifications, Designation, Specialty, fee } = props.doctor;
    return (
        <div>
            <div className="doctor">
                <div className="col">
                    <div className="card" >
                        <img style={{ width: '300px', height: '300px' }} src={img} className="card-img-top p-3" alt="..." />
                        <div className="card-body">
                            <h5 className="card-name">Name:{Name}</h5>
                            <p><span>Qualifications:</span>{Qualifications}</p>
                            <p><span> Designation:</span>{Designation}</p>
                            <p><span> Specialty:</span>{Specialty}</p>
                            <p><span> Fee:</span>{fee}</p>
                            <button className="btn add-btn">Appointment</button>



                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Doctor;