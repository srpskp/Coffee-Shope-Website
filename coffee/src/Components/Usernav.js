// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faUser } from '@fortawesome/free-solid-svg-icons'


export default function Usernav() {
  return (



    <>
      <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="#home" className='logo'>
            <FontAwesomeIcon icon={faMugHot} />


            <span>coffee</span>

          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="">Home</Link>
            <Link to="about">About</Link>
            <Link to="menu">Menu</Link>
            <Link to="gallery">Gallery</Link>
            <Link to="reviews">Reviews</Link>
            <Link to="contact">Contact</Link>
            <FontAwesomeIcon className='icon' icon={faUser} style={{ color: 'white' }} />
          </Nav>

        </Container>
      </Navbar>







    </>
    
  )
}
