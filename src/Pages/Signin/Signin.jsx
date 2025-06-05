import Lottie from 'lottie-react'
import React, { use } from 'react'
import loginanimation from '../../assets/Animation/Login.json'
import { AuthContext } from '../../Contexts/AuthContext/AuthContext'
import { NavLink } from 'react-router'
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
   <div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     
   <Lottie style={{width:300}} loop={true} animationData={loginanimation}></Lottie>
    </div>
    <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
         <h1 className="mt-3 text-3xl font-bold text-center regular">Login now!</h1>
      <div className="card-body">
      <form onSubmit={handlelogin}>
          <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <button type='submit' className="mt-4 btn btn-neutral">Login</button>
          <p className='text-xl font-bold text-center'>Or</p>
         <NavLink to="/register" className=""><button  className="w-full mt-4 btn btn-neutral">Register</button></NavLink>
        </fieldset>
      </form>
      </div>
    </div>
  </div>
</div>
  )
}
