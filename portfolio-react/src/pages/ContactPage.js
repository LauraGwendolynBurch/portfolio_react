import React from 'react';

import ContactImage from '../components/ContactImage';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

class ContactPage extends React.Component {

    render() {
        return (
            <div>
                <Hero title={this.props.title} />
                <Content>
                    <Container fluid={true}>
                        <Row className="border-top justify-content-between p-3">
                            <a className='text-link' href="mailto:lauraburch.lb@gmail.com" target="blank"  rel="noopener noreferrer">Email</a>
                            <a className='text-link' href="https://github.com/LauraGwendolynBurch/" target="blank"  rel="noopener noreferrer">Github</a>
                            <a className='text-link' href="https://www.linkedin.com/in/laura-gwendolyn-burch-7b1663b1/" target="blank"  rel="noopener noreferrer">Linkedin</a>
                        </Row>
                        <ContactImage />
                    </Container>
                </Content>
            </div>
        )
    }
};

export default ContactPage;
