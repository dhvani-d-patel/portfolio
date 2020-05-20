import React from 'react';
import {Jumbotron} from './Jumbotron';
import { Layout } from './Layout';
import { Row, Col, Container } from 'react-bootstrap';

const experienceStyle = {borderStyle: "groove", padding: "2%"}
export const Experience = () => {
    return (
        <React.Fragment>
            <Jumbotron />
            <Layout className="inner-background">
                <h2 className="inner-heading">Experience</h2>
                <br />
                <Container style={experienceStyle}>
                    <Row>
                        <Col md={4}>
                            <span>June 2019 - December 2019</span>
                        </Col>
                        <Col md={8}>
                            <h4 style={{margin: "auto"}}>Retail Business Services, Ahold USA</h4>
                            <p>Software Engineer Intern <br /> Quincy, Massachusetts</p>
                            <p style={{fontWeight: "bold"}}>Technologies Used: Python | OpenCV | Keras | Tensorflow | 
                                CNN | MQTT | MongoDB | Azure Machine Learning Services | Git | DVC</p>
                            <ul style={{paddingLeft: "1.2em"}}>
                                <li>Worked with the <span style={{fontWeight: "bold"}}>Emerging Technology</span> team on numerous projects following
                                    an agile methodology for researching and developing image recognition applications along with data-pipelining.</li>
                                <li>Worked with the team to develop a <span style={{fontWeight: "bold"}}>Face Recognition</span> system to identify customers and
                                    gather their demographics such as age, gender, emotions which were encrypted and stored on the cloud.</li>
                                <li>Designed and implemented a <span style={{fontWeight: "bold"}}>License Plate Reader</span> application to alert a store when a customer's vehicle enters the
                                    parking lot of the store by reading their license plate and identifying the customer by performing a database check.</li>
                                <li>Performed cloud deployments for <span style={{fontWeight: "bold"}}>Freshness of Produce Items</span> project using Azure Machine Learning Services.</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <Container style={experienceStyle}>
                    <Row>
                        <Col md={4}>
                            <span>May 2018 - May 2019</span>
                        </Col>
                        <Col md={8}>
                            <h4 style={{margin: "auto"}}>Department of Computer Science - RIT</h4>
                            <p>Graduate Assistant - Lab Manager <br /> Rochester, New York</p>
                            <p style={{fontWeight: "bold"}}>Technologies Used: Python | Shell scripting </p>
                            <ul style={{paddingLeft: "1.2em"}}>
                                <li>Administered labs to <span style={{fontWeight: "bold"}}>maintain network infrastructure</span> of over 300 machines running on Windows, MacOS and Linux(Ubuntu) OS.</li>
                                <li><span style={{fontWeight: "bold"}}>Led a team</span> of 20 lab assistants every term.</li>
                                <li>Awarded a <span style={{fontWeight: "bold"}}>scholarship of 75%</span> tution fees for the same.</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Layout>
            
        </React.Fragment>
    )
}