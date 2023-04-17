import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Menu1 from '../Components/menu-1.png';

import React from 'react'
import Title from './Title';
import Contentmenu from './Contentmenu';
// const card = {
//     width:'10%'
// }
const Img_width = {
    width:'160px'
}


export default function Prodmenu() {
  return (
    <>
    {/* <CardGroup>
      <Card className='text-center'>
      <Card.Img variant="top" src={Menu1} />
      <Card.Body> */}
        {/* <Card.Title>Coffee Bean</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, eos.
        </Card.Text>
        <Button variant="primary">Read More</Button> */}
{/* <Title/>
          
<Contentmenu/>

<Button>Read More</Button>



      </Card.Body>
    </Card>
    </CardGroup> */}


<CardGroup>
      <Card style={{ width: '18rem' }} className='text-center'>
        <Card.Img  src={Menu1}  style={Img_width}/>

        <Title/>
          
          <Contentmenu/>
          
          <>Read More</>

        {/* <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body> */}

        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}

      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </>
  )
}
