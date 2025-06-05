// AboutPage.jsx
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <div className="px-6 py-16 space-y-20 text-gray-800 bg-white dark:text-white dark:bg-neutral-800 md:px-20">
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{  once: false, amount: 0.5 }}
        transition={{ duration: 0.8, }}
        variants={fadeInUp}
        className="space-y-4 text-center"
      >
        <h1 className="text-4xl font-bold regular">About Our Service</h1>
        <p className="max-w-2xl mx-auto text-2xl regular">
          We provide a transparent and user-friendly review platform to help customers make informed decisions. Explore real feedback and improve your service.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
       viewport={{  once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={fadeInUp}
        className="grid items-center gap-10 md:grid-cols-2"
      >
        <img
          src="https://i.postimg.cc/CM89kBTb/medium-shot-young-people-with-reviews.jpg"
          alt="Review illustration"
          className="shadow-lg rounded-2xl"
        />
        <div>
          <h2 className="mb-4 text-3xl font-semibold regular">Our Mission</h2>
          <p className="text-2xl regular">
            Our goal is to build trust through honest customer reviews. We empower users to voice their experiences and help businesses grow through transparent feedback.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{  once: false, amount: 0.5 }}
        transition={{ duration: 1.2 }}
        variants={fadeInUp}
        className="p-10 bg-white rounded-2xl dark:bg-neutral-800"
      >
        <h2 className="mb-8 text-4xl font-semibold text-center regular">Why Choose Us?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {["Authentic Reviews", "Verified Users", "Insightful Analytics"].map((title, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 space-y-2 text-center bg-white shadow-md rounded-xl"
            >
              <h3 className="text-3xl font-semibold regular dark:text-black">{title}</h3>
              <p className="text-2xl text-gray-600 regular">
                {title === "Authentic Reviews"
                  ? "Real opinions from real users — no fake feedback."
                  : title === "Verified Users"
                  ? "Every reviewer is verified for authenticity."
                  : "Get powerful analytics from customer sentiment."}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
