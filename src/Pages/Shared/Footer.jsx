import React from 'react'
import { FaFacebook,FaFacebookMessenger } from "react-icons/fa";
export default function Footer() {
  return (
   <footer className="p-10 footer sm:footer-horizontal bg-base-300 dark:bg-neutral-800 text-neutral-content">
  <nav>
    <h6 className="text-lg text-black dark:text-white regular">Services</h6>
    <a className="text-lg text-black dark:text-white regular">Branding</a>
    <a className="text-lg text-black dark:text-white regular">Design</a>
    <a className="text-lg text-black dark:text-white regular">Marketing</a>
    <a className="text-lg text-black dark:text-white regular">Advertisement</a>
  </nav>
  <nav>
    <h6 className="text-lg text-black dark:text-white regular">Company</h6>
    <a className="text-lg text-black dark:text-white regular">About us</a>
    <a className="text-lg text-black dark:text-white regular">Contact</a>
    <a className="text-lg text-black dark:text-white regular">Jobs</a>
    <a className="text-lg text-black dark:text-white regular">Press kit</a>
  </nav>
  <nav>
    <h6 className="text-lg text-black dark:text-white regular">Legal</h6>
    <a className="text-lg text-black dark:text-white regular">Terms of use</a>
    <a className="text-lg text-black dark:text-white regular">Privacy policy</a>
    <a className="text-lg text-black dark:text-white regular">Cookie policy</a>
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
