import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
 

import { Link } from 'react-router-dom';

const SignUp = (props) => {
 
  const [credential,setCredential]=useState({ username:"",email:"",password:""})

  
   
 
  
  
  const onChange=(e)=>{
      setCredential({...credential,[e.target.name]:e.target.value})
  }



  let navigate=useNavigate();


  const handleSubmit = async (e) => {
        e.preventDefault(); 
        const response = await fetch('http://localhost:5000/api/auth/createuser', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body:JSON.stringify({name:credential.username ,email:credential.email,password:credential.password})


        });
        const json = await response.json()
        console.log(json)
        let username=json.username;
        let useremail=json.useremail;
        
        window.localStorage.setItem('email',useremail)
        window.localStorage.setItem('user',username);
        if(json.success===true){
               // save authtoken and redirect
            
              window.localStorage.setItem('token',json.authtoken)
              
               navigate('/home');
               props.showAlert("Account Created Succesfully","success")
        }

        if(json.success===false){
          window.localStorage.setItem('token',null)
            props.showAlert("Invalid Credentials","danger")

        }

      }

  return (
    <div className="signup-container">
      <h1 className="signup-header">Please Sign Up to continue to Cloud Note</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={credential.username}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credential.email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credential.password}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary signup-button">
          Submit
        </button>
      </form>
      <div className="login-link">
        <Link to="/login">Already Existing User? Click here to login</Link>
      </div>
    </div>
  )
}

export default SignUp
