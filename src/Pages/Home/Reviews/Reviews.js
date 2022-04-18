import React from 'react';
import UseUsers from '../../Hooks/useUsers';
import Review from '../../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [users] = UseUsers()
    return (
        <div id='reviews' className="container">
            <h1 className='text-center'>User About Our Products</h1>
            <hr />
            <div className='reviews'>
                {
                    users.map(user => <Review
                        key={user.id}
                        user={user}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;