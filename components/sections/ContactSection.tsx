"use client";

import { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { PERSONAL_INFO } from "@/config/constants";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showXMessage, setShowXMessage] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (name && email && message) {
      const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=New Contact Form Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
      window.location.href = mailtoLink;
      setSubmitted(true);
    }
  };

  const handleXClick = () => {
    setShowXMessage(true);
    setTimeout(() => setShowXMessage(false), 2000);
  };

  if (!mounted) return null;

  return (
    <section
      id="contact-section"
      className="contact-section min-h-[calc(100vh-90px)] w-full py-16 px-6 md:px-12 flex flex-col items-center"
    >
      {/* Section Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-wide">
          Let&apos;s Connect
          <hr className="w-16 mx-auto mt-2 border-b-4 border-blue-500 dark:border-[#64ffda]" />
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-white">
          Feel free to reach out. I&apos;d love to chat! 🚀
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-2xl relative bg-white/80 dark:bg-gunmetal/80 backdrop-blur-lg p-8 rounded-xl shadow-xl border border-gray-300 dark:border-gray-700">
        {submitted ? (
          <div className="text-center text-lg text-green-600 dark:text-green-400">
            ✅ Thank you! Your email client should open now.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-lg bg-gray-100 dark:bg-charcoal text-gray-900 dark:text-white shadow-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#64ffda] transition-all"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-lg bg-gray-100 dark:bg-charcoal text-gray-900 dark:text-white shadow-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#64ffda] transition-all"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="p-3 rounded-lg bg-gray-100 dark:bg-charcoal text-gray-900 dark:text-white shadow-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#64ffda] transition-all"
              required
            />

            <button
              type="submit"
              className="w-full p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 dark:from-[#64ffda] dark:to-[#2cc88a] text-white dark:text-black font-bold shadow-md hover:scale-105 transition-all"
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-6 mt-10">
        <a href={PERSONAL_INFO.facebook} target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-3xl text-gray-900 dark:text-white hover:text-blue-600 transition-transform transform hover:scale-110" />
        </a>

        <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl text-gray-900 dark:text-white hover:text-blue-500 transition-transform transform hover:scale-110" />
        </a>

        <a href={PERSONAL_INFO.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-3xl text-gray-900 dark:text-white hover:text-pink-500 transition-transform transform hover:scale-110" />
        </a>

        <button onClick={handleXClick}>
          <FaXTwitter className="text-3xl text-gray-900 dark:text-white hover:text-gray-400 transition-transform transform hover:scale-110" />
        </button>
      </div>

      {/* X (Twitter) Message */}
      {showXMessage && (
        <div className="mt-4 text-red-500 dark:text-red-400 font-semibold animate-fade">
          ❌ I don&apos;t have an X account!
        </div>
      )}
    </section>
  );
}
