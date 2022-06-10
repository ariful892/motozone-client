import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.jpg';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div>
            <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img width={60} height={40} style={{ borderRadius: '8px' }} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-white' as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link className='text-white' href="home#inventory">Inventory</Nav.Link>
                            <Nav.Link className='text-white' href="home#buy">Buy</Nav.Link>
                            <Nav.Link className='text-white' href="home#about">About</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='text-white' as={Link} to='/blogs'>Blogs</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link className='text-white' as={Link} to='/manage'>Manage</Nav.Link>
                                    <Nav.Link className='text-white' as={Link} to='/add'>Add</Nav.Link>
                                    <Nav.Link className='text-white' as={Link} to='/myitems'>MyItems</Nav.Link>
                                </>
                            }

                            {
                                user ?
                                    <button onClick={handleSignOut} className='btn btn-link text-danger text-decoration-none'>Sign out</button>
                                    :
                                    <Nav.Link className='text-white' as={Link} to="/login">
                                        Login
                                    </Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;