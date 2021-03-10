import React from 'react';

import Card from "./Card";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

import testImg from '../assets/images/testImg.jpg'

// import moduleName from '../assets/images/'
// import moduleName from '../assets/images/'
// import moduleName from '../assets/images/'
// import moduleName from '../assets/images/'
// import moduleName from '../assets/images/'

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "Worry Monster",
                    subtitle: "Help anxiety by giving your worries to the Worry Monster",
                    imgSrc: testImg ,
                    link: "https://github.com/LauraGwendolynBurch/worry_monster",
                    selected: false
                },
                {
                    id: 1,
                    title: "Meili",
                    subtitle: "An application to help any avid outdoor enthusist track their gear",
                    imgSrc: testImg,
                    link: "https://secret-harbor-98103.herokuapp.com/",
                    selected: false
                },
                {
                    id: 2,
                    title: "Publish",
                    subtitle: "A pubcrawl at based on your location",
                    imgSrc: testImg ,
                    link: "https://github.com",
                    selected: false
                },
                {
                    id: 3,
                    title: "Book_Club",
                    subtitle: "Fullstack react project TBD",
                    imgSrc: testImg ,
                    link: "https://github.com/LauraGwendolynBurch/",
                    selected: false
                }, {
                    id: 4,
                    title: "Eat_Da_Burger",
                    subtitle: "Fullstack app for a user to order burger of their dreams.",
                    imgSrc: testImg ,
                    link: "https://rocky-fortress-95014.herokuapp.com/",
                    selected: false
                }, {
                    id: 5,
                    title: "Weather_Watcher",
                    subtitle: "A five day forcast application using JS",
                    imgSrc: testImg ,
                    link: "https://lauragwendolynburch.github.io/Weather_Watcher/",
                    selected: false
                },
            ]

        }
    }

    handleCardClick= (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState(
            {
                items
            });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} onclick={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
            <Row className="justify-content-around">
                {this.makeItems(this.state.items)}
            </Row>
            </Container>
            
        )
    }
}

export default Carousel;