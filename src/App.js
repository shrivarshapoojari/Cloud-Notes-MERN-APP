import React from 'react'
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';

import {

  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NoteState from './context/notes/NoteState';

export default function App() {
  return (
    <>
      <NoteState>

        <BrowserRouter>

          <Navbar />
          <Alert message={"HEllo I am Alert"}/>
          <div className="container">
      
            <Routes>
            
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/about" element={<About />} />
          

            </Routes>
            </div>






        </BrowserRouter>

      </NoteState>

    </>
  )
}
