import React,{useState} from 'react'
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';
import Login from './components/Login';
import SignUp from './components/SignUp';
 

import {

  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import UserState from './context/users/UserState'; 





export default function App() {


  const[alert,setAlert]=useState(null);



  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{

      setAlert(null);

    },2000)

  }
  return (
    <>
      <NoteState>
        <UserState>
          

        <BrowserRouter>

          <Navbar />
          <Alert alert={alert}/>
          <div className="container">
      
            <Routes>
             <Route exact path="/" element={<Home showAlert={showAlert}/>}/>
              <Route exact path="/home" element={<Home showAlert={showAlert}/>} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
              <Route exact path="/signup" element={<SignUp showAlert={showAlert}/>} />
          

            </Routes>
            </div>






        </BrowserRouter>
     
        </UserState>
      </NoteState>

    </>
  )
}
