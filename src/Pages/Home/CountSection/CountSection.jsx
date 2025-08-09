import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  { id: 1, label: 'Happy Users', value: 1200 },
  { id: 2, label: 'Total Reviews', value: 3500 },
  { id: 3, label: 'Products Rated', value: 780 },
];

const CountSection = () => {
  return (
    <div className="px-4 py-12 bg-white dark:bg-neutral-800 sm:px-6 lg:px-8">
      <div className="mx-auto text-center max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-xl font-bold tracking-tight text-gray-900 dark:text-white "
        >
          Trusted by Our Users
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{  once: false, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-gray-100 shadow-md rounded-2xl dark:bg-neutral-700"
            >
              <h3 className="text-xl font-extrabold text-yellow-500">
                <CountUp
               end={stat.value}
               duration={2}
               separator=","
               enableScrollSpy
               scrollSpyOnce
              />+
              </h3>
              <p className="mt-2 font-medium text-gray-700 dark:text-gray-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountSection;
