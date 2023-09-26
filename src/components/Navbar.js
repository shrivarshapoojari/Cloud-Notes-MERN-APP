import React ,{useEffect}from 'react'
import {Link, useLocation,useNavigate} from  'react-router-dom'

export default function Navbar() {
  let location =useLocation();
  useEffect(()=>{
     
  },[location]);
  let navigate=useNavigate();
  const handleLogout=()=>{
    window.localStorage.removeItem('token');
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
          </form> :  <form  className="d-flex">
            <button className='btn btn-primary mx-2' onClick={handleLogout}>Logout</button> </form>
          } 
          </div>
        </div>
      </nav>
     
    </div>
   
  )
}
