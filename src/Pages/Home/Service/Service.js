import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    const { image, serviceName, description, price, satings } = service;
    return (
        <div>
            <CardGroup>
                <Card className='h-auto'>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{serviceName}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Service;