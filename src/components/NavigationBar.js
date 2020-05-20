import React from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import logo from '../logo.svg';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resume from '../assets/Dhvani_D_Patel_Resume.pdf';

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    a, .navbar-brand, .navbar-nav .nav-link .res {
        color: #bbb;
        font-size: 18px;

        &:hover {
            color: white;
        }
    }

    .brand-icons {
        font-size: 25px;
    }


`;

export const NavigationBar = () => {
    return (
        <Styles>
            <Navbar expand="lg">
                <Navbar.Brand href="/">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="DP logo" />{' '}
                    Home
                </Navbar.Brand>
                <NavbarToggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Item className="mx-3">
                            <Nav.Link>
                                <Link to="/about">About Me</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="mx-3">
                            <Nav.Link>
                                <Link to="/experience">Experience</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="mx-3">
                            <Nav.Link>
                                <Link to="/education">Education</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="mx-3">
                            <Nav.Link>
                                <Link to="/skills">Skills</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="mx-3">
                            <Nav.Link>
                                <Link to="/projects">Projects</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="mx-3">
                            <Nav.Link>
                                <Link to="/courses">Courses</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="mx-3">
                            <Nav.Link>
                                <Link to="/contact">Contact Me</Link>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Item className="mx-3">
                        <a href={resume} rel="noopener noreferrer" target="_blank" className="res">Resume </a>
                        </Nav.Item>
                        <Nav.Item className="mx-3">
                            <a href="https://www.linkedin.com/in/dhvani-patel/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="brand-icons" icon={faLinkedin}/></a>
                        </Nav.Item>
                        <Nav.Item className="mx-3">
                            <a href="https://github.com/dhvani-d-patel" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="brand-icons" icon={faGithubSquare}/></a>
                        </Nav.Item>
                        <Nav.Item className="mx-3">
                            <a href="https://www.facebook.com/DhvaniP7" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="brand-icons" icon={faFacebookSquare}/></a>
                        </Nav.Item>
                        <Nav.Item className="mx-3">
                            <a href="https://www.instagram.com/dhvanyp7/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="brand-icons" icon={faInstagramSquare}/></a>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    );
}