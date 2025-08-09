import Lottie from 'lottie-react'
import React, { use } from 'react'
import registerlottie from '../../assets/Animation/register animation.json'
import { AuthContext } from '../../Contexts/AuthContext/AuthContext'
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { NavLink, useLocation, useNavigate } from 'react-router';
export default function Register() {
const {createUser,googleSignIn}=use(AuthContext)
const location = useLocation()
const navigate = useNavigate()
const handleregister = (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value;
  const photo = form.url.value.trim();

  // Email regex check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    toast.error('Invalid email address');
    return;
  }

  // Password validation
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const isLongEnough = password.length >= 6;

  if (!hasUppercase || !hasLowercase || !isLongEnough) {
    toast.error('Password must have at least one uppercase, one lowercase letter and be 6+ characters');
    return;
  }

  // ✅ All validation passed → Create user
  createUser(email, password)
    .then((result) => {
      const user = result.user;
      toast.success('Registration Successful');
      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });
      navigate(location?.state || '/');
    })
    .catch((error) => {
      toast.error(error.message);
    });
};



  return (
   <div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <Lottie style={{width:300}} loop={true} animationData={registerlottie}></Lottie>
    </div>
    <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
        <h1 className='pt-3 text-4xl font-bold text-center  '>Register now</h1>
      <div className="card-body">
       <form onSubmit={handleregister}>
         <fieldset className="fieldset">
          <label className="label">name</label>
          <input name='name' type="text" className="input" placeholder="name" />
          <label className="label">Image Url</label>
          <input name='url' type="url" className="input" placeholder="url" />
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div className='flex items-center justify-between'><a className="link link-hover">Forgot password?</a>
          <a href='/login' className="link link-hover">Login</a></div>
          
          <button type='submit' className="mt-4 btn btn-neutral">Register</button>
         <p className='text-xl font-bold text-center'>Or</p>
         <button
  onClick={() => {
    googleSignIn()
      .then(result => {
        toast.success('Google Login Successful');
        navigate(location?.state || '/');
      })
      .catch(error => {
        toast.error(error.message);
      });
  }}
  className="w-full mt-2 btn btn-outline btn-primary"
>
  Continue with Google
</button>
        </fieldset>
       </form>
      </div>
    </div>
  </div>
</div>
  )
}
