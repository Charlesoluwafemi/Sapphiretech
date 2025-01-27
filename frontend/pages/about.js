// pages/about.js (About Us Page)
import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-r from-purple-600 to-blue-600 text-center text-white">
        <div className="container mx-auto">
          <h1 className="text-5xl font-extrabold mb-6">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            We are a technology-driven company delivering cutting-edge solutions in web and mobile application development. Our passionate team is dedicated to helping businesses achieve success through innovation.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-blue-600 mb-8">Our Mission</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Our mission is to revolutionize businesses by providing top-tier software solutions. We aim to empower organizations of all sizes with the tools they need to succeed in the digital age.
          </p>
        </div>
      </section>

      {/* Our Vision and Values Section */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-blue-600 mb-8">Vision & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Innovation</h3>
              <p className="text-gray-700">We constantly push the boundaries of technology to deliver innovative solutions that set our clients apart.</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Integrity</h3>
              <p className="text-gray-700">Our business is built on a foundation of trust, ensuring we uphold the highest standards in everything we do.</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Client Success</h3>
              <p className="text-gray-700">Your success is our priority. We focus on delivering solutions that help our clients grow and achieve their business goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white text-center">
  <div className="container mx-auto">
    <h2 className="text-4xl font-bold text-blue-600 mb-8">Meet Our Team</h2>
    <p className="text-lg max-w-3xl mx-auto text-gray-700 mb-12">
      Our talented and diverse team brings together engineers, designers, and strategists from all walks of life to create exceptional digital experiences. Together, we transform challenges into opportunities, driving innovation and excellence in every project.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
      <div className="bg-gray-50 p-6 shadow-lg rounded-lg">
        <img 
          className="w-48 h-48 mx-auto mb-4 rounded-full object-cover" 
          src="/images/member1.jpg" 
          alt="Team Member 1" 
          loading="lazy" 
        />
        <h3 className="text-2xl font-semibold text-blue-600">Alex Johnson</h3>
        <p className="text-gray-700">Lead Developer</p>
        <p className="text-gray-600 mt-2">
          Alex is a coding wizard with a passion for crafting seamless user experiences. With over 8 years of experience, he specializes in turning complex problems into elegant solutions.
        </p>
      </div>
      <div className="bg-gray-50 p-6 shadow-lg rounded-lg">
        <img 
          className="w-48 h-48 mx-auto mb-4 rounded-full object-cover" 
          src="/images/member2.jpg" 
          alt="Team Member 2" 
          loading="lazy" 
        />
        <h3 className="text-2xl font-semibold text-blue-600">Emily Clark</h3>
        <p className="text-gray-700">Product Designer</p>
        <p className="text-gray-600 mt-2">
          Emily blends creativity with functionality. Her design philosophy revolves around user-centric principles, ensuring that every product not only looks great but also feels intuitive.
        </p>
      </div>
      <div className="bg-gray-50 p-6 shadow-lg rounded-lg">
        <img 
          className="w-48 h-48 mx-auto mb-4 rounded-full object-cover" 
          src="/images/member3.jpg" 
          alt="Team Member 3" 
          loading="lazy" 
        />
        <h3 className="text-2xl font-semibold text-blue-600">Michael Lee</h3>
        <p className="text-gray-700">Project Manager</p>
        <p className="text-gray-600 mt-2">
          With a knack for organization and communication, Michael ensures that projects run smoothly. His strategic mindset keeps the team aligned and on track to meet deadlines.
        </p>
      </div>
      <div className="bg-gray-50 p-6 shadow-lg rounded-lg">
        <img 
          className="w-48 h-48 mx-auto mb-4 rounded-full object-cover" 
          src="/images/member4.jpg" 
          alt="Team Member 4" 
          loading="lazy" 
        />
        <h3 className="text-2xl font-semibold text-blue-600">Sophia Wright</h3>
        <p className="text-gray-700">Marketing Strategist</p>
        <p className="text-gray-600 mt-2">
          Sophia is a visionary thinker who crafts compelling marketing strategies. Her insights into market trends help us connect with our audience in meaningful ways.
        </p>
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
              <p className="text-gray-700">“Their team has transformed our business with innovative solutions. Their attention to detail and dedication to our success are unmatched!”</p>
              <h3 className="mt-4 text-lg font-semibold text-blue-600">- Sarah Williams, CEO of FinTech Co.</h3>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <p className="text-gray-700">“Working with them was a breeze. They exceeded our expectations and delivered a product that has improved our operations tremendously.”</p>
              <h3 className="mt-4 text-lg font-semibold text-blue-600">- James Smith, Director at HealthPlus</h3>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <p className="text-gray-700">“They provided excellent service and top-notch solutions that truly set our company apart in a competitive market.”</p>
              <h3 className="mt-4 text-lg font-semibold text-blue-600">- Angela Martinez, Founder of InsurePro</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">Ready to Collaborate?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-12">
            Let’s work together to build innovative solutions that drive success. Our team is ready to bring your vision to life.
          </p>
          <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition">Get in Touch</button>
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

export default AboutPage;
