import React, { use } from 'react'
import { NavLink } from 'react-router'
import { AuthContext } from '../../Contexts/AuthContext/AuthContext'
import ThemeToggle from './Darkmode'

export default function Navber() {
const {user,signOutUser}=use(AuthContext)

const handleSignOut=()=>{
  signOutUser()
  .then(result=>{
    console.log('signout')
  })
  .then(error=>{
    console.log(error)
  })
}

  return (
   <div className="navbar dark:bg-neutral-800 bg-white shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="dark:text-white btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className=" dropdown-content bg-base-100 z-1 mt-3 w-52 p-2 shadow ml-0">
        <li><NavLink  to='/'>Home</NavLink></li>
        <li><a>Item 3</a></li>
        <div className="flex flex-col gap-2 md:hidden ">
  {
    user ? (
      <button onClick={handleSignOut} className=''>Log Out</button>
    ) : (
      <>
        <NavLink to="/register" className="">Register</NavLink>
        <NavLink to="/signin" className="">Signin</NavLink>
      </>
    )
  }
</div>
      </ul>
    </div>
   <img className='w-20 h-12' src="https://i.postimg.cc/6q6bBVNs/Screenshot-2025-06-03-224450.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu-horizontal px-1">
     <li className='text-lg font-semibold'><NavLink className={({ isActive }) =>
      isActive ? "text-yellow-500" : ""
     } to='/'>Home</NavLink></li>
    </ul>
  </div>
 <div className='navbar-end'>
   <div className="hidden md:flex">
 {
  user?<button onClick={handleSignOut} className='btn'>Log Out</button>:
  <>
  <NavLink  className={({ isActive }) =>
    isActive ? "bg-yellow-400 rounded-md" : ""
  } to='/register'><button  className='border border-yellow-400 py-2 px-4 rounded-md dark:text-white'>Register</button></NavLink>
  <NavLink  className={({ isActive }) =>
    isActive ? "bg-yellow-400 ml-2 rounded-md" : ""
  } to='/signin'><button  className='border ml-2 border-yellow-400 py-2 px-4 rounded-md dark:text-white'>Signin</button></NavLink>
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
