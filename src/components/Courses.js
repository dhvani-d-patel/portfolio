import React from 'react';
import {Jumbotron} from './Jumbotron';
import { Layout } from './Layout';
import { Card, Button, Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';

const coursesStyle = {borderStyle: "groove", padding: "2%", fontFamily: ['Roboto', 'sans-serif'], color: '#222'};

function renderTooltip(props) {
    return (
        <Tooltip {...props}>{props.text}</Tooltip>
    );
}
export const Courses = () => {
    return (
        <React.Fragment>
            <Jumbotron />
            <Layout className="inner-background">
                <h2 className="inner-heading">Courses</h2>
                <br />
                <div style={coursesStyle}>
                    <Container>
                        <Row>
                            <Col md={4}>
                                <OverlayTrigger placement="left" delay={{show: 250, hide: 400}} overlay={renderTooltip({text:'Data Structures'})} >
                                    <Card style={{ width: '18em', height: "7.7em" }}>
                                        <Card.Body>
                                            <Card.Title>Computational Problem Solving</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Fall 2017</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                </OverlayTrigger>
                            </Col>
                            <Col md={4}>
                                <OverlayTrigger placement="top" delay={{show: 250, hide: 400}} overlay={renderTooltip({text:'Object Oriented Programming'})} >
                                    <Card style={{ width: '18em', height: "7.7em"}}>
                                        <Card.Body>
                                            <Card.Title>Advanced Object Oriented Programming</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Fall 2017</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                </OverlayTrigger>
                            </Col>
                            <Col md={4}>
                                <OverlayTrigger placement="top" delay={{show: 250, hide: 400}} overlay={renderTooltip({text:'Programming'})} >
                                    <Card style={{ width: '18em', height: "7.7em" }}>
                                        <Card.Body>
                                            <Card.Title>Foundations of Computer Science Theory</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Fall 2017</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                </OverlayTrigger>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col md={4}>
                                <OverlayTrigger placement="right" delay={{show: 250, hide: 400}} overlay={renderTooltip({text:'Graphics'})} >
                                    <Card style={{ width: '18em', height: "7.7em" }}>
                                        <Card.Body>
                                            <Card.Title>Foundations of Computer Graphics</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Spring 2018</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                </OverlayTrigger>
                            </Col>
                            <Col md={4}>
                                <OverlayTrigger placement="left" delay={{show: 250, hide: 400}} overlay={renderTooltip({text:'Intelligent Systems'})} >
                                    <Card style={{ width: '18em', height: "7.7em" }}>
                                        <Card.Body>
                                            <Card.Title>Foundations of Computer Vision</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Spring 2018</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                </OverlayTrigger>
                            </Col>
                            <Col md={4}>
                                <OverlayTrigger placement="top" delay={{show: 250, hide: 400}} overlay={renderTooltip({text:'Programming'})} >
                                    <Card style={{ width: '18em', height: "7.7em" }}>
                                        <Card.Body>
                                            <Card.Title>Foundations of Algorithms</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Spring 2018</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                </OverlayTrigger>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col md={4}>
                                <OverlayTrigger placement="top" delay={{show: 250, hide: 400}} overlay={renderTooltip({text:'Intelligent Systems'})} >
                                    <Card style={{ width: '18em', height: "7.7em" }}>
                                        <Card.Body>
                                            <Card.Title>Foundations of Intelligent Systems</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Fall 2018</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                </OverlayTrigger>
                            </Col>
                            <Col md={4}>
                                <OverlayTrigger placement="right" delay={{show: 250, hide: 400}} overlay={renderTooltip({text:'Graphics'})} >
                                    <Card style={{ width: '18em', height: "7.7em"}}>
                                        <Card.Body>
                                            <Card.Title>Computational Geometry</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Fall 2018</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                </OverlayTrigger>
                            </Col>
                            <Col md={4}>
                                <OverlayTrigger placement="left" delay={{show: 250, hide: 400}} overlay={renderTooltip({text:'Data'})} >
                                    <Card style={{ width: '18em', height: "7.7em" }}>
                                        <Card.Body>
                                            <Card.Title>Introduction to Big Data</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Spring 2019</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                </OverlayTrigger>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col md={4}>
                                <OverlayTrigger placement="top" delay={{show: 250, hide: 400}} overlay={renderTooltip({text:'Theory'})} >
                                    <Card style={{ width: '18em', height: "7.7em" }}>
                                        <Card.Body>
                                            <Card.Title>Foundations of Cryptography</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Spring 2019</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                </OverlayTrigger>
                            </Col>
                            <Col md={4}>
                                <OverlayTrigger placement="top" delay={{show: 250, hide: 400}} overlay={renderTooltip({text:'Intelligent Systems'})} >
                                    <Card style={{ width: '18em', height: "7.7em" }}>
                                        <Card.Body>
                                            <Card.Title>Advanced Computer Vision</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Spring 2019</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                </OverlayTrigger>
                            </Col>
                            <Col md={4}>
                                <OverlayTrigger placement="right" delay={{show: 250, hide: 400}} overlay={renderTooltip({text:'Data'})} >
                                    <Card style={{ width: '18em', height: '7.7em'}}>
                                        <Card.Body>
                                            <Card.Title>Big Data Analytics</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Spring 2020</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                </OverlayTrigger>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Layout>
            
        </React.Fragment>
    )
}