"use client";

import { useState, useEffect } from "react";
import { FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";
import { PERSONAL_INFO } from "@/config/constants";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showXMessage, setShowXMessage] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    const { name, email, message } = formData;

    if (name && email && message) {
      try {
        setIsSending(true);
        const result = await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
          {
            from_name: name,
            from_email: email,
            message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
        );
        console.log(result.text);
        setSubmitted(true);
        toast.success("Message sent successfully!");
      } catch (error) {
        console.error(error);
        toast.error("Failed to send message. Try again later.");
      } finally {
        setIsSending(false);
      }
    } else {
      toast.error("Please fill out all fields.");
    }
  };

  const handleXClick = () => {
    setShowXMessage(true);
    setTimeout(() => setShowXMessage(false), 2000);
  };

  return (
    <section id="contact-section" className="contact-section min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-16">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="text-center mb-10">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
        >
          Let&apos;s Connect
          <hr className="w-16 mx-auto mt-2 border-b-4 border-blue-500 dark:border-[#64ffda]" />
        </motion.h2>
        <motion.p
          className="mt-4 text-md sm:text-lg text-gray-700 dark:text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Whether it&apos;s a collaboration, an opportunity, or just a friendly hello — I&apos;m always open to connect!
        </motion.p>
      </div>

      <motion.div
        className="w-full max-w-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-6 sm:p-8 rounded-xl shadow-xl border border-gray-300 dark:border-gray-700"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {submitted ? (
          <div className="text-center text-lg text-green-600 dark:text-green-400 font-semibold">
            Thank you! Your message has been sent. 🙌
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
            <input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white shadow-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#64ffda] transition-all"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white shadow-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#64ffda] transition-all"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white shadow-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#64ffda] transition-all"
              required
            />
            <button
              type="submit"
              disabled={isSending}
              className="w-full p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 dark:from-[#64ffda] dark:to-[#2cc88a] text-white dark:text-black font-bold shadow-md hover:scale-105 transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </motion.div>

      <div className="flex space-x-6 mt-10">
        <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl text-gray-900 dark:text-white hover:text-blue-500 transition-transform transform hover:scale-110" />
        </a>
        <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl text-gray-900 dark:text-white hover:text-gray-700 transition-transform transform hover:scale-110" />
        </a>
        <button onClick={handleXClick}>
          <FaXTwitter className="text-3xl text-gray-900 dark:text-white hover:text-gray-400 transition-transform transform hover:scale-110" />
        </button>
      </div>

      {showXMessage && (
        <div className="mt-4 text-red-500 dark:text-red-400 font-semibold animate-fade-in">
          ❌ I don&apos;t have an X account!
        </div>
      )}
    </section>
  );
}
