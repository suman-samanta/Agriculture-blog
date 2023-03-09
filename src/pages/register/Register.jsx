import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './register.css';

const Register=()=>{
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [mobile,setMobile]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState(false)

    const handleSubmit=async (e)=>{

        e.preventDefault();

        setError(false);
        try{
            const res=await axios.post("http://localhost:5000/api/auth/register",{
                username,
                email,
                mobile,
                password
            });
            res.data && window.location.replace("/login")
    
        }catch(err){
            setError(true)
        }
    };

    return(
        <>
            <div className="register">
              <span className="registerTitle">Register</span>
               <form className="registerForm" onSubmit={handleSubmit} >

                   <label>Username</label>
                   <input type="text" className="registerInput" placeholder="Enter Your Username..."
                    onChange={e=>setUsername(e.target.value)}/>

                   <label>Email</label>
                   <input type="email" className="registerInput" placeholder="Enter Your Email..." onChange={e=>setEmail(e.target.value)} />

                   <label>Mobile Number</label>
                   <input type="number" className="registerInput" placeholder="Enter Your Mobile Number..."  pattern="\d{3}[\-]\d{3}[\-]\d{4}"  onChange={e=>setMobile(e.target.value)}/>

                   <label>Password</label>
                   <input type="password" className="registerInput" placeholder="Enter Your Password..." onChange={e=>setPassword(e.target.value)} />

                   <button className="registerButton" type="submit"> Register</button>
                   
               </form>
               <button className="registerLoginButton"> 
                 <Link className="link" to="/login"> LOGIN</Link>
               </button>
               { error &&<span style={{color:"red",marginTop:"10px"}}>Something Went Wrong!!</span>}
            </div>
        </>
    )
}

export default Register;