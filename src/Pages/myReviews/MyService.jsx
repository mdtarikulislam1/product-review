import { use, useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";

Modal.setAppElement('#root'); 

const MyServices = () => {
  const { user } = use(AuthContext)
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
console.log(services)
  useEffect(() => {
    axios.get(`https://review-system-server-rouge.vercel.app/my-services?email=${user.email}`)
      .then(res => setServices(res.data))
      .catch(err => console.error(err));
  }, [user.email]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedService = {
      title: form.title.value,
      description: form.description.value,
      price: parseFloat(form.price.value),
      category: form.category.value,
      website: form.website.value,
    };

    try {
      const res = await axios.patch(`https://review-system-server-rouge.vercel.app/services/${editingService._id}`, updatedService);
      if (res.data.modifiedCount > 0) {
        toast.success("Service updated");
        const updatedList = services.map(service =>
          service._id === editingService._id ? { ...service, ...updatedService } : service
        );
        setServices(updatedList);
        setEditingService(null);
      }
    } catch (err) {
      toast.error("Update failed");
    }
  };

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
                    onClick={() => setEditingService(service)}
                    className="px-3 py-1 text-white bg-blue-600 rounded hover:bg-blue-700"
                  >
                    Update
                  </button>
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

      <Modal isOpen={!!editingService} onRequestClose={() => setEditingService(null)} className="max-w-lg p-6 mx-auto mt-20 bg-white rounded shadow dark:bg-gray-900">
        <h3 className="mb-4 text-xl font-semibold">Update Service</h3>
        {editingService && (
          <form onSubmit={handleUpdate} className="space-y-4">
            <input name="title" defaultValue={editingService.title} className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600" required />
            <textarea name="description" defaultValue={editingService.description} className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600" required />
            <input name="price" type="number" step="0.01" defaultValue={editingService.price} className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600" required />
            <input name="category" defaultValue={editingService.category} className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600" required />
            <input name="website" defaultValue={editingService.website} className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600" />
            <div className="flex justify-end space-x-3">
              <button type="button" onClick={() => setEditingService(null)} className="px-4 py-2 bg-gray-300 rounded dark:bg-gray-700">Cancel</button>
              <button type="submit" className="px-4 py-2 text-white bg-green-600 rounded">Save</button>
            </div>
          </form>
        )}
      </Modal>

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
