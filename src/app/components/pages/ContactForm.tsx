'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function ContactForm() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="min-h-screen bg-[#0071c2] text-white px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 sm:py-20 lg:py-28 flex flex-col lg:flex-row gap-12">
      {/* Left Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="w-full lg:w-1/2"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Get in touch</h1>
        <div className="border-b border-white w-16 mb-4 sm:mb-6"></div>
        <p className="text-base sm:text-lg mb-4 sm:mb-6">For general enquiries</p>
        <div className="space-y-4 text-sm sm:text-base">
          <div>
            <h4 className="font-semibold">Address :</h4>
            <p>110, 16th Road, Chembur, Mumbai - 400071</p>
          </div>
          <div>
            <h4 className="font-semibold">Phone :</h4>
            <p>+91 22 25208822</p>
          </div>
          <div>
            <h4 className="font-semibold">Email :</h4>
            <p>info@supremegroup.co.in</p>
          </div>
        </div>
      </motion.div>

      {/* Right Form */}
      <motion.form
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="w-full lg:w-1/2 space-y-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Full name"
          className="w-full bg-transparent border-b border-white p-2 focus:outline-none placeholder-white placeholder-opacity-80"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-transparent border-b border-white p-2 focus:outline-none placeholder-white placeholder-opacity-80"
        />
        <input
          type="text"
          placeholder="Company"
          className="w-full bg-transparent border-b border-white p-2 focus:outline-none placeholder-white placeholder-opacity-80"
        />
        <textarea
          placeholder="Message"
          className="w-full bg-transparent border-b border-white p-2 focus:outline-none placeholder-white placeholder-opacity-80"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="px-6 sm:px-8 py-2 border border-white rounded-full hover:bg-white hover:text-[#0071c2] transition-all"
        >
          Send
        </button>
      </motion.form>
    </section>
  );
}
