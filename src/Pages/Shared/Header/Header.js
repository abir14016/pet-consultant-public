import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)
    // console.log(user)
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
    }
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img className='brand-logo' src="images/logo/logo.png" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>
                        <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user ?
                                <button className='log-out-button' onClick={handleSignOut}>Log Out</button> :
                                <Nav.Link as={Link} to="/login">Log in</Nav.Link>
                        }
                        <Nav.Link as={Link} to="/aboutme">About me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;