 import React from 'react'
 import Home from './components/Home';
 import Navbar from './components/Navbar';
 import About from './components/About';
 import {

  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
 export default function App() {
   return (
      <>
      <BrowserRouter>
                <Navbar/>
         <Routes>
                  <Route exact path="/home" element= {<Home/>} />
                  <Route exact path="/about" element= {<About/>} />
              
         </Routes>
      
      
      
      
      
      
      
      </BrowserRouter>

      </>
   )
 }
 