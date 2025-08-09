import { Link } from "react-router";

const ServiceCard = ({ service}) => {
  const { _id, title, imageurl, description, category, price } = service;

  return (
    <div
      className="overflow-hidden transition duration-300 bg-white shadow-lg dark:bg-gray-800 rounded-2xl hover:shadow-2xl max-w-80">
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
          <span className="text-sm font-semibold">
            {category}
          </span>
          <span className="font-semibold text-green-600 dark:text-green-300">
            ${price}
          </span>
        </div>
        <Link
          to={`/servicedetails/${_id}`}
          className="inline-block w-full py-2 text-center btn "
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
