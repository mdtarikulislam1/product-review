import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

export default function Details() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/product/${id}`)
      .then(res => res.json())
      .then(data => {
        setService(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center dark:text-white">Loading...</p>;
  if (!service) return <p className="text-center text-red-500 dark:text-red-400">Service not found</p>;

  const addedDate = new Date(service?.createdAt || Date.now()).toLocaleDateString();

  return (
    <div className="max-w-5xl px-4 py-10 mx-auto dark:text-white min-h-[calc(100vh-300px)]">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <img src={service.imageurl} alt={service.title} className="object-cover w-full shadow-md h-80 rounded-xl" />
        </div>

        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{service.title}</h2>
          <p className="text-gray-600 dark:text-gray-300">{service.description}</p>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <p><span className="font-semibold text-gray-700 dark:text-gray-300">Company:</span> {service.company || "N/A"}</p>
            <p><span className="font-semibold text-gray-700 dark:text-gray-300">Website:</span> <a href={service.website} className="text-blue-500 underline" target="_blank" rel="noreferrer">{service.website || "N/A"}</a></p>
            <p><span className="font-semibold text-gray-700 dark:text-gray-300">Category:</span> {service.category}</p>
            <p><span className="font-semibold text-gray-700 dark:text-gray-300">Price:</span> ${service.price}</p>
            <p><span className="font-semibold text-gray-700 dark:text-gray-300">Added:</span> {addedDate}</p>
            <p><span className="font-semibold text-gray-700 dark:text-gray-300">Posted by:</span> {service.userEmail || "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
