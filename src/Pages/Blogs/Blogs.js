import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='py-5 container'>
            <h1 className='text-center text-warning'>My blogs</h1>
            <div className="blogs mt-5">
                <div className='border text-center px-2 py-3 shadow-lg rounded-2'>
                    <h3>Q: What is the ifference between authorization and authentication?</h3>
                    <p>Ans: authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. Authentication verifies who the user is. Authorization does not verify. Authentication is the first step of a good identity and access management process. On the other hand Authorization always takes place after authentication.</p>
                </div>
                <div className='border text-center px-2 py-3 shadow-lg rounded-2'>
                    <h3>Q: Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p>Ans: Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized. As a Google Cloud service, it also gives you access to other Google products and features, like Google Drive and Sheets. For instance, you can import dummy data from Google Sheets and use it temporarily to serve your app.</p>
                    <h3>Other options to imolement Authentications:</h3>
                    <ul>
                        <li>Okta</li>
                        <li>Parse</li>
                        <li>Kuzzle</li>
                        <li>Back4App</li>
                        <li>RxDB</li>
                        <li>Flutter</li>
                    </ul>
                </div>
                <div className='border text-center px-2 py-3 shadow-lg rounded-2'>
                    <h3>What other services does firebase provide other than authentication</h3>
                    <p>Ans: </p>
                    <ul>
                        <li>Hosting</li>
                        <li>Cloud Firestore</li>
                        <li>Cloud Storage</li>
                        <li>Google Analytics.</li>
                        <li>Predictions</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blogs;