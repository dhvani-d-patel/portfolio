import React from 'react';
import { Jumbotron as Jumbo, Container, Media,Image, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import galaxyImage from '../assets/galaxyImage.jpg';
import dp from '../assets/dp.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${galaxyImage}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        position: relative;
        min-height: 25vh;
        z-index: -2;
        display: flex;
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
`;

export const Jumbotron = () => {
    return (
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <Row>
                        <Col md={2}>
                            <Image roundedCircle width="100%" height="100%" src={dp} alt="DP image" />
                        </Col>
                        <Col md={10} className="main-page">
                            <h1>Dhvani Dineshbhai Patel</h1>
                            <p><h4>Software Engineer | Full Stack Developer  </h4></p>
                        </Col>
                    </Row>
                </Container>
            </Jumbo>
        </Styles>
        
    )
}