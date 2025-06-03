import Lottie from 'lottie-react'
import React, { use } from 'react'
import registerlottie from '../../assets/Animation/register animation.json'
import { AuthContext } from '../../Contexts/AuthContext/AuthContext'
export default function Register() {
const {createUser}=use(AuthContext)

const handleregister=(e)=>{
e.preventDefault()
const form = e.target
const name = form.name.value
const email = form.email.value
const password = form.password.value
console.log(name,email,password)
createUser(email,password)
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
      <Lottie style={{width:300}} loop={true} animationData={registerlottie}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className='font-bold text-4xl pt-3 text-center'>Register now</h1>
      <div className="card-body">
       <form onSubmit={handleregister}>
         <fieldset className="fieldset">
          <label className="label">name</label>
          <input name='name' type="text" className="input" placeholder="name" />
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
        </fieldset>
       </form>
      </div>
    </div>
  </div>
</div>
  )
}
