import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import './SocialLogin.css'

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);


    let errorElement;
    if (googleError || githubError || facebookError) {
        errorElement = <div><p>Error: {googleError?.message} {githubError?.message} {facebookError.message}</p></div>
    }
    let loadingElemrnt;
    if (googleLoading || githubLoading || facebookLoading) {
        loadingElemrnt = <p>Loading...</p>
    }

    const navigate = useNavigate()
    if (googleUser || githubUser || facebookUser) {
        navigate('/checkout')
    }
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{ height: "2px" }} className='bg-secondary w-50'></div>
                <p className='px-2 mt-2'>or</p>
                <div style={{ height: "2px" }} className='bg-secondary w-50'></div>
            </div>
            <p style={{ color: "red" }}>{errorElement}</p>
            <p>{loadingElemrnt}</p>
            <div>
                <h2 className='text-center'>Continiue with</h2>
                <div className='d-flex justify-content-center'>
                    <button onClick={() => signInWithGoogle()} className='social-logo-btn'><img style={{ width: "50px" }} src="images/social-logo/google-logo.png" alt="" /></button>
                    <button onClick={() => signInWithGithub()} className='social-logo-btn mx-3'><img style={{ width: "50px" }} src="images/social-logo/github-logo.png" alt="" /></button>
                    <button onClick={() => signInWithFacebook()} className='social-logo-btn'><img style={{ width: "50px" }} src="images/social-logo/facebook-logo.png" alt="" /></button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;