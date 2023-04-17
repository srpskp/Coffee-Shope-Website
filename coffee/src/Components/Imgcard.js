import React from 'react'
import Card from 'react-bootstrap/Card';
const Img_width = {
    width:'160px',
    marginLeft:'25%',
    marginTop:'4%'
    
}
const cardstyle = {
    width: '20rem',
    marginLeft:'5%',
    border:'none',
    
}

export default function Imgcard(props) {
  return (
    <>
    
            <Card.Img variant="top" src={props.src} style={Img_width} /> 
    
             
    </>
  )
}
