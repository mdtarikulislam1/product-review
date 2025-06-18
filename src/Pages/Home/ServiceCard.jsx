import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";
import { Link } from 'react-router';
const ServiceCard = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
  useEffect(() => {
    axios.get('https://review-system-server-rouge.vercel.app/product')
      .then(response => {
        const limitedServices = response.data.slice(0, 6); // ✅ শুধু প্রথম ৬টা item
        setServices(limitedServices);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <span className="loading loading-dots loading-xl"></span>
  }

  return (
   <motion.div
    initial="hidden"
        whileInView="visible"
       viewport={{  once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={fadeInUp}
   >
    <h2 className='text-3xl font-bold text-center dark:text-white'><span className='text-yellow-500'>Featured</span> Services</h2>
     <div className="grid grid-cols-1 gap-4 my-10 sm:grid-cols-2 md:grid-cols-3">
      {services.map(service => (
        <div key={service._id} className="p-4 rounded-lg shadow-2xl dark:bg-gray-100">
         <img className='w-full h-56' src={service?.imageurl} alt="" />
         <p className='py-2 text-xl font-semibold'>{service?.title}</p>
           <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">
          {service?.description.length > 100 ? service?.description.slice(0, 100) + "..." : service?.description}
          </p>
         <div className='flex items-center justify-between py-3'>
            <p className='font-medium'>Price ${service?.price}</p>
            <Link to={`/details/${service._id}`}><button className='btn'>Details</button></Link>
         </div>
        </div>
      ))}
    </div>
   </motion.div>
  );
};

export default ServiceCard;
