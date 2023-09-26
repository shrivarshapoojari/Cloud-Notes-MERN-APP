import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

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
    < div className='container'>
          <h1 className='my-2'>Please Sign Up to continue to Cloud Note</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="email" className="form-control" id="username" name='username' aria-describedby="emailHelp" value={credential.name} onChange={onChange}/>
                     
                </div>
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

export default SignUp
