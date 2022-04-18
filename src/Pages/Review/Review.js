import React from 'react';
import './Review.css'

const Review = (props) => {
    const { name, reviews, picture, ratings, email } = props.user;
    return (
        <div className='p-3 shadow-lg border-1 review'>
            <div className='p-3 d-flex justify-content-center align-items-center user-image'>
                <img src={picture} alt="" />
            </div>
            <div>
                <h3 className='fw-bold text-center'>{name}</h3>
                <p className='text-gray text-center'>Email: {email}</p>
            </div>
            <hr />
            <div>
                <p className='text-center'><span className='font-extrabold text-normal'>review: </span>{reviews}</p>
            </div>
            <div className='ratings'>
                <p className='text-center fw-bold'>Rattings: <span className='text-danger'>{ratings}</span> stars</p>
            </div>
        </div>
    );
};

export default Review;