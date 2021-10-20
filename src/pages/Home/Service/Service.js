import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'


const Service = (props) => {
    const { id, name, describtion, img } = props.service

    return (
        <div>
            <div className="service">
                <div className="col">
                    <div className="card">
                        <img style={{ width: '100%', height: '200px' }} src={img} className="card-img-top " alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{describtion}</p>

                            <Link to={`/details/${id}`}>
                                <button className="btn btn-info rounded-2"
                                >Details</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;