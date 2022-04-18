import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const location = useLocation()
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/'

    if (user) {
        navigate(from, { replace: true })
    }

    //get data from email field
    const handleEmailField = event => {
        setEmail(event.target.value);
    }
    //get data from password field
    const handlePasswordField = event => {
        setPassword(event.target.value);
    }


    const handleSignInUser = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth)
    const handleResetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email)
            toast("email sent")
        }
        else {
            toast("Plz enter your email address")
        }
    }

    return (
        <div>
            <h1 className='text-center pt-5 text-primary'>WELCOME TO LOGIN PAGE</h1>
            <div className='mx-auto form-container'>
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
                        error && <p style={{ color: "red" }}>{error.message}</p>
                    }
                    {
                        loading && <p>Loading...</p>
                    }
                    <Button variant="primary" type="submit">
                        Log in
                    </Button>
                    <p>Don't have an account? <span className='text-danger'><Link className='register-link' to="/register">Please Register</Link></span></p>
                    <p>Forgot Password? <span className='text-danger'><button onClick={handleResetPassword} className='reset-button text-primary'>Reset Password</button></span></p>
                </Form>
                <SocialLogin></SocialLogin>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;