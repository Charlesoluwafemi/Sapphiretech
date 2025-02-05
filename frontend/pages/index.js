import Navbar from '../components/Navbar';
import { useState } from 'react';
import Head from 'next/head';
import ConsultationScheduler from '../components/ConsultationScheduler';
import Image from 'next/image';

export default function Home() {
  const [showScheduler, setShowScheduler] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //const handleScheduleClick = () => {
    setShowScheduler(!showScheduler);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // ✅ Use handleCloseModal properly
  //const handleCloseModal = () => {
    //setShowScheduler(false);
    //closeModal();
  //};

  return (
    <>
      <Head>
        <title>Revyntech - Tech Solutions</title>
        <meta
          name="description"
          content="Revyntech provides top-notch tech solutions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Navbar */}
        <Navbar />

        {/* Hero Section with Gradient Background */}
  <section className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-white"
  style={{
    backgroundImage: "url('/images/coding1.jpg')",  // Replace with your image path
    opacity: 0.8,
  }}>
  <h1 className="text-6xl font-bold mb-4 text-white bg-gradient-to-r from-yellow-300 via-red-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
    Software Development Services
  </h1>
  <h2 className="text-4xl font-bold mb-4 text-yellow-200 drop-shadow-lg">Custom Web App Development Services</h2>
  <p className="text-3xl mb-4 text-purple-200 drop-shadow-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
    We develop Software Solutions, Advanced AI Applications
  </p>
  <p className="text-3xl mb-4 text-teal-200 drop-shadow-lg">
    And intuitive Web and Mobile Apps to meet your Business needs.
  </p>
  <div>
  <button 
            onClick={openModal} // Open modal when clicked
            className="demo-btn bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-gray-800 font-semibold py-4 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
          >
            Schedule Consultation
          </button>
        </div>
        {/* Modal Component */}
        <ConsultationScheduler isOpen={isModalOpen} onClose={closeModal} />
      
</section>
       {/* About Us Section with Case Studies Background */}
<section className="bg-gray-900 py-20 flex flex-col justify-start items-center text-white">
  <div className="max-w-5xl mx-auto text-center px-6 lg:px-0">
    <h2 className="text-4xl font-bold mb-8 text-gray-300 font-poppins">About Us</h2>
    <p className="text-xl text-gray-400 mb-6 font-poppins">
      At Revyntech, we pride ourselves on being at the forefront of technological innovation. With over 20 years of experience in the industry, our dedicated team of experts is committed to delivering cutting-edge software solutions that empower businesses to thrive in a rapidly evolving digital landscape. 
    </p>
    <p className="text-xl text-gray-400 mb-6 font-poppins">
      Our journey began with a passion for technology and a vision to transform how organizations operate. We specialize in software development, web applications, and mobile app development, ensuring that our clients have access to powerful tools that drive growth and efficiency. We believe that every business, regardless of size or industry, deserves tailored solutions to meet their unique challenges.
    </p>
    <p className="text-xl text-gray-400 mb-6 font-poppins">
      From artificial intelligence and machine learning to blockchain and cloud computing, our diverse expertise allows us to tackle a wide range of projects. Our web and mobile app development services focus on creating user-friendly, scalable applications that enhance user experience and engagement. We work closely with our clients, understanding their needs and providing customized strategies that yield tangible results.
    </p>
    <p className="text-xl text-gray-400 mb-6 font-poppins">
      Our commitment to excellence ensures that we remain a trusted partner in our clients&apos; journeys toward success. We are dedicated to staying ahead of industry trends and employing the latest technologies to deliver innovative solutions that set our clients apart from the competition.
    </p>
    <p className="text-xl text-gray-400 mb-6 font-poppins">
      Join us as we continue to push the boundaries of what&apos;s possible. Together, we can harness the power of technology to drive innovation, enhance productivity, and create a brighter future for your business. Discover the Revyntech difference and let us help you achieve your goals with our unparalleled expertise and dedication.
    </p>
  </div>
</section>


         {/* Partners Section */}
         {/* Partners Section */}
<section className="bg-gray-100 py-20">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold mb-12 text-gray-800">Trusted by Industry Leaders</h2>
    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
      At Revyntech, we are proud to partner with some of the world&apos;s most renowned companies, enabling us to deliver innovative solutions that drive growth and technological advancement across industries.
    </p>
    <p className="text-lg text-gray-500 italic mb-12">
      Our collaborations with global giants allow us to provide cutting-edge services, helping businesses like yours stay ahead of the curve.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
      <div>
        <Image src="/images/Gogle.png" alt="Google" className="h-24 mx-auto" />
        <p className="text-gray-700 mt-4">Google</p>
      </div>
      <div>
        <Image src="/images/samsung.png" alt="Samsung" className="h-24 mx-auto" />
        <p className="text-gray-700 mt-4">Samsung</p>
      </div>
      <div>
        <Image src="/images/amazon.png" alt="Amazon" className="h-24 mx-auto" />
        <p className="text-gray-700 mt-4">Amazon</p>
      </div>
      <div>
        <Image src="/images/tesla.jpg" alt="Tesla" className="h-24 mx-auto" />
        <p className="text-gray-700 mt-4">Tesla</p>
      </div>
    </div>
  </div>
</section>



        {/* Services Section with Subtle Gradient Background */}
        {/* Services Section */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white shadow-lg p-6 rounded-lg">
                <Image src="/images/webdev.jpg" alt="Web Development" className="h-25 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Web Development</h3>
                <p>We build modern, responsive websites for businesses of all sizes.</p>
              </div>
              <div className="bg-white shadow-lg p-6 rounded-lg">
                <Image src="/images/appdev.png" alt="Mobile App Development" className="h-25 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Mobile App Development</h3>
                <p>Our team crafts sleek and user-friendly mobile applications.</p>
              </div>
              <div className="bg-white shadow-lg p-6 rounded-lg">
                <Image src="/images/blockchain.png" alt="Blockchain" className="h-25 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Blockchain Development</h3>
                <p>We offer blockchain solutions for decentralized applications.</p>
              </div>
              <div className="bg-white shadow-lg p-6 rounded-lg">
                <Image src="/images/ai.jpeg" alt="AI Development" className="h-25 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">AI & Machine Learning</h3>
                <p>Building AI-driven applications to revolutionize your business.</p>
              </div>
              <div className="bg-white shadow-lg p-6 rounded-lg">
                <Image src="/images/bot.jpg" alt="Bots" className="h-21 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Bots & Automation</h3>
                <p>Creating bots to automate workflows and enhance productivity.</p>
              </div>
              <div className="bg-white shadow-lg p-6 rounded-lg">
                <Image src="/images/smartcontract.avif" alt="Smart Contract" className="h-25 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Smart Contracts</h3>
                <p>We design and implement secure smart contracts for your business.</p>
              </div>
              <div className="bg-white shadow-lg p-6 rounded-lg">
                <Image src="/images/Wallet1.png" alt="Crypto Wallet" className="h-25 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Crypto Wallet Development</h3>
                <p>Secure cryptocurrency wallet development solutions.</p>
              </div>
            </div>
          </div>
        </section>

      {/* Why Choose Us Section with Subdued Background */}
      {/* Why Choose Us Section with Subdued Background */}
<section className="bg-gradient-to-r from-green-200 via-teal-200 to-blue-200 py-20">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold mb-8 text-gray-900">Why Choose Revyntech?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-2xl font-bold mb-2 text-gray-800">Expert Team</h3>
        <p className="text-gray-800">
          Our team of experienced developers and industry specialists ensures that you receive top-quality, innovative solutions tailored to your business needs.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2 text-gray-800">Client-Centric Approach</h3>
        <p className="text-gray-800">
          We believe in building long-lasting relationships with our clients, understanding their goals, and delivering beyond their expectations.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2 text-gray-800">Proven Track Record</h3>
        <p className="text-gray-800">
          With over 20 years of experience, our portfolio is filled with success stories across various industries, demonstrating our expertise and reliability.
        </p>
      </div>
    </div>
  </div>
</section>


        {/* Case Studies Section with Dark Theme */}
        <section className="bg-gray-900 py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
              Explore some of our most successful projects that helped clients transform their businesses with cutting-edge technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Project Alpha</h3>
                <p className="text-gray-400 mb-4">We developed a blockchain solution for a leading fintech company, ensuring secure and transparent transactions.</p>
                <a href="#" className="text-teal-300 font-semibold">Read More</a>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Project Beta</h3>
                <p className="text-gray-400 mb-4">Our AI-powered solution increased efficiency by 35% for a healthcare provider, revolutionizing patient care.</p>
                <a href="#" className="text-teal-300 font-semibold">Read More</a>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Project Gamma</h3>
                <p className="text-gray-400 mb-4">We developed a custom e-commerce platform, enabling seamless integration with various payment solutions and enhancing user experience.</p>
                <a href="#" className="text-teal-300 font-semibold">Read More</a>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section with Bright Gradient */}
        <section className="bg-gradient-to-r from-teal-500 to-blue-500 py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Let’s Build Your Future Together</h2>
            <p className="text-xl mb-8">Ready to take your business to the next level? Contact us today to discuss your project and see how we can help you achieve your goals with innovative technology solutions.</p>
            <a
              href="/contact"
              className="bg-white text-teal-500 hover:bg-gray-200 px-6 py-3 rounded-md text-lg font-bold transition-all duration-300 ease-in-out"
            >
              Get Started
            </a>
          </div>
        </section>

        {/* Testimonials Section with Light Background */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-12">Client Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Review 1 */}
              <div className="bg-gray-100 shadow-lg p-6 rounded-lg">
                <Image src="/images/man1.jpg" alt="Client 1" className="h-48 w-48 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">John Doe, CEO at FinTech Corp</h3>
                <p className="text-gray-700">
                   &quot;Revyntech transformed our business with a custom blockchain solution. Their expertise and professionalism are unmatched! &quot;
                </p>
              </div>
              {/* Review 2 */}
              <div className="bg-gray-100 shadow-lg p-12 rounded-lg">
                <Image src="/images/woman1.jpg" alt="Client 2" className="h-48 w-48 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Jane Smith, Founder of HealthTech</h3>
                <p className="text-gray-700">
                   &quot;The AI-powered solution Revyntech built for us significantly improved our workflow and patient care. Highly recommend! &quot;
                </p>
              </div>
              {/* Review 3 */}
              <div className="bg-gray-100 shadow-lg p-6 rounded-lg">
                <Image src="/images/man2.jpg" alt="Client 3" className="h-48 w-48 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Emily Johnson, COO at RetailHub</h3>
                <p className="text-gray-700">
                   &quot;Their e-commerce platform is fantastic! Our sales have increased by 50% thanks to their seamless user experience design. &quot;
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Footer */}
        <footer className="bg-gray-900 py-10 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Revyntech. All rights reserved.</p>
      </footer>
    </main>
  </>
);
