import React from 'react'
import { FaFacebook,FaFacebookMessenger } from "react-icons/fa";
export default function Footer() {
  return (
   <footer className="p-10 footer sm:footer-horizontal bg-gray-50 dark:bg-[#343a40] text-neutral-content">
  <nav>
    <h6 className="text-lg text-black dark:text-white ">Services</h6>
    <a className="text-lg text-black dark:text-white ">Branding</a>
    <a className="text-lg text-black dark:text-white ">Design</a>
    <a className="text-lg text-black dark:text-white ">Marketing</a>
    <a className="text-lg text-black dark:text-white ">Advertisement</a>
  </nav>
  <nav>
    <h6 className="text-lg text-black dark:text-white ">Company</h6>
    <a className="text-lg text-black dark:text-white ">About us</a>
    <a className="text-lg text-black dark:text-white ">Contact</a>
    <a className="text-lg text-black dark:text-white ">Jobs</a>
    <a className="text-lg text-black dark:text-white ">Press kit</a>
  </nav>
  <nav>
    <h6 className="text-lg text-black dark:text-white ">Legal</h6>
    <a className="text-lg text-black dark:text-white ">Terms of use</a>
    <a className="text-lg text-black dark:text-white ">Privacy policy</a>
    <a className="text-lg text-black dark:text-white ">Cookie policy</a>
    <div className='flex gap-2'>
   <div className='text-3xl text-black dark:text-white'>
     <FaFacebook />
   </div>
   <div className='text-3xl text-black dark:text-white'>
    <FaFacebookMessenger />
   </div>
   <div className='text-3xl text-black dark:text-white'>
     <FaFacebook />
   </div>
    </div>
  </nav>
</footer>
  )
}
