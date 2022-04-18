import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='my-5'>
            <h1 className='text-center text-warning mb-5'>About Me</h1>
            <div className='text-center'>
                <img className='abir-image' src="images/me/abir.jpg" alt="" />
                <h2>Abir Hasan</h2>
                <p className='fw-bloder text-muted'>Full Stack Web Developer</p>
                <p><small className='text-muted'>email: abir14016@gmail.com</small></p>
            </div>
            <hr />
            <div className='container'>
                <p>About Me: This is Abir Hasan, A full Stack Web developer. Currently i'm graguating in Conputer Science And Enginnering of Islamic University. Iam very musch interested in computer programming and web development. I also familiar with robotics and machine learning. Everyday i am learning and gathering knoledge in the sector of Computer Science. I am skilled in some programming languages and some cripting languages that is given at the bellow part of this page</p>
            </div>
            <div className='text-center skills'>
                <h3>My Skills:</h3>
                <div>
                    <img src="images/skills/c.png" alt="" />
                    <img src="images/skills/c++.png" alt="" />
                    <img src="images/skills/javascript.png" alt="" />
                    <img src="images/skills/python.png" alt="" />
                    <img src="images/skills/bootstrap.png" alt="" />
                    <img src="images/skills/tailwind.png" alt="" />
                </div>
                <div>
                    <img src="images/skills/firebase.png" alt="" />
                    <img src="images/skills/html.png" alt="" />
                    <img src="images/skills/css.png" alt="" />
                    <img src="images/skills/react.png" alt="" />
                </div>
            </div>
            <hr />
            <div className='text-center mt-5'>
                <h3>My Goals: </h3>
                <ul>
                    <li>Becaome a brilliant React developer</li>
                    <li>I want to mastering in javascript</li>
                    <li>My ambition is to get a job as a web developr</li>
                </ul>
            </div>
        </div>
    );
};

export default About;