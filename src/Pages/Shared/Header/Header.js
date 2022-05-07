import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.jpg';

const Header = () => {
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
                            <Nav.Link className='text-warning' as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link className='text-warning' href="home#courses">Courses</Nav.Link>
                            <Nav.Link className='text-warning' href="home#speciality">Speciality</Nav.Link>
                            <Nav.Link className='text-warning' as={Link} to='/advanced'>Advanced</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='text-warning' as={Link} to='/blogs'>Blogs</Nav.Link>
                            <Nav.Link className='text-warning' as={Link} to='/about'>About</Nav.Link>

                            <Nav.Link className='text-warning' as={Link} to="/login">
                                Login
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;