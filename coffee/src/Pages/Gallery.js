import React from 'react'
import Titlebar from '../Components/Titlebar'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Imgcard from '../Components/Imgcard'
import G1 from '../Components/g-img-1.jpg'
import G2 from '../Components/g-img-23.jpg'
import G3 from '../Components/g-img-3.jpg'
import G4 from '../Components/g-img-4.jpg'
import G5 from '../Components/g-img-51.jpg'
import G6 from '../Components/g-img-6.jpg'
import Galryimg from '../Components/Galryimg';
const Rowstyle = {
  width: '80%', marginLeft: '10%', marginTop: '2%'
}
// const cardstyle = {
//   width: '20rem',
//   marginLeft: '5%'
// }

export default function Gallery() {
  return (
    <>
        <Titlebar name='Our Gallery'/>

        <Row className="g-3 flex" style={Rowstyle}>
        {/* <Row className="g-3"> */}

        {/* <Columnimg/> */}

        <Col>

        <Galryimg src={G1}/>

        {/* <div class="content">
            <h3>morning coffee</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, dolore?</p>
            <a href="#" class="link-btn">read more</a>
         </div> */}
          {/* <Card className='text-center'> */}
                {/* <Imgcard  src={G1} style={{width:'300p'}} /> */}
                {/* <Bodycard/> */}

            {/* <Menuprodu src={Menu1} /> */}
          {/* </Card> */}
        </Col>

        <Col>
        <Galryimg src={G2}/>

        {/* <div class="content">
            <h3>morning coffee</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, dolore?</p>
            <a href="#" class="link-btn">read more</a>
         </div> */}
          {/* <Card className='text-center'> */}
            {/* <Menuprodu src={Menu2} /> */}
            {/* <Imgcard src={G2}/> */}
                {/* <Bodycard/> */}

          {/* </Card> */}
        </Col>
        <Col>
        <Galryimg src={G3}/>

        {/* <div class="content">
            <h3>morning coffee</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, dolore?</p>
            <a href="#" class="link-btn">read more</a>
         </div> */}
          {/* <Card className='text-center'> */}
            {/* <Menuprodu src={Menu3}/> */}
            {/* <Imgcard src={G3}/> */}
                {/* <Bodycard/> */}

          {/* </Card> */}
        </Col>

      </Row>
      <Row className="g-4 m_t" style={Rowstyle}>
      {/* <Row className="g-4 m_t"> */}

        <Col>
        <Galryimg src={G4}/>

        {/* <div class="content">
            <h3>morning coffee</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, dolore?</p>
            <a href="#" class="link-btn">read more</a>
         </div> */}
          {/* <Card className='text-center'> */}
            {/* <Menuprodu src={Menu4} /> */}
            {/* <Imgcard src={G4}/> */}
                {/* <Bodycard/> */}

          {/* </Card> */}
        </Col>

        <Col>
        <Galryimg src={G5}/>

        {/* <div class="content">
            <h3>morning coffee</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, dolore?</p>
            <a href="#" class="link-btn">read more</a>
         </div> */}
          {/* <Card className='text-center'> */}
            {/* <Menuprodu src={Menu5} /> */}
            {/* <Imgcard src={G5}/> */}
                {/* <Bodycard/> */}

          {/* </Card> */}
        </Col>
        <Col>
        <Galryimg src={G6}/>

        {/* <div class="content">
            <h3>morning coffee</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, dolore?</p>
            <a href="#" class="link-btn">read more</a>
         </div> */}
          {/* <Card className='text-center'> */}
            {/* <Menuprodu src={Menu6}/> */}
            {/* <Imgcard src={G6}/> */}
                {/* <Bodycard/> */}

          {/* </Card> */}
        </Col>

      </Row>
    </>
  )
}
