import { motion } from "motion/react"

const partners = [
  {
    name: "TechNova Solutions",
    logo: "https://i.postimg.cc/KvmJyvcB/download-3.png", 
    description:
      "Provides cutting-edge cloud infrastructure and AI integration services.",
  },
  {
    name: "GreenByte Analytics",
    logo: "https://i.postimg.cc/q76GGNQV/download-4.png",
    description:
      "Monitors and reduces environmental impact through real-time sustainability analytics.",
  },
  {
    name: "CodeCraft Studios",
    logo: "https://i.postimg.cc/2yrFm2Yr/download-1.jpg",
    description:
      "Supports full-stack development and delivers top-tier UI/UX architecture.",
  },
  {
    name: "FinEdge Capital",
    logo: "https://i.postimg.cc/wBY1S3gd/download-3.jpg",
    description:
      "Offers strategic financial advisory to support growth and funding.",
  },
  {
    name: "EduSpark Academy",
    logo: "https://i.postimg.cc/L67Y3NW5/download-2.jpg",
    description:
      "Collaborates on educational content and interactive skill-building workshops.",
  },
];

export default function PartnersSection() {
  return (
    <section className="px-4 py-12 md:px-12 bg-gray-50 dark:bg-neutral-800">
      <div className="mb-10 text-center">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white ">🌟 Meet Our Partners</h2>
        <p className="mt-2 text-gray-500 dark:text-white">
          Collaborating with industry leaders to bring you excellence.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{  once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
           <div className="h-full transition-shadow duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl">
          <div className="flex flex-col items-center p-6 space-y-4 text-center">
          <img
          src={partner.logo}
         alt={partner.name}
          className="object-contain w-20 h-20 rounded-full"/>
          <h3 className="text-2xl font-semibold text-gray-800 ">{partner.name}</h3>
          <p className="text-xl text-gray-600 ">{partner.description}</p>
         </div>
         </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
