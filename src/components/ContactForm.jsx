import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add form submission logic (e.g., API call)
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-[#fff9f0] py-16 px-6 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-yellow-800 mb-8 text-center">Get in Touch</h2>
      {submitted && (
        <p className="bg-yellow-200 text-yellow-900 p-4 mb-6 rounded text-center font-semibold">
          Thank you for reaching out! We will get back to you soon.
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-semibold text-yellow-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold text-yellow-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Your email address"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-semibold text-yellow-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded shadow-md transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
