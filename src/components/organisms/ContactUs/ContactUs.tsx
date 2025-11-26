"use client";

import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ContactGrid() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-14 lg:px-24">
      <h1 className="text-center text-3xl font-bold text-blue-800 mb-14 tracking-wide">
        Contact Us
      </h1>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* LEFT — CONTACT INFO */}
        <motion.div
          className="space-y-8"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* CONTACT INFORMATION */}
          <div className="bg-white shadow-lg p-8 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold text-[#0B3A75] mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* PHONE */}
              <div className="flex items-start gap-4">
                <FiPhoneCall className="text-[#FF8F21] text-2xl" />
                <div>
                  <p className="font-semibold text-gray-700">Phone</p>
                  <p className="text-[#0B3A75] font-bold text-lg">
                    0 23 59 34 34
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <FiMail className="text-[#FF8F21] text-2xl" />
                <div>
                  <p className="font-semibold text-gray-700">Email</p>
                  <p className="text-[#0B3A75]">contact@ems.dz</p>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex items-start gap-4">
                <FiMapPin className="text-[#FF8F21] text-2xl" />
                <div>
                  <p className="font-semibold text-gray-700">Adresse</p>
                  <p className="text-[#0B3A75]">(Put the EMS Address Here)</p>
                </div>
              </div>
            </div>
          </div>

          {/* BUSINESS HOURS */}
          <div className="bg-white shadow-lg p-8 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold text-[#0B3A75] mb-6">
              Business Hours
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between text-gray-700">
                <span className="font-medium">Samedi – Jeudi</span>
                <span>08h00 – 16h30</span>
              </div>

              <div className="flex justify-between text-gray-700">
                <span className="font-medium">Vendredi</span>
                <span>Fermé</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — FORM */}
        <motion.div
          className="bg-white shadow-lg p-8 rounded-2xl border border-gray-100 flex flex-col"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-[#0B3A75] mb-6">
            Get In Touch
          </h3>
          <form className="h-full flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name*"
                className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <input
                type="text"
                placeholder="Phone number*"
                className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            <input
              type="email"
              placeholder="Your email*"
              className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-orange-500 outline-none"
            />

            <textarea
              placeholder="Your message*"
              className="w-full border rounded-lg px-4 py-3 h-32 text-gray-700 focus:ring-2 focus:ring-orange-500 outline-none"
            />

            <button className="w-full bg-[#FF8F21] hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
