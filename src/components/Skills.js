import React from 'react';
import {Jumbotron} from './Jumbotron';
import { Layout } from './Layout';
import { Card, Button, Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';

const projectsStyle = {borderStyle: "groove", padding: "2%"}

function renderTooltip(props) {
    return (
        <Tooltip {...props}>{props.text}</Tooltip>
    );
}
export const Skills = () => {
    return (
        <React.Fragment>
            <Jumbotron />
            <Layout className="inner-background">
                <h2 className="inner-heading">Skills</h2>
                <br />
                <div className="inner-content" style={projectsStyle}>
                    <Container>
                        <Row>
                            <Col md={4}>
                                <Card style={{ width: '21rem' }}>
                                    <Card.Body>
                                        <Card.Title>Programming Languages</Card.Title>
                                        <Card.Text>
                                        Python | Java | C++ | JavaScript | SQL
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card style={{ width: '21rem' }}>
                                    <Card.Body>
                                        <Card.Title>Databases</Card.Title>
                                        <Card.Text>
                                        MySQL | MongoDB | R | Weka | MS Excel
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card style={{ width: '21rem' }}>
                                    <Card.Body>
                                    <Card.Title>Operating Systems</Card.Title>
                                        <Card.Text>
                                        MacOS | Linux (Ubuntu) | Windows
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                        <Col md={4}>
                                <Card style={{ width: '21rem' }}>
                                    <Card.Body>
                                        <Card.Title>Web Development</Card.Title>
                                        <Card.Text>
                                        HTML | CSS | ReactJS | NodeJS | Bootstrap | Express | MERN stack 
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card style={{ width: '21rem' }}>
                                    <Card.Body>
                                        <Card.Title>Frameworks &amp; Libraries</Card.Title>
                                        <Card.Text>
                                        OpenCV | Keras | Tensorflow | Pandas | Numpy | OpenGL | Scikit-learn
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card style={{ width: '21rem' }}>
                                    <Card.Body>
                                    <Card.Title>Others</Card.Title>
                                        <Card.Text>
                                        GIT | JIRA | Azure Cloud Services | AWS | Agile Methology
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Layout>
            
        </React.Fragment>
    )
}