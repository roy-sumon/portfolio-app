"use client";
import React, { useState } from "react";
import { FiSend, FiCheckCircle } from "react-icons/fi";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  return (
    <div className="w-full max-w-xl">
      <form
        onSubmit={handleSubmit}
        className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 space-y-4 shadow-lg"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-medium text-slate-700 dark:text-gray-300 mb-1.5"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              required
              className="w-full bg-slate-100/90 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium text-slate-700 dark:text-gray-300 mb-1.5"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. john@example.com"
              required
              className="w-full bg-slate-100/90 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-medium text-slate-700 dark:text-gray-300 mb-1.5"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+880 1XXX-XXXXXX"
              className="w-full bg-slate-100/90 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-medium text-slate-700 dark:text-gray-300 mb-1.5"
            >
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Inquiry"
              required
              className="w-full bg-slate-100/90 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-xs font-medium text-slate-700 dark:text-gray-300 mb-1.5"
          >
            Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project, goals, or requirements..."
            required
            className="w-full bg-slate-100/90 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors resize-none"
          ></textarea>
        </div>

        {isSuccess && (
          <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-medium animate-in fade-in duration-300">
            <FiCheckCircle className="w-4 h-4 shrink-0" />
            <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-6 rounded-xl bg-primary hover:bg-primaryHover text-white font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <FiSend className="w-4 h-4" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default Form;
