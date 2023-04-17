// import React from 'react'

// export default function About() {
//   return (
//     <div>About</div>
//   )
// }

import React from 'react'
import Img from '../Pages/about-img-1.png'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faUser ,faMugSaucer,faTruck,faHeadphones} from '@fortawesome/free-solid-svg-icons'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const iconstyle ={
   color:'#512a10'
}
const Rows ={
  width:'100%',
//   backgroundColor:'red'
}

export default function About() {
   return (
      <div className='container'>
         <Image src={Img} />
         <div className='about'>
            <span>why choose us?</span>
            <h3 class="title">The Best Coffee Maker In The Town</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorem laborum itaque. ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorem laborum itaque. Perspiciatis in veniam illum deserunt, quos Omnis dolorem laborum itaque animi maiores nisi officiis amet accusantium soluta a, excepturi vero obcaecati nobis.</p>


            {/* <Card >
            <FontAwesomeIcon className='icon' icon={faMugSaucer} style={{ color: 'brodwn'}} />
      
        
        
    </Card> */}


    <Row className="g-2" style={Rows} >

        <Col style={{width:'100%'}}>
          <Card className='text-center' style={{ width: '7rem',padding:'4%' }}>
          <FontAwesomeIcon className='icon1' icon={faMugSaucer} style={{ color: 'brodwn'}} />
          {/* <Card.Body> */}
        <h6>Best Coffee</h6>
      {/* </Card.Body> */}
          </Card>
        </Col>

        <Col>
        <Card className='text-center' style={{ width: '7rem',padding:'4%' }}>
          <FontAwesomeIcon className='icon1' icon={faTruck} style={{ color: 'brodwn'}} />
          {/* <Card.Body> */}
        <h6>Free Delivery</h6>
      {/* </Card.Body> */}

          </Card>
        </Col>
        <Col>
        <Card className='text-center' style={{ width: '7rem',padding:'4%' }}>
          <FontAwesomeIcon className='icon1' icon={faHeadphones} style={{ color: 'brodwn'}} />
          {/* <Card.Body> */}
        <h6>24/7 Support</h6>
      {/* </Card.Body> */}

          </Card>
        </Col>

      </Row>




            {/* <div className="icons-container">
               <div className="icons">


                  <h3>best coffee</h3>
               </div>
               <div className="icons">
                  <i className="fas fa-shipping-fast"></i>
                  <h3>free delivery</h3>
               </div>
               <div className="icons">
                  <i className="fas fa-headset"></i>
                  <h3>24/7 service</h3>
               </div>
            </div> */}
         </div>
      </div>
   )
}

