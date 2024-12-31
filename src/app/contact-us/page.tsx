import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center text-black"
        style={{ backgroundImage: "url('/images/hero1.avif')" }}
      >
        <div className="text-center">{/* Hero Section */}</div>
      </div>
      <div className="flex flex-col md:flex-row justify-between px-8 md:px-32 py-16">
        {/* Contact Form Section */}
        <div className="w-full p-5 md:w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-black">Contact us</h2>
          <p className="text-black mb-6">
            Alienum phaedrum torquatos nec eu, vis detractis periculis ex, nihil
            expetendis in mei. Mei an pericula euripidis, hinc partem ei est,
            eos ei nisl.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
            />
            <textarea
              placeholder="Message*"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Offices Section */}
        <div className="w-full p-5 md:w-1/2 mt-10 md:mt-0">
          <h2 className="text-2xl font-bold mb-4 text-black">Offices</h2>
          <p className="text-black mb-6">
            Alienum phaedrum torquatos nec eu, vis detractis periculis ex, nihil
            expetendis in mei. Mei an pericula euripidis, hinc partem ei est.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-black">Address</h3>
              <p className="text-black">
                226 West 26th Street, New York, NY 10001, USA
              </p>
            </div>
            <div>
              <h3 className="font-bold text-black">Phones</h3>
              <p className="text-black">Phone: +91 111 111 11</p>
              <p className="text-black">Cell: +91 111 111 11</p>
            </div>
            <div>
              <h3 className="font-bold text-black">Emails</h3>
              <p className="text-black">node@qodeinteractive.com</p>
              <p className="text-black">node@qodeinteractive.com</p>
            </div>
          </div>
        </div>
      </div>

      

      {/* Map Section */}
      <div className="px-8 md:px-0 my-2 ">
        {/* <h2 className="text-2xl font-bold mb-4 text-black">Our Location</h2> */}
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56044.11187205277!2d77.27051938391531!3d28.607066123456345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4eafae0efa9%3A0x83064c9a3a1d1b4d!2sMayur%20Vihar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1735668635391!5m2!1sen!2sin"
            className="w-full h-full border-0"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
