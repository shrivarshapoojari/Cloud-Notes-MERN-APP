import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
 
import { Link } from 'react-router-dom';

const Login = (props) => {
    const [credential, setCredential] = useState({ email: "", password: "" })
    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }
    let navigate = useNavigate();

   

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"


            },
            body: JSON.stringify({ email: credential.email, password: credential.password })


        });
        const json = await response.json()
        console.log(json)
        // setuser(json.username)
        let username=json.username;
        let useremail=json.useremail;
        
        window.localStorage.setItem('email',useremail)
        window.localStorage.setItem('user',username);
        console.log(json.success)
        if (json.success === true) {
            // save authtoken and redirect
            window.localStorage.setItem('token', json.authtoken)
            props.showAlert("Logged in Succesfully", "success")
            navigate('/home');
        }

        if (json.success ==false) {

            props.showAlert("Invalid Credentials", "danger")
        }
    }
    return (
        <div className="login-container">
        <h1 className="login-header">Login to Cloud Note</h1>
        <form className="login-form" onSubmit={handleSubmit}>
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
          <button type="submit" className="btn btn-primary login-button">
            Submit
          </button>
        </form>
        <div className="signup-link">
          <Link to="/signup">Don't have an account? Click here to create one</Link>
        </div>
      </div>

    )
}

export default Login
