import React from 'react'
import { useState } from 'react';
import { useNavigate} from 'react-router-dom'

const Login = (props) => {
    const [credential,setCredential]=useState({email:"",password:""})
    const onChange=(e)=>{
        setCredential({...credential,[e.target.name]:e.target.value})
    }
    let navigate=useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"


            },
            body:JSON.stringify({email:credential.email,password:credential.password})


        });
        const json = await response.json()
        console.log(json)
        console.log(json.success)
        if(json.success===true)
        {
               // save authtoken and redirect
              window.localStorage.setItem('token',json.authtoken)
               props.showAlert("Logged in Succesfully","success")
               navigate('/home');
        }

        if(json.success===false){
           
            props.showAlert("Invalid Credentials","danger")
        }
    }
    return (
        <div>
            <h1 className='my-2'>Please Login to Continue to Cloud Note</h1>
            <form >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={credential.email} onChange={onChange}/>
                     
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
                    <input type="password" className="form-control" id="password" name='password' value={credential.password} onChange={onChange} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Login
