"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);


  const sendEmail = async (formData: FormData) => {
    const name = formData.get("name") as String;
    const email = formData.get("email") as String;
    const message = formData.get("message") as String;

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        {
          name: name,
          email: email,
          subject: `New Email from ${name} via Porfolio site`,
          message: message,
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      );
    } catch (error) {
      if (error instanceof EmailJSResponseStatus) {
        console.error("EMAILJS FAILED...", error);
        return error;
      }
      console.error("Error sending email via EmailJS: ", error);
    }
  };

  const handleSubmit = async (formData: FormData) => {
    setLoading(true);
    try {
      await sendEmail(formData);
      toast.success("Message sent successfully!");
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again.");
      setLoading(false);
    } finally {
      setLoading(false);
    }
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
        className={`cursor-pointer w-full font-semibold py-2 px-4 rounded ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-teal-600 hover:bg-teal-700 text-white"
        } disabled:bg-gray-400 disabled:cursor-not-allowed`}
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
