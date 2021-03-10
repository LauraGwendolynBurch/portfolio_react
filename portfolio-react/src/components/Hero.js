import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {

    return (
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                        { props.title && <h1>{props.title}</h1>  }
                        { props.subtitle && <h3>{props.subtitle}</h3>  }
                        { props.text && <h3>{props.text}</h3>  }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;

