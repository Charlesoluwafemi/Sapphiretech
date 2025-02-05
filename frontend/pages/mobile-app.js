// pages/mobile-app.js
import Image from 'next/image';
import { useState } from 'react';
import ConsultationForm from '../components/ConsultationForm';

export default function MobileApp() {
  const [showForm, setShowForm] = useState(true);

  return (
    <div className="bg-gray-50 relative font-sans">
      {/* Hero Section with Background Image */}
      <section
        className="bg-cover bg-center text-gray-800 py-24"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/team.jpg)',
        }}
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-extrabold text-white">
            Build Your Dream Mobile App with Revyntech
          </h1>
          <p className="mt-6 text-xl text-gray-200 font-light">
            Whether it’s iOS or Android, let our experts bring your vision to life. Partner with top global brands and lead the future of mobile technology.
          </p>
          <button className="mt-8 bg-indigo-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-600">
            Get a Free Consultation
          </button>
        </div>
      </section>

      {/* Clients Section */}
<section className="py-16 bg-indigo-50">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-gray-900 mb-6">
      Proud Partners of Leading Global Brands
    </h2>
    <p className="text-lg text-gray-700 mb-12">
      We are honored to have worked with some of the world&apos;s most innovative and successful companies. Join our growing family of clients, and let&apos;s build something amazing together.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { name: 'Samsung', logo: '/images/samsung.png' },
        { name: 'Apple', logo: '/images/apple.png' },
        { name: 'Google', logo: '/images/google.png' },
        { name: 'Microsoft', logo: '/images/microsoft.png' }
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
          Want to Be Our Next Success Story?
        </h2>
        <p className="mb-6 max-w-xl mx-auto text-gray-700">
          Share your project idea with us, and we’ll turn it into a powerful mobile app that drives your business forward.
        </p>
        <button className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600">
          Have A Free Consultation
        </button>
      </section>

      
      {/* Client Reviews Section */}
<section className="py-12 bg-white text-center">
  <h3 className="text-3xl font-bold mb-6 text-gray-900">
    Hear from Our Satisfied Clients
  </h3>
  <p className="max-w-lg mx-auto mb-10 text-gray-700">
    Discover why businesses worldwide choose us for their mobile app development needs.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      { name: 'Sarah Lee', review: 'Revyntech transformed our vision into reality! Their mobile app expertise is unmatched.', image: '/images/man1.jpg' },
      { name: 'John Doe', review: 'An outstanding experience from start to finish. They made app development seamless.', image: '/images/woman1.jpg' },
      { name: 'Emily White', review: 'Their dedication and attention to detail set them apart. Highly recommended!', image: '/images/man2.jpg' },
      { name: 'Michael Brown', review: 'We saw massive growth after launching our app with Revyntech. A trusted partner!', image: '/images/woman2.jpg' },
      { name: 'Sophia Green', review: 'The team was communicative and efficient. They truly care about their clients.', image: '/images/man3.jpg' },
      { name: 'David Miller', review: 'We couldn’t be happier with the mobile app they delivered. 5-star service!', image: '/images/woman3.jpg' },
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
  <h2 className="text-3xl font-semibold mb-6 text-gray-900">Our Portfolio</h2>
  <p className="mb-10 text-gray-700 max-w-xl mx-auto">
    Explore our diverse range of successful projects, crafted with precision and creativity to meet our clients&apos; unique needs.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      { title: 'E-commerce App', image: '/images/ecommerce.jpg', description: 'A user-friendly e-commerce platform that boosts sales and customer engagement.' },
      { title: 'Health Tracker', image: '/images/healthcare.png', description: 'An intuitive health tracking app that helps users manage their wellness journey.' },
      { title: 'Food Delivery Service', image: '/images/foodapp.jpg', description: 'A seamless food delivery app connecting customers with local restaurants.' },
      { title: 'Educational Platform', image: '/images/education.jpg', description: 'An interactive platform for online learning, enhancing user engagement and learning outcomes.' },
      { title: 'Travel Booking App', image: '/images/travel.png', description: 'An innovative travel booking solution that simplifies trip planning.' },
      { title: 'Fitness App', image: '/images/fitness.jpg', description: 'A comprehensive fitness app offering personalized workout plans and nutrition tracking.' },
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
      <section className="bg-gray-100 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900">
          Customized Mobile Application Development for Various Industries
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {['Banking', 'Healthcare', 'E-commerce', 'Gaming', 'Education', 'Logistics'].map(
            (industry, index) => (
              <div key={index} className="bg-white p-6 shadow-md text-center rounded-lg">
                <p className="text-lg font-semibold text-gray-800">{industry}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white py-4 text-center">
        <p>© 2024 Revyntech. All rights reserved.</p>
      </footer>
    </div>
  );
}
