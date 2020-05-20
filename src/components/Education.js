import React from 'react';
import {Jumbotron} from './Jumbotron';
import { Layout } from './Layout';
import { Row, Col, Container } from 'react-bootstrap';

const educationStyle = {borderStyle: "groove", padding: "2%"}
export const Education = () => {
    return (
        <React.Fragment>
            <Jumbotron />
            <Layout className="inner-background">
                <h2 className="inner-heading">Education</h2>
                <br />
                <Container style={educationStyle}>
                    <Row>
                        <Col md={4}>
                            <span>August 2017 - May 2020</span>
                        </Col>
                        <Col md={8}>
                            <h4 style={{margin: "auto"}}>Rochester Institute of Technology</h4>
                            <p>Master of Science - Computer Science<br /> Rochester, New York</p>
                            <p>GPA: 3.18</p>
                        </Col>
                    </Row>
                </Container>
                <Container style={educationStyle}>
                    <Row>
                        <Col md={4}>
                            <span>June 2013 - May 2017</span>
                        </Col>
                        <Col md={8}>
                            <h4 style={{margin: "auto"}}>University of Mumbai</h4>
                            <p>Bachelor of Engineering - Computer Science and Engineering <br /> Mumbai, India</p>
                            <p>GPA: 6.98</p>
                        </Col>
                    </Row>
                </Container>
            </Layout>
            
        </React.Fragment>
    )
}