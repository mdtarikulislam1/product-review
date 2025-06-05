import React from 'react'
import { Outlet } from 'react-router'
import Navber from '../Pages/Shared/Navber'
import Footer from '../Pages/Shared/Footer'

export default function Rootlayout() {
  return (
   <>
 <div className=' dark:bg-neutral-800'>
   <div className='mx-auto max-w-11/12'>
   <Navber></Navber>
   <Outlet></Outlet>
   <Footer></Footer>
  </div>
 </div>
   </>
  )
}
