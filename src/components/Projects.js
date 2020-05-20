import React from 'react';
import {Jumbotron} from './Jumbotron';
import { Layout } from './Layout';
import { Card, Button, Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const projectsStyle = {borderStyle: "groove", padding: "2%", fontFamily: ['Roboto', 'sans-serif'], color: '#222'};

function renderTooltip(props) {
    return (
        <Tooltip {...props}>{props.text}</Tooltip>
    );
}
export const Projects = () => {
    return (
        <React.Fragment>
            <Jumbotron />
            <Layout className="inner-background">
                <h2 className="inner-heading">Projects</h2>
                <br />
                <div style={projectsStyle}>
                    <Container>
                        <Row>
                            <Col md={4}>
                                <OverlayTrigger placement="left" delay={{show: 250, hide: 400}} overlay={renderTooltip({text: 'Distributed Systems'})} >
                                    <Card style={{ width: '21rem', height: "22.75em" }}>
                                        <Card.Body>
                                            <Card.Title>Publisher-Subscriber System</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Tech: Java | Socket Programming | Docker | Git</Card.Subtitle>
                                            <Card.Text style={{textAlign: "justify"}}>
                                                Developed a system similar to Youtube using publisher-subscriber model by implementing topic creation, 
                                                content publication and topic subscription. Implemented and performed testing on Docker by creating a 
                                                docker image and multiple containers.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button variant="success" href="https://github.com/dhvani-d-patel/Publisher-Subscriber-System" target="_blank" rel="noopener noreferrer">Project Code <FontAwesomeIcon icon={faFileCode} /> </Button>&nbsp; &nbsp;
                                            <Button variant="primary" disabled href="" target="_blank" rel="noopener noreferrer">Project Demo <FontAwesomeIcon icon={faDesktop} /></Button>
                                        </Card.Footer>
                                    </Card>
                                </OverlayTrigger>
                            </Col>
                            <Col md={4}>
                                <OverlayTrigger placement="top" delay={{show: 250, hide: 400}} overlay={renderTooltip({text:'Computer Vision, Deep Learning'})} >
                                    <Card style={{ width: '21rem', height: "22.75em" }}>
                                        <Card.Body>
                                            <Card.Title>Emotion and Gender Detection</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Tech: Python | OpenCV | Computer Vision | CNN | Keras | Tensorflow</Card.Subtitle>
                                            <Card.Text style={{textAlign: "justify"}}>
                                                Developed an application to detect faces in live video and gather the details about the detected human 
                                                such as gender (male, female) and emotion(happy, angry, sad, neutral, surprised, fear). The accuracy achieved for the model was 68.47%.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button variant="success" href="https://github.com/dhvani-d-patel/Age-Gender-Detection" target="_blank" rel="noopener noreferrer">Project Code <FontAwesomeIcon icon={faFileCode} /> </Button>&nbsp; &nbsp;
                                            <Button variant="primary" disabled href="" target="_blank" rel="noopener noreferrer">Project Demo <FontAwesomeIcon icon={faDesktop} /></Button>
                                        </Card.Footer>
                                    </Card>
                                </OverlayTrigger>
                            </Col>
                            <Col md={4}>
                                <OverlayTrigger placement="right" delay={{show: 250, hide: 400}} overlay={renderTooltip({text:'Computer Vision, NLP, Deep Learning'})} >
                                    <Card style={{ width: '21rem', height: "22.75em" }}>
                                        <Card.Body>
                                            <Card.Title>Image Captioning using Deep Learning</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Tech: Python | OpenCV | NLP | CNN | RNN | Keras | Tensorflow</Card.Subtitle>
                                            <Card.Text style={{textAlign: "justify"}}>
                                            Developed an application which generates descriptions of the given image using encoder-decoder architecture
                                             for the neural network using visual attention.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button variant="success" href="https://github.com/dhvani-d-patel/Image-Captioning-Using-Deep-Learning" target="_blank" rel="noopener noreferrer">Project Code <FontAwesomeIcon icon={faFileCode} /> </Button>&nbsp; &nbsp;
                                            <Button variant="primary" disabled href="" target="_blank" rel="noopener noreferrer">Project Demo <FontAwesomeIcon icon={faDesktop} /></Button>
                                        </Card.Footer>
                                    </Card>
                                </OverlayTrigger>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col md={4}>
                                <OverlayTrigger placement="left" delay={{show: 250, hide: 400}} overlay={renderTooltip({text:'Web Development'})} >
                                    <Card style={{ width: '21rem', height: "22.75em" }}>
                                        <Card.Body>
                                            <Card.Title>ToDo List Application</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Tech: HTML | CSS | Bootstrap | React</Card.Subtitle>
                                            <Card.Text style={{textAlign: "justify"}}>
                                                Designed and developed a web application that performs basic CRUD operations for tasks in a ToDo List.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button variant="success" href="https://github.com/dhvani-d-patel/ToDo-List---Web-App" target="_blank" rel="noopener noreferrer">Project Code <FontAwesomeIcon icon={faFileCode} /> </Button>&nbsp; &nbsp;
                                            <Button variant="primary" href="https://dhvani-d-patel.github.io/ToDo-List---Web-App/" target="_blank" rel="noopener noreferrer">Project Demo <FontAwesomeIcon icon={faDesktop} /></Button>
                                        </Card.Footer>
                                    </Card>
                                </OverlayTrigger>
                            </Col>
                            <Col md={4}>
                                <OverlayTrigger placement="right" delay={{show: 250, hide: 400}} overlay={renderTooltip({text:'Web Development'})} >
                                    <Card style={{ width: '21rem', height: "22.75em" }}>
                                        <Card.Body>
                                            <Card.Title>MovieTime - A Cloned Movie App</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Tech: HTML | CSS | MERN stack - MongoDB, Express, React, Node.js</Card.Subtitle>
                                            <Card.Text style={{textAlign: "justify"}}>
                                                Designed and developed a movie application that creates a profile for users who can browse through different 
                                                movies and add their favorite movies on a list. Implemented REST API's to facilitate all the database 
                                                functionalities for the website.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button variant="success" disabled href="" target="_blank" rel="noopener noreferrer">Project Code <FontAwesomeIcon icon={faFileCode} /> </Button>&nbsp; &nbsp;
                                            <Button variant="primary" disabled href="" target="_blank" rel="noopener noreferrer">Project Demo <FontAwesomeIcon icon={faDesktop} /></Button>
                                        </Card.Footer>
                                    </Card>
                                </OverlayTrigger>
                            </Col>
                            <Col md={4}>
                                <OverlayTrigger placement="top" delay={{show: 250, hide: 400}} overlay={renderTooltip({text:'Computer Graphics'})} >
                                    <Card style={{ width: '21rem', height: "22.75em" }}>
                                        <Card.Body>
                                            <Card.Title>3D Still Life Scene with Moving Objects</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Tech: C++ | OpenGL | GLSL | Blender</Card.Subtitle>
                                            <Card.Text style={{textAlign: "justify"}}>
                                            Recreated a 3D scene from a photograph using 3D transformations, depth eects, shaders and textures 
                                            to replicate the photograph scenario.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button variant="success" disabled href="" target="_blank" rel="noopener noreferrer">Project Code <FontAwesomeIcon icon={faFileCode} /> </Button>&nbsp; &nbsp;
                                            <Button variant="primary" disabled href="" target="_blank" rel="noopener noreferrer">Project Demo <FontAwesomeIcon icon={faDesktop} /></Button>
                                        </Card.Footer>
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