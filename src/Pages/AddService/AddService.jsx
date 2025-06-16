import React, { use } from 'react'
import { motion } from 'framer-motion';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';

export default function AddService() {

  const today = new Date().toLocaleDateString();
  const {user}=use(AuthContext)

  return (
     <motion.div
      className="flex items-center justify-center min-h-[calc(100vh-300px)] px-4 py-10 bg-gray-300 dark:bg-gray-900"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
    <form>
      <h1 className='my-8 text-3xl font-bold text-center text-gray-800 dark:text-gray-300'>Add Service</h1>
      <div className='columns-1 md:columns-2'>
        <div>
          <p className='py-2 text-lg text-gray-600 dark:text-gray-400'>Image url</p>
       <input
     className="h-auto p-2 bg-white rounded-sm w-72 dark:bg-gray-800 dark:text-gray-100"
    type="text"
    name="imageurl"
    placeholder="Enter Image Url"
   />
      </div>
        <div>
          <p className='py-2 text-lg text-gray-600 dark:text-gray-400'>Service Title</p>
        <input className='h-auto p-2 text-gray-900 bg-white rounded-sm dark:bg-gray-800 dark:text-gray-100 w-72 ' type='text' name="service" placeholder='Title'/>
      </div>
        <div>
          <p className='py-2 text-lg text-gray-600 dark:text-gray-400'>Description</p>
        <textarea name='description'
        className="w-full min-h-[120px] p-3 rounded-lg bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y shadow-sm"
        placeholder="Write your message..."
       ></textarea>
      </div>
        <div>
          <p className='py-2 text-lg text-gray-600 dark:text-gray-400'>Company Name</p>
        <input className='h-auto p-2 bg-white rounded-sm dark:bg-gray-800 dark:text-gray-100 w-72 ' type="text" name="company" placeholder='Company Name'/>
      </div>
        <div>
          <p className='py-2 text-lg text-gray-600 dark:text-gray-400'>Website</p>
        <input className='p-2 bg-white rounded-sm w-72 dark:bg-gray-800 dark:text-gray-100' type="url" name="Website" placeholder='Website'/>
      </div>
        <div>
          <p className='py-2 text-lg text-gray-600 dark:text-gray-400'>Category</p>
        <input className='p-2 bg-white rounded-sm w-72 dark:bg-gray-800 dark:text-gray-100' type="text" name="Category" placeholder='Category'/>
      </div>
        <div>
          <p className='py-2 text-lg text-gray-600 dark:text-gray-400'>Price</p>
        <input className='p-2 bg-white rounded-sm w-72 dark:bg-gray-800 dark:text-gray-100' type="number" name="price" placeholder='Price'/>
      </div>
        <div>
          <p className='py-2 text-lg text-gray-600 dark:text-gray-400'>Date</p>
        <input className='p-2 bg-white rounded-sm w-72 dark:bg-gray-800 dark:text-gray-100' type="text" name="imageurl"   value={today}
        readOnly/>
      </div>
        <div>
          <p className='py-2 text-lg text-gray-600 dark:text-gray-400'>Email</p>
        <input className='p-2 bg-white rounded-sm w-72 dark:bg-gray-800 dark:text-gray-100' type="text" name="imageurl"   value={user?.email}
        readOnly />
      </div>
      </div>
        <div><input  className='w-full py-2 my-4 text-xl font-semibold text-center text-white bg-black rounded-lg text' type="submit" value="Add Service" /></div>
    </form>
    </motion.div>
  )
}
