import React, { useEffect, useState } from 'react';
import { easeInOut, motion } from "motion/react"
const HeroSection = () => {
  const images = [
    'https://i.postimg.cc/DZkF0j2b/2667824.jpg',
    'https://i.postimg.cc/RF7mH7Fp/4048544.jpg',
    'https://i.postimg.cc/BQQ3j1GN/5348778.jpg',
  ];
const fadeInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  return (
 <>
     <div className="px-4 my-8 text-center text-black dark:text-white">
      <motion.h1
        className="mb-4 text-4xl font-bold md:text-6xl  "
        variants={fadeInFromLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
      >
        Welcome to Our Platform
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Review services, share your experience, and discover more.
      </motion.p>
    </div>
    <div
      className="flex items-center justify-center h-screen transition-all duration-1000 bg-center bg-cover max-h-[700px]"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
    </div>
 </>
  );
};

export default HeroSection;

