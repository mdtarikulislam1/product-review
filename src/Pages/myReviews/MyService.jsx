import { use, useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";

Modal.setAppElement('#root'); 

const MyServices = () => {
  const { user } = use(AuthContext)
  const [services, setServices] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
console.log(services)
  useEffect(() => {
    axios.get(`https://review-system-server-rouge.vercel.app/my-services?email=${user.email}`)
      .then(res => setServices(res.data))
      .catch(err => console.error(err));
  }, [user.email]);

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`https://review-system-server-rouge.vercel.app/services/${deleteId}`);
      if (res.data.deletedCount > 0) {
        toast.success("Service deleted");
        setServices(services.filter(service => service._id !== deleteId));
        setDeleteId(null);
      }
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="max-w-6xl px-4 py-10 mx-auto dark:text-white min-h-[calc(100vh-300px)]">
      <h2 className="mb-6 text-3xl font-bold">My Services</h2>

      <div className="overflow-x-auto">
        <table className="w-full border dark:border-gray-700">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map(service => (
              <tr key={service._id} className="border-t dark:border-gray-700">
                <td className="px-4 py-2">{service.title}</td>
                <td className="px-4 py-2">${service.price}</td>
                <td className="px-4 py-2">{service.category}</td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    onClick={() => setDeleteId(service._id)}
                    className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={!!deleteId} onRequestClose={() => setDeleteId(null)} className="max-w-sm p-6 mx-auto mt-40 text-center bg-white rounded shadow dark:bg-gray-900">
        <p className="mb-4 text-lg">Are you sure you want to delete this service?</p>
        <div className="flex justify-center space-x-4">
          <button onClick={() => setDeleteId(null)} className="px-4 py-2 bg-gray-300 rounded dark:bg-gray-700">Cancel</button>
          <button onClick={handleDelete} className="px-4 py-2 text-white bg-red-600 rounded">Delete</button>
        </div>
      </Modal>
    </div>
  );
};

export default MyServices;
