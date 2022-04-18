import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div class="footer-dark">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 item">
                            <Link className='footer-link' to="/services">Services</Link>
                            <ul>
                                <li>Web Development</li>
                                <li>Development</li>
                                <li>Hosting</li>
                            </ul>
                        </div>
                        <div class="col-md-3 item">
                            <Link className='footer-link' to="/reviews">Reviews</Link>
                            <ul>
                                <li>Company</li>
                                <li>Team</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div class="col-md-3 item">
                            <Link className='footer-link' to="/aboutme">About</Link>
                            <ul>
                                <li>Company</li>
                                <li>Team</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div class="col-md-3 item text">
                            <Link className='footer-link' to="/blogs">Blogs</Link>
                            <p>You can go through my blog at any time you want</p>
                        </div>
                        <div className="icon-container text-center">
                            <a href="https://github.com/abir14016"><img src="images/social-logo/github-logo.png" alt="" /></a>
                            <a href="https://www.facebook.com/mdabir.hassan.543"><img src="images/social-logo/facebook-logo.png" alt="" /></a>
                            <a href="https://twitter.com/abir14016"><img src="images/social-logo/twitter-logo.png" alt="" /></a>
                            <a href="https://www.instagram.com/abir14016/?hl=en"><img src="images/social-logo/instagram-logo.png" alt="" /></a>
                        </div>
                    </div>
                    <p class="copyright">Pet-consultant.com@2022</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;