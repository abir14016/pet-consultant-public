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
                    <h1>First slide label</h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="images/banner/banner-2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption className='text-black fw-bold'>
                    <h1>Second slide label</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="images/banner/banner-3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption className='text-black fw-bold'>
                    <h1>Third slide label</h1>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;