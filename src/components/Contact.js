import React from 'react';
import {Jumbotron} from './Jumbotron';
import { Layout } from './Layout';
import { Container, Row, Col } from 'react-bootstrap';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const contactStyle = {borderStyle: "groove", padding: "2%", fontSize: "25px"}
const emailStyle = {color: "#222"}

export const Contact = () => {
    return (
        <React.Fragment>
            <Jumbotron />
            <Layout className="inner-background">
                <h2 className="inner-heading">Contact Me</h2>
                <br />
                <div className="inner-content">
                    <Container style={contactStyle} >
                        <Row>
                            <Col md={3}></Col>
                            <Col md={3}>
                                <p>Cell Phone <FontAwesomeIcon icon={faPhoneSquareAlt} color="#789e59"/></p>
                            </Col>  
                            <Col md={3}>
                                <a href="facetime:5856294285" style={emailStyle}>+1-585-629-4285</a>
                            </Col>
                            <Col md={3}></Col>
                        </Row>
                        <Row>
                            <Col md={3}></Col>
                            <Col md={3}>
                                <p>Primary Email <FontAwesomeIcon icon={faEnvelope} color="#57759c"/></p>
                            </Col>  
                            <Col md={3}>
                                <a href="dhvani.patel@mail.rit.edu" style={emailStyle}>dhvani.patel@mail.rit.edu</a>
                            </Col>
                            <Col md={3}></Col>
                        </Row>
                        <Row>
                            <Col md={3}></Col>
                            <Col md={3}>
                                <p>Secondary Email <FontAwesomeIcon icon={faEnvelope} color="#57759c"/></p>
                            </Col>  
                            <Col md={3}>
                            <a href="dhvani.patel@mail.rit.edu" style={emailStyle}>dhvanypatel7@gmail.com</a>
                            </Col>
                            <Col md={3}></Col>
                        </Row>
                    </Container>
                </div>
            </Layout>
            
        </React.Fragment>
    )
}