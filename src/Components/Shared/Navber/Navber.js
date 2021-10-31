import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import "./Navber.css";
const Navber = () => {
    const { user, handleLogout } = useAuth();
    return (
        <div>
            <Navbar bg="primary" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="text-white fs-2 fw-bold">Dream Tour</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="nav-item" to="/home"> Home</NavLink>
                            <NavLink className="nav-item" to="/service">Service</NavLink>
                            <NavLink className="nav-item" to="/myBooking">My Booking</NavLink>
                            <NavLink className="nav-item" to="/allBooking">All Booking</NavLink>
                            <NavLink className="nav-item" to="/addtour">Add Tour</NavLink>
                            <NavLink className="nav-item" to="/contact">Contact</NavLink>
                            {user.email ? <div>
                                <button onClick={handleLogout} className="btn btn-info text-white me-2">Login out</button> 
                                <span>{user?.displayName}</span>
                            </div>
                                : <NavLink className="nav-item" to="/login">Login</NavLink>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navber;