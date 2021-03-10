import React from 'react';
import CardInfo from './CardInfo';


function Card (props) {

    return (
       <div classNam="d inline-block l-card" >
        <img className="l-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
        {props.item.selected && <CardInfo title={props.item.title} subtitle={props.item.subtitle} link={props.item.link}/> }
       </div>
    );
}

export default Card;