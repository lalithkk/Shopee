import React, { useState } from 'react'
import './Login.css'
import { assets } from '../assets/assets'

const Login = ({setShowLogin}) => {
    const[curState,setCurState] =useState("Login")
  return (
    <div className='login'>
      <form  className='login-container'>
        <div className='login-title'>
            <h2>{curState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt='wrong'/>
        </div>
        <div className='login-inputs'>
            {curState==="Login"?<></>:<input type='text' placeholder='your name' required/>}
            
            <input type='email' placeholder='email' required/>
            <input type='password' placeholder='Password' required/>
        </div>
        <button>{curState==="Sign Up"?"Create account":"Login"}</button>
        <div className='login-condition'>
            <input type='checkbox' required/>
            <p>I agree for the terma & condition</p>
        </div>
        {curState==='Login'
        ?<p>create a new account? <span onClick={()=>setCurState("Sign Up")}>Sign Up</span></p>
        :<p>Already have a account?<span onClick={()=>setCurState("Login")}>Login</span></p>

        }
      </form>
    </div>
  )
}

export default Login
