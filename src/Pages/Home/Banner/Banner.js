import React from 'react';
import { Carousel } from 'react-bootstrap';
// import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="images/banner/banner-1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className='text-black fw-bold'>
                    <h1>Doctor Of Dogs</h1>
                    <p>You can come to me to cure any deaseses of your dogs.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="images/banner/banner-2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption className='text-black fw-bold'>
                    <h1>Doctor Of Cats</h1>
                    <p>You can come to me to cure any deaseses of your cats.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="images/banner/banner-3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption className='text-black fw-bold'>
                    <h1>Doctor Of Pets</h1>
                    <p>You can come to me to cure any deaseses of your pets.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;