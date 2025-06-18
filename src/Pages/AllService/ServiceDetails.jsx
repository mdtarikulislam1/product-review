import { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const ServiceDetails = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);

  const [service, setService] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/services/${id}`)
      .then(res => res.json())
      .then(data => setService(data));

    fetch(`http://localhost:3000/reviews?serviceId=${id}`)
      .then(res => res.json())
      .then(data => setReviews(data));
  }, [id]);

  const handleAddReview = e => {
    e.preventDefault();

    const newReview = {
      serviceId: id,
      userName: user.displayName,
      userEmail: user.email,
      userPhoto: user.photoURL,
      text: reviewText,
      rating,
      date: new Date(),
    };

    axios.post(`http://localhost:3000/reviews`, newReview)
      .then(res => {
        if (res.data.insertedId) {
          toast.success("Review added!");
          setReviews([...reviews, newReview]);
          setReviewText("");
          setRating(0);
        }
      })
      .catch(error => {
        console.error("Failed to submit review:", error);
        toast.error("Failed to add review!");
      });
  };

  return (
    <div className="max-w-5xl p-4 mx-auto dark:text-white">
      {service && (
        <div className="mb-10">
          <img src={service.imageurl} className="object-cover w-full h-64 rounded-xl" alt="Service" />
          <h2 className="mt-4 text-3xl font-bold">{service.title}</h2>
          <p className="mt-2">{service.description}</p>
          <p className="mt-1 font-semibold text-green-500">${service.price}</p>
          <p className="mt-1 text-sm">Category: {service.category}</p>
        </div>
      )}

      {/* 🔘 Toggle Button for Reviews */}
      <div className="mt-10">
        <button
          onClick={() => setShowReviews(!showReviews)}
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          {showReviews ? "Hide Reviews" : "Show Reviews"}
        </button>

        {/* ✅ Reviews List */}
        {showReviews && (
          <div className="mt-6 space-y-5">
            <h3 className="text-2xl font-semibold">Total Reviews: {reviews.length}</h3>
            {reviews.map((r, i) => (
              <div key={i} className="p-4 border rounded-lg shadow dark:border-gray-700">
                <div className="flex items-center gap-3 mb-2">
                  <img src={r.userPhoto} className="w-10 h-10 rounded-full" alt="User" />
                  <div>
                    <p className="font-semibold">{r.userName}</p>
                    <p className="text-sm text-gray-500">{new Date(r.date).toLocaleDateString()}</p>
                  </div>
                </div>
                <p>{r.text}</p>
                <Rating
                  readonly
                  initialRating={r.rating}
                  emptySymbol={<FaStar className="text-gray-300" />}
                  fullSymbol={<FaStar className="text-yellow-400" />}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ➕ Review Form */}
      {user ? (
        <form onSubmit={handleAddReview} className="mt-10 space-y-4">
          <h3 className="text-xl font-bold">Add Your Review</h3>
          <textarea
            value={reviewText}
            onChange={e => setReviewText(e.target.value)}
            className="w-full p-3 border rounded dark:border-gray-600"
            rows={4}
            required
          ></textarea>
          <div className="flex items-center gap-3">
            <p className="text-sm">Your Rating:</p>
            <Rating
              initialRating={rating}
              onChange={rate => setRating(rate)}
              emptySymbol={<FaStar className="text-xl text-gray-300" />}
              fullSymbol={<FaStar className="text-xl text-yellow-400" />}
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Submit Review
          </button>
        </form>
      ) : (
        <p className="mt-6 text-lg font-semibold text-red-500">
          Please log in to submit a review.
        </p>
      )}
    </div>
  );
};

export default ServiceDetails;
