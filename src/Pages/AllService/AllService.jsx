import { useEffect, useState } from 'react';
import axios from 'axios';
import ServiceCard from './ServiceCard';
import { div } from 'motion/react-client';

const AllService = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://review-system-server-rouge.vercel.app/product')
      .then(response => {
        setServices(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
   return (
    <div className="flex items-center justify-center min-h-screen">
      <span className="loading loading-dots loading-xl"></span>
    </div>
  );
  }

  return (
<div className='flex items-center justify-center min-h-[calc(100vh-300px)] my-10'>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
     {
        services.map((service,index)=><ServiceCard  key={service._id} service={service} index={index}></ServiceCard>)
     }
    </div>
</div>
  );
};

export default AllService;
