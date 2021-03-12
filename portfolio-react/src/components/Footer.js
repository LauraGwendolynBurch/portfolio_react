import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import '../index.css';


function Footer() {

    return (
        <footer className="mt-5" >
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-o" md={3} sm={12}>
                    <a className='text-link' href="mailto:lauraburch.lb@gmail.com">Share your thoughts with me</a>
                    </Col>
                    <Col className="padding-0 d-flex justify-content-end" md={3}>
                    <a className='text-link' href="https://github.com/LauraGwendolynBurch/">Follow for more</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )

}

export default Footer;