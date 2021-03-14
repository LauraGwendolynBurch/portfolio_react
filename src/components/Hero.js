import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {

    return (
        <Jumbotron className="bg-transparent jumbotron-fulid p-0" >
            <Container fluid={true}>
                <Row className="justify-content-center py-2">
                    <Col md={8} sm={12}>
                        { props.title && <h1 className="display-3 font-weight-bolder">{props.title}</h1>  }
                        { props.subtitle && <h3 className="display-5 font-weight-light">{props.subtitle}</h3>  }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;

