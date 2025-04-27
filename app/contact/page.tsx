import React from "react";
import ContactForm from "../components/ContactForm";
import DirectToNextPage from "../components/DirectToNextPage";

const Contact = () => {
  return (
    <main className="container min-h-screen px-4 pt-0 pb-16 md:pb-12 md:px-36">
      <div className="max-w-2xl w-full p-8">
        <h1 className="text-5xl font-bold mb-6">Contact Me</h1>
        <ContactForm />
      </div>
      <DirectToNextPage label="Back to home" url="/" />
    </main>
  );
};

export default Contact;
