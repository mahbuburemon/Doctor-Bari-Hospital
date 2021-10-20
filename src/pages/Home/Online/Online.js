import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Online.css';

const Online = () => {
    const [doctorinfo, setDoctorinfo] = useState([]);

    useEffect(() => {
        fetch('./tool.json')
            .then(res => res.json())
            .then(data => setDoctorinfo(data));
    }, []);

    return (
        <div className="container">
            <h2 className=" header fs-3 fw-bold m-4  shadow-sm">Online Doctor List</h2>

            <div className="online-doc p-4 row row-cols-12 row-cols-md-6 row-cols-lg-3 g-4">

                {
                    doctorinfo.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>



        </div>
    );
};

export default Online;