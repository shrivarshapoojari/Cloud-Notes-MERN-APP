import React ,{ useContext,useEffect}from 'react'
import {Link, useLocation,useNavigate} from  'react-router-dom'
 
import { useRef } from 'react';
 
 import NoteContext from '../context/notes/NoteContext';



export default function Navbar(props) {
  const context = useContext(NoteContext)
  const{noteCount}=context;

   let user=window.localStorage.getItem('user')
   let email=window.localStorage.getItem('email')
 
   const profileIcon=useRef(null);
   const handleProfileClick=()=>{
       profileIcon.current.click();
       console.log("Profile")
   }

  let location =useLocation();
  useEffect(()=>{
     
  },[location]);
  let navigate=useNavigate();
  const handleLogout=()=>{
    window.localStorage.removeItem('token');
    props.showAlert("Logged Out Succesfully", "success")
    navigate('/login')
    

  }
  
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">Cloud Note</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/home"?"active":""}`} aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About</Link>
              </li>
           </ul>

           {
           ! window.localStorage.getItem('token')?  <form  className="d-flex">
            <Link className='btn btn-primary mx-2'to='/login'>Login</Link>
            <Link className='btn btn-primary mx-2'to='/signup'>Signup</Link>
          </form> :   
           <form  className="d-flex">
            <i className="fa-solid fa-user fa-2xl" style={{"color": '#0D6EFD',"margin":'16px'}} onClick={handleProfileClick} ></i>
              
          <button className='btn btn-primary mx-2' onClick={handleLogout}>Logout</button> </form>
          
          } 
          </div>
        </div>
      </nav>
         {/*  --------------------------------- Profile page------------------------------ */}
         <div>
       
<button type="button" className="btn btn-primary d-none" ref={profileIcon} data-bs-toggle="modal" data-bs-target="#exampleModal1" >

</button>

 
<div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Your Details</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      
      <div className="card">
  
  <ul className="list-group list-group-flush">
    <li className="list-group-item">User Name : {user}</li>
    <li className="list-group-item">Email Address :{email}</li> 
    <li className="list-group-item">Notes Count :{noteCount}</li>
  </ul>
</div>
      </div>
      <div className="modal-footer">
        
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>



    </div>
   
  )
}
