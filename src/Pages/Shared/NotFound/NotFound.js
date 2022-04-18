import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'


const NotFound = () => {
    return (
        <div className='not-found'>
            <div className='text-center'><img src="images/notFound-image/404.png" alt="" /></div>
            <div className='text-center'>
                <Link to="/" className='btn btn-danger btn-link text-white text-decoration-none py-3 px-3 fw-bolder'>Back to home</Link>
            </div>
        </div>
    );
};

export default NotFound;