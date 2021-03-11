import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';

function AboutMePage (props) {

    return(
        <div>
         <Hero title={props.title} />
         <Content>
         Circus Artist and Full Stack Web Developer looking to bring the creative problem solving of the circus to the tech world. Recent graduate of Trilogy Full Stack Bootcamp through the University of Washington. Skilled in HTML, CSS, Javascript, node.js, SQL, and mongoDB. Passionate about communication and project management. An award winning performer, and co-creator on a new touring circus company. I plan to bring the same work ethic, and unique approach to performance into development. Recently helped build a full-stack application with a team of 4. The application tracks a user's camping gear, and builds packing lists for new adventures. Future personal goals in development include diving into expanding web accessibility, helping bring diversity in the tech world, teaching younger generations, and working with progessive companies on outreach.
         </Content>
        </div>
    )
    
}

export default AboutMePage