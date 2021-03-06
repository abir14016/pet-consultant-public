import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='services' className='container'>
            <h1 className='text-center my-5'>My services</h1>
            <div className='card-deck services mb-5'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;