import React from 'react'
import { FaFacebook,FaFacebookMessenger } from "react-icons/fa";
export default function Footer() {
  return (
   <footer className="footer sm:footer-horizontal bg-base-300 dark:bg-neutral-800 text-neutral-content p-10">
  <nav>
    <h6 className=" dark:text-white text-black text-lg">Services</h6>
    <a className=" dark:text-white text-black text-lg">Branding</a>
    <a className=" dark:text-white text-black text-lg">Design</a>
    <a className=" dark:text-white text-black text-lg">Marketing</a>
    <a className=" dark:text-white text-black text-lg">Advertisement</a>
  </nav>
  <nav>
    <h6 className=" dark:text-white text-black text-lg">Company</h6>
    <a className=" dark:text-white text-black text-lg">About us</a>
    <a className=" dark:text-white text-black text-lg">Contact</a>
    <a className=" dark:text-white text-black text-lg">Jobs</a>
    <a className=" dark:text-white text-black text-lg">Press kit</a>
  </nav>
  <nav>
    <h6 className=" dark:text-white text-black text-lg">Legal</h6>
    <a className=" dark:text-white text-black text-lg">Terms of use</a>
    <a className=" dark:text-white text-black text-lg">Privacy policy</a>
    <a className=" dark:text-white text-black text-lg">Cookie policy</a>
    <div className='flex gap-2'>
   <div className='text-black dark:text-white text-3xl'>
     <FaFacebook />
   </div>
   <div className='text-black dark:text-white text-3xl'>
    <FaFacebookMessenger />
   </div>
   <div className='text-black dark:text-white text-3xl'>
     <FaFacebook />
   </div>
    </div>
  </nav>
</footer>
  )
}
