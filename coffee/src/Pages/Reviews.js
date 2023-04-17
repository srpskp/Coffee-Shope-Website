import React from 'react'
import Humanimg from '../Components/Humanimg'
import Revw from '../Components/Revw'
import Titlebar from '../Components/Titlebar'
import Human1 from '../Components/pic-1.png'
import Human2 from '../Components/pic-2.png'
import Human3 from '../Components/pic-3.png'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
const Rowstyle = {
  width: '80%', marginLeft: '10%', marginTop: '3%'
}


export default function Reviews() {
  return (
    <>
       <Titlebar name='Customers Reviews' />

       <Row className="g-4 rowstyle" style={Rowstyle} >

        {/* <Columnimg/> */}

        <Col>
          <Card className='text-center'>
              <Humanimg src={Human1} />
               <Revw/>

            {/* <Menuprodu src={Menu1} /> */}
          </Card>
        </Col>

        <Col>
          <Card   className='text-center'>
          <Humanimg src={Human2}/>
            <Revw/>  

          </Card>
        </Col>
        <Col>
          <Card  className='text-center'>
          <Humanimg src={Human3}/>
            <Revw/>
          </Card>
        </Col>

      </Row>
      
      

    </>
  )
}
