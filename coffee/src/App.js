import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Fun from './Fun';
import Comp from './Comp';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Usernav from './Components/Usernav';
import Menu from './Pages/Menu';
import Gallery from './Pages/Gallery';
import Reviews from './Pages/Reviews';
import Table1 from './Pages/Table1';




// const styledata = {
//   background:'yellow',
//   fontSize:'3em'
// }
function App() {
  return (
    <>

      {/* <Home /> */}

      <BrowserRouter>
    <Usernav />
       <Routes>

         <Route path='' element = {<Home />}> </Route>
         <Route path='about' element = {<About />}> </Route>
         <Route path='menu' element = {<Menu />}> </Route>
         <Route path='gallery' element = {<Gallery />}> </Route>
         <Route path='reviews' element = {<Reviews />}> </Route>
         <Route path='contact' element = {<Contact />}> </Route>
         <Route path='crud' element = {<Table1 />}> </Route>
        

       </Routes>
    </BrowserRouter>
    {/* <BrowserRouter>
    
       <Routes>

       <Route path='crud' element = {<Table1 />}> </Route>
        

       </Routes>
    </BrowserRouter> */}
    {/* <Home /> */}
    {/* <Comp /> */}
    {/* <p className='ptag'>I am external CSS</p> */}

     {/* <Fun /> */}
    
    {/* <p style={styledata}>I am internal CSS</p> */}
    
{/* <p style={{color:'red'}}>Hello Data</p> */}

    {/* <Button variant="primary">Primary</Button>{' '} */}
       
   </>
  );
}

export default App;
