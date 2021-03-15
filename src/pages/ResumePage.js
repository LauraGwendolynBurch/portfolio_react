import React from 'react';
import Hero from '../components/Hero';
import Resume from "../assets/images/Resume.pdf";
import { Container } from 'react-bootstrap';

function ResumePage (props) {

    return(
        <div>
         <Hero title={props.title} />
         <Container className="justify-content-center">
         <a href={Resume} download="Resume.pdf" style={{color:"black", fontSize:"25px" }}>Download</a>
         </Container>
         </div>
        
    )
}

export default  ResumePage