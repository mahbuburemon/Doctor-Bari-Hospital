import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Details.css'


const Details = () => {
    let { serviceId } = useParams();
    const [servicesDetails, setServicesDetails] = useState([]);
    const [singleService, setSingleService] = useState({});
    // dataload
    useEffect(() => {
        fetch('/servicesDetails.json')
            .then(res => res.json())
            .then(data => setServicesDetails(data.services))

    }, [])
    // data call
    useEffect(() => {

        const foundService = servicesDetails.find(serviceinfo => serviceinfo.id === serviceId)
        setSingleService(foundService)
    }, [servicesDetails])
    return (
        <div className="servicesDetails">
            <h2 className="p-3 m-4 text-success ">Detailes About:{singleService?.name}</h2>

            <Container>
                <Row >

                    <div className=" serviceinfo row border border-success border-5 p-5 m-3 justify-content-center ">
                        <div className="col-md-4">
                            <img className="p-2" style={{ width: '300px', height: '300px' }} src={singleService?.picture?.thumbnail} alt="" />
                        </div>
                        <div className="col-md-4 fs-4 text-center">
                            <p >Email: {singleService?.email}</p>
                            <p >Phone: {singleService?.phone}</p>
                            <p >{singleService?.discribtion}</p>
                            <button className="p-2 m-5 bg-danger border-danger border-5 fs-5 rounded-2 fw-bold">Click Here</button>
                        </div>




                    </div>

                </Row>
            </Container>
        </div>
    );
};

export default Details;