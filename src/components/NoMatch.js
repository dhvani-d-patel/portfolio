import React from 'react';
import { Jumbotron as Jumbo, Container, Media,Image, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import oops from '../assets/oops.jpg';
import { faBinoculars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Styles = styled.div`
    .blah {
        background: url(${oops}) no-repeat fixed bottom;
        background-size: cover;
        color: #222;
        position: relative;
        height: 94.25vh;
        z-index: -2;
        margin: auto;
        font-size: 50px;
        opacity: 0.8;
    }
    .error {
        background-color: black;
        color: white;
        margin-top: 20%;
        padding-left: 4%
    }
`;

export const NoMatch = () => {
    return (
        <Styles>
            <Jumbo fluid className="blah">
                <Container>
                    <p className="error"><FontAwesomeIcon icon={faBinoculars}></FontAwesomeIcon> &nbsp;Oops! Looks like you are lost. Use the above navigation bar to find what you are looking for. </p>
                </Container>
            </Jumbo>
        </Styles>
    )
}