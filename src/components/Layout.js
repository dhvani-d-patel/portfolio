import React from 'react';
import Container from 'react-bootstrap/Container';

export const Layout = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}