import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

class Navigation extends React.Component {

    render() {
        return (
            <>
                <Navbar sticky="top" bg="white" expand="lg">
                    <Navbar.Brand href="/index">SUMMARY</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/resume">WORK</Nav.Link>
                            <Nav.Link href="/projects">PROJECTS</Nav.Link>
                            <Nav.Link href="/contact">CONTACT</Nav.Link>
                            <NavDropdown title="More">
                                <NavDropdown.Item href="#download-resume">Download Resume</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}

export default Navigation;