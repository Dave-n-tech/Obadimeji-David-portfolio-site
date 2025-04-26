"use client";
import { useState, useEffect, useTransition } from "react";
import { sendEmail } from "../actions/sendEmail";

const ContactForm = () => {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 3000); // Hide after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const res = await sendEmail(formData);
      setStatus("Message sent successfully!");
    });
  };

  return (
    <form action={handleSubmit} className="space-y-4">
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
        className={`w-full font-semibold py-2 px-4 rounded ${
          isPending
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-teal-600 hover:bg-teal-700 text-white"
        }`}
        disabled={isPending}
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>
      {status && (
        <p className="absolute right-1/2 md:right-16 -translate-x-1/2 bottom-[-3rem] text-center text-sm text-green-600 bg-gray-100 p-2 animate-slideInRight">
          {status}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
