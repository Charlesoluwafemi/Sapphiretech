// pages/services.js (Our Services Page)
import React from 'react';
import Image from 'next/image';

const ServicesPage = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-r from-green-500 to-blue-500 text-center text-white font-sans">
  <div className="container mx-auto">
    <h1 className="text-5xl font-extrabold mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
      Elevate Your Business
    </h1>
    <p className="text-lg max-w-2xl mx-auto mb-8" style={{ fontFamily: "'Lora', serif" }}>
      Discover an exceptional array of services crafted to launch your business into a realm of unprecedented success.
    </p>
    <p className="text-md max-w-xl mx-auto" style={{ fontFamily: "'Lora', serif" }}>
      Join us on this transformative journey, where innovation meets excellence, and watch your vision come to life!
    </p>
  </div>
</section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-blue-600 mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-shadow">
              <Image className="w-18 h-18 mx-auto mb-4" src="/images/webdev.jpg" alt="Website Development" />
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Website Development</h3>
              <p className="text-gray-700">We provide full-cycle web development services that align with your business objectives.</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-shadow">
              <Image className="w-18 h-18 mx-auto mb-4" src="/images/app1.png" alt="Mobile App Development" />
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Mobile App Development</h3>
              <p className="text-gray-700">Delivering mobile applications that boost engagement and performance.</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-shadow">
              <Image className="w-18 h-18 mx-auto mb-4" src="/images/automation.png" alt="Automation Software" />
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Automation Software</h3>
              <p className="text-gray-700">Our automation solutions help streamline business processes and reduce costs.</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-shadow">
              <Image className="w-18 h-18 mx-auto mb-4" src="/images/blockchain1.jpg" alt="Blockchain Development" />
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Blockchain Development</h3>
              <p className="text-gray-700">Providing cutting-edge blockchain development services for decentralized solutions.</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-shadow">
              <Image className="w-18 h-18 mx-auto mb-4" src="/images/chatbot.jpg" alt="Chatbot Development" />
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Chatbot Development</h3>
              <p className="text-gray-700">Creating intelligent chatbots to enhance customer engagement and automate communication.</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-shadow">
              <Image className="w-18 h-18 mx-auto mb-4" src="/images/ai1.jpg" alt="AI Solutions" />
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">AI Solutions</h3>
              <p className="text-gray-700">Offering AI-powered solutions that drive innovation and improve business outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-blue-600 mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="p-8 bg-gray-50 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Tailored Solutions</h3>
              <p className="text-gray-700">We provide customized solutions that meet your unique business needs and challenges.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Expert Team</h3>
              <p className="text-gray-700">Our team of experienced professionals is dedicated to delivering top-notch services.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Proven Track Record</h3>
              <p className="text-gray-700">We have a proven track record of success with clients from a wide range of industries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-100 to-blue-200 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-blue-600 mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <p className="text-gray-700">“Their expertise in web development has helped transform our online presence, driving significant growth in user engagement.”</p>
              <h3 className="mt-4 text-lg font-semibold text-blue-600">- Lisa Adams, Marketing Director</h3>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <p className="text-gray-700">“The mobile app they built for us exceeded our expectations and has become a core component of our business operations.”</p>
              <h3 className="mt-4 text-lg font-semibold text-blue-600">- John Rivera, CEO of Tech Solutions</h3>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <p className="text-gray-700">“Their AI-powered chatbot improved our customer service dramatically, reducing response time by 50%.”</p>
              <h3 className="mt-4 text-lg font-semibold text-blue-600">- Maria Johnson, Customer Experience Manager</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">Let’s Build Your Vision Together</h2>
          <p className="text-lg max-w-2xl mx-auto mb-12">
            Get in touch with us today to learn how we can help bring your ideas to life with our innovative solutions.
          </p>
          <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition">Contact Us</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white text-center">
        <div className="container mx-auto">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;
