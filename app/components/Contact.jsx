"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/assets/assets";

const formSecret = process.env.NEXT_PUBLIC_WEB3FORM_SECRET;

const Contact = () => {
  const [result, setResult] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", formSecret);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form submitted successfully!");
      event.target.reset();
      setShowThankYou(true);
      setTimeout(() => {
        window.location.hash = "#top";
        setShowThankYou(false)
        setResult("")
      }, 5000);
    } else {
      console.error("Error:", data);
      setResult(data.message);
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-20 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[90%_auto] dark:bg-none"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center text-5xl font-Ovo"
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Got a project in mind? Let’s chat and bring your ideas to life. I’d love
        to collaborate and create something amazing—just drop me a message!
      </motion.p>

      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-2xl mx-auto space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="p-3 rounded-md border border-gray-400 bg-white dark:bg-darkHover/30 dark:border-white/90 outline-none"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="p-3 rounded-md border border-gray-400 bg-white dark:bg-darkHover/30 dark:border-white/90 outline-none"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          />
        </div>

        <motion.textarea
          name="message"
          rows="6"
          placeholder="Type your message..."
          required
          className="w-full p-4 rounded-md border border-gray-400 bg-white dark:bg-darkHover/30 dark:border-white/90 outline-none"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="py-3 px-8 flex items-center justify-center gap-3 bg-black/80 text-white rounded-full mx-auto hover:bg-black dark:bg-transparent dark:border dark:border-white/70 dark:hover:border-darkHover"
        >
          Send Message
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </motion.button>

        <p className="text-center mt-4 text-sm font-medium text-gray-600 dark:text-white/80">
          {result}
        </p>
      </motion.form>

      {/* Thank You Card */}
      {showThankYou && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-darkHover text-center px-8 py-6 rounded-2xl shadow-2xl max-w-md w-full border dark:border-white/30"
        >
          <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">
            🎉 Thank You!
          </h3>
          <p className="text-green-950 dark:text-gray-300 mb-4">
            Thanks for getting in touch! I will get back to you soon.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Redirecting to the top...
          </p>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Contact;
