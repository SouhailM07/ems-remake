"use client";
import {
  FaClipboardList,
  FaBarcode,
  FaGlobe,
  FaBuilding,
  FaHeadset,
} from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: <FaMapMarkerAlt className="text-[#FF8F21] text-5xl" />,
      title: "LOCATE BRANCH / RELAY POINT",
      subtitle: "Find an agency",
    },
    {
      icon: <FaClipboardList className="text-[#FF8F21] text-5xl" />,
      title: "ESTIMATE YOUR ITEM",
      subtitle: "Pricing according to your destination",
    },
    {
      icon: <FaBarcode className="text-[#FF8F21] text-5xl" />,
      title: "FOLLOW YOUR ITEM",
      subtitle: "Track your shipments in real time",
    },
    {
      icon: <FaGlobe className="text-[#FF8F21] text-5xl" />,
      title: "INTERNATIONAL SERVICE",
      subtitle: "Send to over 185 countries",
    },
    {
      icon: <FaBuilding className="text-[#FF8F21] text-5xl" />,
      title: "EMS POST OFFICE",
      subtitle: "+50 Office available",
    },
    {
      icon: <FaHeadset className="text-[#FF8F21] text-5xl" />,
      title: "CUSTOMER SERVICE",
      subtitle: "Contact one of our advisors",
    },
  ];

  return (
    <section className="w-full py-20">
      <h2 className="text-center text-3xl font-bold text-blue-800 mb-14 tracking-wide">
        DIGITAL SERVICES
      </h2>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {services.map((service, i) => (
          <motion.li
            initial={{ y: -24, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: i * 0.2 },
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }} // hover uses this
            whileHover={{ scale: 1.05 }}
            key={i}
            className="
              bg-white rounded-xl shadow-lg shadow-blue-100
              p-10 flex flex-col items-center text-center
              border border-gray-100
              hover:shadow-xl 
              cursor-pointer
            "
          >
            {service.icon}

            <h3 className="text-blue-900 font-semibold text-lg mt-6 leading-tight">
              {service.title}
            </h3>

            <p className="text-gray-500 text-sm mt-2">{service.subtitle}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
