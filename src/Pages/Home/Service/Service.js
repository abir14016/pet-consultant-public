import React from 'react';
// import { Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const navigate = useNavigate()
    const { image, serviceName, description, price, ratings } = service;
    const handleBookButton = () => {
        navigate("/checkout")
    }
    return (
        <div className="card">
            <img className="card-img-top" src={image} alt="" />
            <div className="card-body">
                <h5 className="card-title">{serviceName}</h5>
                <p className="card-text">{description}</p>
                <h4>Price: {price}$</h4>
                <h5>Ratings: {ratings} star</h5>
            </div>
            <div>
                <button onClick={handleBookButton} className="w-100 py-2 border-0 btn btn-primary">Book Now</button>
            </div>
        </div>
    );
};

export default Service;