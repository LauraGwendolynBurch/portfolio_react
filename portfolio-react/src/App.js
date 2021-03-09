import React from 'react';
import { BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      title: "Laura Gwendolyn Burch",
      headerLinks: [
        { title: "Home", paths: "/" },
        { title: "About", paths: "/about" },
        { title: "Contact", paths: "/contact" },
        { title: "Resume", paths: "/resume" },
        { title: "Portfolio", paths: "/portfolio" }
      ],
      home: {
        title: "Full Stack Website Developer",
        subtitle: "Ideas | Creating | Design",
        text: "Portfolio"
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Choose your own adventure",
      },
      resume: {
        title: "Resume",
      },
      portfolio: {
        title: "Portfolio",
      },


    }
  }

  render() {
    return (
      <Router>
        <Container className="p-o" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Laura Gwendolyn Burch</Navbar.Brand>
            <Navbar.Toggle className="border-0"aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
            <Switch> 
            <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
              <Nav.Link as={NavLink} to="/resume">Resume</Nav.Link>
              <Nav.Link as={NavLink} to="/aboutMe">About Me</Nav.Link>
              <Nav.Link as={NavLink} to="/portfolio">Portfolio</Nav.Link>
              </Nav>
              </Switch> 
            </Navbar.Collapse>
            </Navbar>
            <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;


