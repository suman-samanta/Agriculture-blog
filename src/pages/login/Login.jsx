import axios from "axios";
import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import './login.css';

const Login=()=>{

    const userRef=useRef();
    const passwordRef=useRef();

    const {dispatch,isFetching}=useContext(Context)
   
    const handleSubmit= async (e)=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"});

        try{
            const res=await axios.post("http://localhost:5000/api/auth/login",{
                email:userRef.current.value,
                password:passwordRef.current.value
            })

            dispatch({type:"LOGIN_SUCCESS",payload:res.data});
        }catch(err){
            dispatch({type:"LOGIN_FAILURE"});
        }

    }


    return(
        <>
            <div className="login">
              <span className="loginTitle">Login</span>
               <form className="loginForm" onSubmit={handleSubmit} >
                   <label>Email Id</label>
                   <input type="email" className="loginInput" placeholder="Enter Your Email..." ref={userRef} />
                   <label>Password</label>
                   <input type="password" className="loginInput" placeholder="Enter Your Password..." ref={passwordRef} />

                   <button className="loginButton" type="submit" disabled={isFetching}> Login</button>
               </form>
               <button className="loginRegisterButton" > 
               <Link className="link" to="/register">REGISTER</Link>
                </button>
            </div>
        </>
    )
}

export default Login;