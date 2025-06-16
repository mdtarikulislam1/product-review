import React, { use } from 'react'
import { NavLink } from 'react-router'
import { AuthContext } from '../../Contexts/AuthContext/AuthContext'
import ThemeToggle from './Darkmode'
 import { toast } from 'react-toastify';
export default function Navber() {
const {user,signOutUser}=use(AuthContext)

const handleSignOut=()=>{
  signOutUser()
  .then(result=>{
    toast.success('Sign out Succesfully')
  })
   .catch(error => {
   toast.error(error.message)
  });
}

  return (
   <div className="sticky top-0 z-50 bg-white shadow-sm navbar dark:bg-neutral-800">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="dark:text-white btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="p-2 mt-3 ml-0 shadow dropdown-content bg-base-100 z-1 w-52">
        <li><NavLink  to='/'>Home</NavLink></li>
        <li><NavLink  to='/addservice'>AddService</NavLink></li>
       
        <div className="flex flex-col gap-2 md:hidden ">
  {
    user ? (
      <button onClick={handleSignOut} className=''>Log Out</button>
    ) : (
      <>
       <div className='py-2 my-2 text-center text-white bg-black rounded-sm'>
         <NavLink to="/login" className="">Login</NavLink>
       </div>
      </>
    )
  }
</div>
      </ul>
    </div>
  
    <h1 className="ml-3 text-4xl font-bold text-black whitespace-nowrap dark:text-white logo md:ml-0">
  <span className="hidden text-yellow-600 md:inline">Product </span>Review <span className="hidden text-yellow-600 md:inline"> System</span>
</h1>
  </div>
  <div className="hidden navbar-center lg:flex">
    <ul className="px-1 menu-horizontal">
     <li className='text-2xl font-semibold dark:text-white regular'><NavLink className={({ isActive }) =>
      isActive ? "text-yellow-500" : ""
     } to='/'>Home</NavLink></li>
     <li className='pl-4 text-2xl font-semibold dark:text-white regular'><NavLink className={({ isActive }) =>
      isActive ? "text-yellow-500" : ""
     } to='/addservice'>AddService</NavLink></li>
    </ul>
  </div>
 <div className='navbar-end'>
   <div className="hidden md:flex">
 {
  user?<button onClick={handleSignOut} className='btn'>Log Out</button>:
  <>
  <NavLink  className={({ isActive }) =>
    isActive ? "bg-yellow-400 ml-2 rounded-md" : ""
  } to='/signin'><button  className='px-4 py-2 ml-2 border border-yellow-400 rounded-md dark:text-white'>Login</button></NavLink>
  </>
 }
  </div>
 <div className='mx-2'>
   <ThemeToggle></ThemeToggle>
 </div>
 </div>
</div>
  )
}
