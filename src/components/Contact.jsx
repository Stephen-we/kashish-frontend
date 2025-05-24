import React from 'react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contact = () => {
  const [result, setResult] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    const data = {
      name: formData.get('Name'),
      email: formData.get('Email'),
      phone: formData.get('Phone'),
      message: formData.get('Message')
    };

    try {
//      const res = await fetch('http://localhost:5000/send-email', {
       fetch("https://ss-railling.onrender.com/send-email", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (json.success) {
        toast.success("Message sent successfully!");
        event.target.reset();
      } else {
        toast.error("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error. Please try again later.");
    } finally {
      setLoading(false);
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-3xl sm:text-5xl font-bold mb-4">
        Get In <span className="text-blue-600 underline decoration-2">Touch</span>
      </h1>
      <p className="text-gray-500 max-w-xl mx-auto mb-12">
        We’d love to hear from you! Whether you have a question or just want to say hi.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded shadow-md text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold">Your Name</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4"
              type="text"
              name="Name"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Your Email</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4"
              type="email"
              name="Email"
              required
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block mb-2 font-semibold">Phone</label>
          <input
            className="w-full border border-gray-300 rounded py-3 px-4"
            type="tel"
            name="Phone"
            pattern="[0-9]{10}"
            title="Please enter exactly 10 digits"
            required
          />
        </div>

        <div className="mt-6">
          <label className="block mb-2 font-semibold">Message</label>
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 h-40 resize-none"
            name="Message"
            required
          ></textarea>
        </div>

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded mt-6"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Sending...' : result || 'Send Message'}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
