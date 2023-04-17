import React from 'react'
import Card from 'react-bootstrap/Card';
import Cardtitle from './Cardtitle';

export default function Bodycard() {
  return (
    <>
            <Card.Body>
              <Card.Title>
                     <Cardtitle/>
              </Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, eos.
              </Card.Text>
             <a className='readbtn'>Read More</a>
            </Card.Body>
    </>
  )
}
