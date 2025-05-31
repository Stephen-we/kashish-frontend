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
      const res = await fetch("https://ss-railling.onrender.com/send-email", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (res.ok && json.success) {
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
    <motion.section
      id="Contact"
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32"
    >
      <h2 className="text-3xl sm:text-5xl font-bold mb-4">
        Get In <span className="text-blue-600 underline decoration-2">Touch</span>
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-12">
        We’d love to hear from you! Whether you have a question or just want to say hi.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded shadow-md text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold">Your Name</label>
            <input
              type="text"
              name="Name"
              className="w-full border border-gray-300 rounded py-3 px-4"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Your Email</label>
            <input
              type="email"
              name="Email"
              className="w-full border border-gray-300 rounded py-3 px-4"
              required
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block mb-2 font-semibold">Phone</label>
          <input
            type="tel"
            name="Phone"
            pattern="[0-9]{10}"
            title="Please enter exactly 10 digits"
            className="w-full border border-gray-300 rounded py-3 px-4"
          />
        </div>

        <div className="mt-6">
          <label className="block mb-2 font-semibold">Message</label>
          <textarea
            name="Message"
            className="w-full border border-gray-300 rounded py-3 px-4 h-40 resize-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded mt-6"
        >
          {loading ? 'Sending...' : result || 'Send Message'}
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
