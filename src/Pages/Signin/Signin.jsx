import Lottie from 'lottie-react'
import React, { use } from 'react'
import loginanimation from '../../assets/Animation/Login.json'
import { AuthContext } from '../../Contexts/AuthContext/AuthContext'
export default function Signin() {

const {signin}=use(AuthContext)

const handlelogin=(e)=>{
e.preventDefault()
const email = e.target.email.value 
const password = e.target.password.value 
signin(email,password)
.then(result=>{
  console.log(result)
})
.catch(error=>{
  console.log(error)
})
}

  return (
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     
   <Lottie style={{width:300}} loop={true} animationData={loginanimation}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
         <h1 className="text-3xl font-bold text-center mt-3">Login now!</h1>
      <div className="card-body">
      <form onSubmit={handlelogin}>
          <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
      </div>
    </div>
  </div>
</div>
  )
}
