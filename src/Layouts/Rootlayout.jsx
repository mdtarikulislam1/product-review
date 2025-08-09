import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Navber from '../Pages/Shared/Navber'
import Footer from '../Pages/Shared/Footer'
import Loading from '../Pages/Shared/Loading';

export default function Rootlayout() {
 const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
   <>
 <div className=' dark:bg-neutral-800'>
   <div>
   <Navber></Navber>
   <Outlet></Outlet>
   <Footer></Footer>
  </div>
 </div>
   </>
  )
}
