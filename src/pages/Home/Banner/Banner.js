import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/b1.png'
import banner2 from '../../../images/banner/b2.jpg'
import banner3 from '../../../images/banner/b3.png'

const Banner = () => {
    return (
        <div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="text-black fst-italic fw-bold fs-1">Mission</h3>
                            <p><span className="text-black fst-italic">To become the most trusted premier institution serving the sufferings of humanity and people’s welfare oriented activities.</span></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Third slide"
                        />


                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;