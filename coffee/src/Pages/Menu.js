import React from 'react'


import Product from '../Components/Product'
import Titlebar from '../Components/Titlebar'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Menu1 from '../Components/menu-1.png';
import Menu2 from '../Components/menu-2.png';
import Menu3 from '../Components/menu-3.png';
import Menu4 from '../Components/menu-4.png';
import Menu5 from '../Components/menu-5.png';
import Menu6 from '../Components/menu-6.png';
import Imgcard from '../Components/Imgcard'
import Bodycard from '../Components/Bodycard'


const Rowstyle = {
  width: '80%', marginLeft: '10%', marginTop: '3%'
}
// const cardstyle = {
//   width: '20rem',
//   marginLeft: '5%'
// }

export default function Menu() {
  return (
    <>
      <Titlebar name='Our Popular Menu' />

      {/* <Menuprodu/> <Menuprodu/> */}

      <Row className="g-3 rowstyle" style={Rowstyle} >

        {/* <Columnimg/> */}

        <Col>
          <Card className='text-center'>
                <Imgcard src={Menu1}/>
                <Bodycard/>

            {/* <Menuprodu src={Menu1} /> */}
          </Card>
        </Col>

        <Col>
          <Card   className='text-center'>
            {/* <Menuprodu src={Menu2} /> */}
            <Imgcard src={Menu2}/>
                <Bodycard/>

          </Card>
        </Col>
        <Col>
          <Card  className='text-center'>
            {/* <Menuprodu src={Menu3}/> */}
            <Imgcard src={Menu3}/>
                <Bodycard/>

          </Card>
        </Col>

      </Row>
      <Row className="g-4" style={Rowstyle}>

        <Col>
          <Card className='text-center'>
            {/* <Menuprodu src={Menu4} /> */}
            <Imgcard src={Menu4}/>
                <Bodycard/>

          </Card>
        </Col>

        <Col>
          <Card  className='text-center'>
            {/* <Menuprodu src={Menu5} /> */}
            <Imgcard src={Menu5}/>
                <Bodycard/>

          </Card>
        </Col>
        <Col>
          <Card className='text-center'>
            {/* <Menuprodu src={Menu6}/> */}
            <Imgcard src={Menu6}/>
                <Bodycard/>

          </Card>
        </Col>

      </Row>
      
    </>
  )
}
