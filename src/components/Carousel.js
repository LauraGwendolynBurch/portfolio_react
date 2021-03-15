import React from 'react';

import Card from "./Card";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

import burger from '../assets/images/burger.png'
import meili from '../assets/images/meili.png'
import pub from '../assets/images/pub.png'
import weather from '../assets/images/weather.png'
// import book from '../assets/images/book.jpg'
import testImg from '../assets/images/testImg.jpg'

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
                    link2:  "https://github.com/LauraGwendolynBurch/worry_monster",
                    selected: false
                },
                {
                    id: 1,
                    title: "Meili",
                    subtitle: "An application to help any avid outdoor enthusist track their gear",
                    imgSrc: meili,
                    link: "https://secret-harbor-98103.herokuapp.com/",
                    link2:  "https://github.com/LauraGwendolynBurch/Project_2",
                    selected: false
                },
                {
                    id: 2,
                    title: "Publish",
                    subtitle: "A pubcrawl at based on your location",
                    imgSrc: pub ,
                    link: "https://lauragwendolynburch.github.io/Pub-Lish/",
                    link2:  "https://github.com/LauraGwendolynBurch/Pub-Lish",
                    selected: false
                },
                {
                    id: 3,
                    title: "Book_Club",
                    subtitle: "Fullstack react project TBD",
                    imgSrc: testImg ,
                    link: "https://book-club-google.herokuapp.com/",
                    link2:  "https://github.com/LauraGwendolynBurch/book_club",
                    selected: false
                }, {
                    id: 4,
                    title: "Eat_Da_Burger",
                    subtitle: "Fullstack app for a user to order burger of their dreams.",
                    imgSrc: burger ,
                    link: "https://rocky-fortress-95014.herokuapp.com/",
                    link2: "https://github.com/LauraGwendolynBurch/Eat_Da_Burger/",
                    selected: false
                }, {
                    id: 5,
                    title: "Weather_Watcher",
                    subtitle: "A five day forcast application using JS",
                    imgSrc: weather ,
                    link: "https://lauragwendolynburch.github.io/Weather_Watcher/",
                    link2:  "https://github.com/LauraGwendolynBurch/Weather_Watcher",
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
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container >
            <Row className="justify-content-around">
                {this.makeItems(this.state.items)}
            </Row>
            </Container>
            
        )
    }
}

export default Carousel;