"use client";

import {
  FaGlobeAfrica,
  FaTruck,
  FaWarehouse,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { motion, useAnimation, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useEffect, useRef } from "react";

export default function StatsSection() {
  const stats = [
    { icon: <FaGlobeAfrica />, number: 175, suffix: "", label: "Countries" },
    { icon: <FaTruck />, number: 58, suffix: "", label: "Wilayas" },
    { icon: <FaWarehouse />, number: 53, suffix: "", label: "Relay Points" },
    {
      icon: <FaMapMarkerAlt />,
      number: 300,
      suffix: "+",
      label: "Post Offices",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <section className=" w-full bg-[#FF8F21] py-20 relative overflow-hidden">
      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/40 to-orange-600/40"></div>

      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, staggerChildren: 0.15 },
          },
        }}
        className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col items-center text-white"
          >
            <div className="text-4xl mb-3 opacity-90">{item.icon}</div>

            {/* COUNT UP */}
            {isInView ? (
              <h3 className="text-4xl font-extrabold tracking-tight">
                <CountUp
                  start={0}
                  end={item.number}
                  duration={2}
                  suffix={item.suffix}
                />
              </h3>
            ) : (
              <h3 className="text-4xl font-extrabold">{0}</h3>
            )}

            <p className="text-sm mt-1 tracking-wide uppercase opacity-90">
              {item.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
