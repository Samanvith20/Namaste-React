import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-6">
        Feel free to reach out to us with any questions, feedback, or inquiries.
        We'd love to hear from you!
      </p>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
            Your Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold text-gray-600">
            Your Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Type your message here"
            className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          onClick={alert("Thank you for submitting ")}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
