import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const CheckOut = () => {
    const [user] = useAuthState(auth)
    const handleCheckOutBtn = () => {
        alert("Currently I'm not providing any services.")
    }
    return (
        <div className='py-5'>
            <h1 className='text-center text-success'>Welcome to Checkout</h1>
            <div className='mx-auto form-container'>
                <h1 className='text-center text-primary'>Please Checkout</h1>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={user?.email} type="email" readOnly />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Your Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Address" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Your Phone</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Phone Number" required />
                    </Form.Group>

                    <div className="text-center">
                        <Button onClick={handleCheckOutBtn} variant="primary" type="submit">
                            Checkout
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default CheckOut;