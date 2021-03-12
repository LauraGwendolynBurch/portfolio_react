import React from 'react';

import BackgroundImage from '../components/BackgroundImage'
import Hero from '../components/Hero'

function HomePage(props) {

    return (
        <div>
            <Hero title={props.title} subtitle={props.subtitle} text={props.text} />
            <BackgroundImage fluid={true}/>
           
        </div>
    )

}

export default HomePage