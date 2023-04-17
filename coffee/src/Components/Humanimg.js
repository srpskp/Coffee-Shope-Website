import React from 'react'
import Card from 'react-bootstrap/Card';
const Img = {
   
    width:'100px',
    height:'100px',
    marginLeft:'35%',
    marginTop:'5%',
    borderRadius: '50%'
  }

export default function Humanimg(props) {
  return (
    <>
      <Card.Img  variant="top" src={props.src} style={Img} /> 
    </>
  )
}
