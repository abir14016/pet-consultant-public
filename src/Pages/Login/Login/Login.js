import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //get data from email field
    const handleEmailField = event => {
        setEmail(event.target.value);
    }
    //get data from password field
    const handlePasswordField = event => {
        setPassword(event.target.value);
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSignInUser = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }


    return (
        <div>
            <div className='w-50 mx-auto form-container'>
                <h2 className='text-center text-primary'>Please Log in</h2>
                <Form onSubmit={handleSignInUser}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailField} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordField} type="password" placeholder="Password" required />
                    </Form.Group>
                    {
                        user && <p style={{ color: "green" }}>Log in successful</p>
                    }
                    {
                        error && <p>{error.message}</p>
                    }
                    {
                        loading && <p>Loading...</p>
                    }
                    <p>Don't have an account? <span className='text-danger'><Link className='register-link' to="/register">Please Register</Link></span></p>
                    <Button variant="primary" type="submit">
                        Log in
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;