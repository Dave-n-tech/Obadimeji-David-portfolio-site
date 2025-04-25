import React from "react";

const ContactForm = () => {
  return (
    <form className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-3 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full p-3 border rounded"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        rows={5}
        className="w-full p-3 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded"
      >
        Send Message
      </button>
      {/* {status && <p className="text-center text-sm text-gray-600">{status}</p>} */}
    </form>
  );
};

export default ContactForm;
