import React from 'react'
import Card from 'react-bootstrap/Card';

export default function Galryimg(props) {
  return (
    <>
       <Card.Img variant="top" src={props.src}  /> 
    </>
  )
}
