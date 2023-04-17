import React from 'react'
// import Usernav from '../Components/Usernav'
// import Image from 'react-bootstrap/Image'
// import Img1 from './flower-g94a555758_1920.jpg'
// import Titlebar from '../Components/Titlebar'
// import Product from '../Components/Product'
// const imgstyle = {
//     height:'500px',
//     width:'100%'
// }
// export default function Home() {
//   return (
//     <>
//         {/* <Usernav /> */}
//         <Image src={Img1} style={imgstyle} />
//         <Titlebar name='Our Products' />
//         <Product />
//         <Titlebar name='Our Client' />
//     </>
//   )
// }
// import React from 'react'
import Usernav from "../Components/Usernav";
import Container from 'react-bootstrap/Container';



export default function Home() {
  return (
    <>
      {/* <Usernav /> */}
      <Container fluid className='bg'>
      
      {/* <Row>
        <Col>1 of 1</Col>
      </Row> */}

    <div className='cont'>
            <span>Coffee House</span>
            <h3>Start your day with our coffee</h3>
            <a href="#" className="link-btn">Get Started</a>
      </div>
    </Container>
    </>
  )
}

