"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhatIsEms() {
  return (
    <section className="max-md:text-center w-full py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* TEXT */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 mb-5">
            WHAT IS <span className="text-[#FF8F21]">EMS?</span>
          </h2>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            EMS is an international postal Express Mail Service for documents
            and goods, offered by postal operators of the Universal Postal Union
            (UPU). The UPU is the main global forum for cooperation between
            governments and postal organizations. It maintains the universal
            postal network, sets rules for international exchanges, and supports
            service quality improvements for its 191 member countries.
            <br />
            <br />
            The EMS Cooperative was established in 1998 to promote cooperation
            and ensure fast, competitive EMS services worldwide — helping
            customers receive their parcels efficiently and securely.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/upu.png" // replace with your emblem path
            width={400}
            height={400}
            alt="EMS Emblem"
            className="opacity-90"
          />
        </motion.div>
      </div>
    </section>
  );
}
