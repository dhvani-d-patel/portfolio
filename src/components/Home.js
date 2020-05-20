import React from 'react';
import { Jumbotron as Jumbo, Container, Media,Image, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';
import galaxyImage from '../assets/galaxyImage.jpg';
import dp from '../assets/dp.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${galaxyImage}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        position: relative;
        height: 94.25vh;
        z-index: -2;
        display: flex;
        margin: auto;
    }

    .overlay {
        background-color: #000;
        opacity: 0.4;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }

    .main-page {
        margin: auto;
        
    }

    .main {
        margin: auto;
    }
`;

const copyright = {position: "absolute", width: "100%", color: "#efefef", lineHeight: "20px", fontSize: "1em", textAlign: "center", bottom:0}

export const Home = () => {
    return (
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container className="main">
                    <Row>
                        <Col md={2}></Col>
                        <Col md={8}>
                        <Media className="main-page">
                            <Image roundedCircle width="30%" src={dp} alt="DP image" className="mx-4"/>
                            <Media.Body className="main-page">
                                <hr />
                                <h1 className="heading">Dhvani Dineshbhai Patel</h1>
                                <h4 className="content">Software Engineer | Full Stack Developer</h4>
                                <hr />
                            </Media.Body>
                        </Media>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                </Container>
            </Jumbo>
            <footer style={{position: "relative", width: "100%"}}>
                <p style={copyright}>&copy; DHVANI PATEL</p>
            </footer>
        </Styles>
    )
}