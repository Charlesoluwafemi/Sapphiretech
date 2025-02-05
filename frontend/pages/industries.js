// pages/industries.js (Industries Page)
import React from 'react';

const IndustriesPage = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 py-32 text-center text-white">
        <div className="container mx-auto">
          <h1 className="text-5xl font-extrabold mb-6">Industries We Empower</h1>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Discover our innovative solutions tailored for diverse industries. We help businesses scale, innovate, and transform their operations to meet future challenges.
          </p>
          <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition">Contact Us</button>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold">Industries We Serve</h2>
          <p className="text-lg text-gray-700 mt-4">Our tailored solutions cater to various industries. Whether you&apos;re looking for innovative FinTech solutions or revolutionizing healthcare, we&apos;ve got you covered.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 container mx-auto">
          <div className="industry-card p-8 bg-white shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-blue-600">FinTech</h3>
            <p className="text-gray-700 mt-4">We provide tailored solutions for the financial technology sector, driving digital transformation.</p>
          </div>

          <div className="industry-card p-8 bg-white shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-blue-600">Government</h3>
            <p className="text-gray-700 mt-4">Empowering government agencies with cutting-edge software solutions to enhance efficiency.</p>
          </div>

          <div className="industry-card p-8 bg-white shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-blue-600">Healthcare</h3>
            <p className="text-gray-700 mt-4">Innovative healthcare software designed to improve patient outcomes and streamline operations.</p>
          </div>

          <div className="industry-card p-8 bg-white shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-blue-600">Insurance</h3>
            <p className="text-gray-700 mt-4">Helping insurance firms innovate through automation, AI, and advanced data analysis.</p>
          </div>

          <div className="industry-card p-8 bg-white shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-blue-600">Crypto</h3>
            <p className="text-gray-700 mt-4">Driving blockchain and cryptocurrency innovation with robust, secure solutions.</p>
          </div>

          <div className="industry-card p-8 bg-white shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-blue-600">More...</h3>
            <p className="text-gray-700 mt-4">Explore the vast range of industries we serve. Our expertise extends across various sectors.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-blue-100 to-blue-200">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-600">Expert Team</h3>
              <p className="mt-4 text-gray-700">Our professionals bring industry-leading expertise to every project.</p>
            </div>

            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-600">Tailored Solutions</h3>
              <p className="mt-4 text-gray-700">We create custom software solutions that fit your specific business needs.</p>
            </div>

            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-600">Innovative Technology</h3>
              <p className="mt-4 text-gray-700">We leverage cutting-edge technologies to keep you ahead of the curve.</p>
            </div>

            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-600">Proven Results</h3>
              <p className="mt-4 text-gray-700">Our solutions drive real, measurable results that propel businesses forward.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Partner with us to build innovative, future-proof solutions tailored for your industry.
          </p>
          <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition">Get Started</button>
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

export default IndustriesPage;
