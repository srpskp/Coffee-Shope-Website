// import React from 'react'

// export default function Contact() {
//   return (
//     <div>Contact</div>
//   )
// }

import React from 'react'
import Titlebar from '../Components/Titlebar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import Myform from '../Components/Myform';
import Map from '../Components/Map';
const Contstyle = {
marginTop:'4%',
// marginLeft:'9%'
}

export default function Contact() {
  return (
    <>
      <Titlebar name='Contact Us' />

      <Container style={Contstyle}>
      <Row>
      <Col>
       <Map/>
        </Col>
        <Col >
         <Myform/>
        </Col>
       
      </Row>

      
      
    </Container>

      

      
    </>
  )
}

