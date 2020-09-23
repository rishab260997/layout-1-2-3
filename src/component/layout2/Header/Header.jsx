import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';

export default function Header() {
    return (
        <div>

            <Navbar   variant="dark" className="nav">
                <Container>

                    <Navbar.Brand href="#home">Layout 3</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link>About</Nav.Link>
                                    <Nav.Link>Services</Nav.Link>
                                    <Nav.Link>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}