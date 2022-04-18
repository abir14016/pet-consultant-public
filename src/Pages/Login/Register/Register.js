import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css'
import SocialLogin from '../Login/SocialLogin/SocialLogin';

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const [
        createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    //get data from name field
    const handleNameField = event => {
        setName(event.target.value);
    }
    //get data from email field
    const handleEmailField = event => {
        setEmail(event.target.value);
    }
    //get data from password field
    const handlePasswordField = event => {
        setPassword(event.target.value);
    }
    //get data from confirm password field
    const handleConfirmPasswordField = event => {
        setConfirmPassword(event.target.value);
    }

    const location = useLocation()
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/'
    if (user) {
        navigate(from, { replace: true })
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password.length < 6) {
            setError("plz provide a password more than 5 character")
            return;
        }
        if (password !== confirmPassword) {
            setError("Two password didn't match!")
            return;
        }
        createUserWithEmailAndPassword(email, password)
        if (name) {
            setError('');
        }
    }
    return (
        <div>
            <h1 className='text-center pt-5 text-primary'>WELCOME TO REGISTRATION PAGE</h1>
            <div className='mx-auto form-container'>
                <h2 className='text-center text-primary'>Please Register</h2>
                <Form onSubmit={handleCreateUser}>
                    <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control onBlur={handleNameField} type="text" placeholder="Enter Your Name" required />
                    </Form.Group>

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
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onBlur={handleConfirmPasswordField} type="password" placeholder="Confirm Password" required />
                    </Form.Group>

                    {
                        error && <p style={{ color: "red" }}>{error}</p>
                    }

                    {
                        user && <p style={{ color: "green" }}>Registration Successfull</p>
                    }

                    {
                        loading && <p>Loading...</p>
                    }
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                    <p>Already Registered? <span className='text-danger'><Link className='register-link' to="/login">Please Log in</Link></span></p>
                    <SocialLogin></SocialLogin>
                </Form>
            </div>
        </div>
    );
};

export default Register;