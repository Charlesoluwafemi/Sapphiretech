// pages/website.js
import Image from 'next/image';
import { useState } from 'react';
import ConsultationForm from '../components/ConsultationForm';

export default function Website() {
  const [showForm, setShowForm] = useState(true);

  return (
    <div className="bg-gray-50 relative font-sans">
      {/* Hero Section with Background Image */}
      <section
        className="bg-cover bg-center text-gray-800 py-24"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/web-development.jpg)',
        }}
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-extrabold text-white">
            Crafting Stunning Websites That Convert
          </h1>
          <p className="mt-6 text-xl text-gray-200 font-light">
            Our expert team combines creativity and technology to deliver websites that not only look great but also drive results.
          </p>
          <button className="mt-8 bg-blue-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-600">
            Schedule Your Free Consultation
          </button>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Trusted by Leading Brands
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Our partners inspire us to achieve excellence. Join our esteemed list of clients today!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Adobe', logo: '/images/adobe.png' },
              { name: 'Spotify', logo: '/images/spotify.png' },
              { name: 'Airbnb', logo: '/images/airbnb.png' },
              { name: 'Netflix', logo: '/images/netflix.png' }
            ].map((client, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  width={150}
                  height={100}
                  className="mx-auto"
                />
                <p className="text-xl font-semibold text-gray-800 mt-4">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">
          Ready to Elevate Your Online Presence?
        </h2>
        <p className="mb-6 max-w-xl mx-auto text-gray-700">
          Share your vision with us, and together we’ll build a website that resonates with your audience.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          Get Started with a Free Consultation
        </button>
      </section>

      {/* Client Reviews Section */}
      <section className="py-12 bg-white text-center">
        <h3 className="text-3xl font-bold mb-6 text-gray-900">
          What Our Clients Say
        </h3>
        <p className="max-w-lg mx-auto mb-10 text-gray-700">
          Hear directly from our satisfied clients about their successful collaborations with us.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: 'Alice Smith', review: 'Their team delivered beyond expectations! Our website traffic has increased dramatically.', image: '/images/man1.jpg' },
            { name: 'Tom Johnson', review: 'Professional and creative—highly recommend them for Crypto web development.', image: '/images/man2.jpg' },
            { name: 'Lisa Adams', review: 'Fantastic experience! They really understand our needs and deliver results.', image: '/images/woman1.jpg' },
            { name: 'David Lee', review: 'A seamless process from start to finish. We’re thrilled with our new website!', image: '/images/woman2.jpg' },
            { name: 'Emily Davis', review: 'Innovative designs and exceptional service. Couldn’t be happier!', image: '/images/man3.jpg' },
            { name: 'Mark Wilson', review: 'Their attention to detail sets them apart from other companies.', image: '/images/woman3.jpg' },
          ].map((client, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={client.image}
                alt={client.name}
                width={80}
                height={80}
                className="rounded-full mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-800">{client.name}</h4>
              <p className="text-gray-600 mt-2">{client.review}</p>
            </div>
          ))}
        </div>
      </section>

      
            {/* Free Consultation Floating Form */}
            {showForm && (
              <div style={{ position: 'relative' }}>
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                  onClick={() => setShowForm(false)}
                >
                  X
                </button>
                <ConsultationForm />
              </div>
            )}
      

      {/* Portfolio Section */}
      <section className="bg-gray-50 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">Our Projects Showcase</h2>
        <p className="mb-10 text-gray-700 max-w-xl mx-auto">
          Take a look at our exceptional projects that reflect our expertise in web development.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: 'Corporate Website', image: '/images/corporate.jpg', description: 'An engaging corporate site designed to showcase brand values and attract customers.' },
            { title: 'Cypto Site', image: '/images/cypto.png', description: 'A visually stunning portfolio site that highlights creativity and innovation.' },
            { title: 'Blog Platform', image: '/images/Blog.jpg', description: 'A dynamic blog platform that fosters community and encourages sharing of ideas.' },
            { title: 'E-commerce Site', image: '/images/ecommerce.jpg', description: 'A powerful e-commerce site that simplifies online shopping experiences.' },
            { title: 'Fintech Site', image: '/images/financial.jpg', description: ' A cutting-edge fintech platform offering seamless financial services, enabling users to manage transactions, investments, and payments efficiently with secure and user-friendly tools.' },
            { title: 'Insurance Website', image: '/images/insurance.jpg', description: 'Effortlessly compare, customize, and secure the perfect insurance plan—all in one place.' },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white text-center">
        <h3 className="text-3xl font-bold mb-6 text-gray-900">
          Our Web Development Services
        </h3>
        <p className="max-w-lg mx-auto mb-10 text-gray-700">
          We offer a wide range of web development services tailored to meet your needs:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: 'Custom Website Development', description: 'Tailored solutions to meet your unique business needs.' },
            { title: 'E-commerce Solutions', description: 'Full-featured online stores to boost sales and engagement.' },
            { title: 'Responsive Design', description: 'Ensure your website looks great on all devices.' },
            { title: 'Content Management Systems', description: 'Easy-to-use platforms for managing your site content.' },
            { title: 'SEO Optimization', description: 'Enhance visibility and attract organic traffic to your site.' },
            { title: 'Website Maintenance', description: 'Ongoing support and updates to keep your site running smoothly.' },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h4 className="text-lg font-semibold text-gray-800">{service.title}</h4>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 py-12 text-white text-center">
        <p className="mb-4">© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <p className="text-gray-300">Follow us on social media for updates.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
