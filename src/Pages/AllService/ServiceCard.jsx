import { motion } from "framer-motion";
import { Link } from "react-router";

const ServiceCard = ({ service,index }) => {
  const { _id, title, imageurl, description, category, price } = service;
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{  once: false, amount: 0.5 }}
    transition={{ duration: 1 }}
    variants={fadeInUp}
      className="overflow-hidden transition duration-300 bg-white shadow-lg dark:bg-gray-800 rounded-2xl hover:shadow-2xl"
    >
      <img
        src={imageurl}
        alt={title}
        className="object-cover w-full h-48"
      />
      <div className="p-5">
        <h2 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
          {title}
        </h2>
        <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">
          {description.length > 100 ? description.slice(0, 100) + "..." : description}
        </p>
        <div className="flex items-center justify-between mb-3 text-sm">
          <span className="px-2 py-1 text-blue-800 bg-blue-100 rounded dark:bg-blue-700 dark:text-blue-100">
            {category}
          </span>
          <span className="font-semibold text-green-600 dark:text-green-300">
            ${price}
          </span>
        </div>
        <Link
          to={`/servicedetails/${_id}`}
          className="inline-block w-full py-2 text-center text-white transition bg-blue-600 rounded-md dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600"
        >
          See Details
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
