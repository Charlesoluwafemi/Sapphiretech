import { useState } from 'react'; 
import Link from 'next/link';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-20 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800">
              Revyntech
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-800 hover:text-blue-600 transition duration-300">Home</Link>
            <Link href="/website" className="text-gray-800 hover:text-blue-600 transition duration-300">Website Development</Link>
            <Link href="/mobile-app" className="text-gray-800 hover:text-blue-600 transition duration-300">Mobile App Development</Link>

            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <span className="cursor-pointer text-gray-800 hover:text-blue-600 transition duration-300">Services</span>
              {isServicesOpen && (
                <div className="absolute bg-white shadow-lg rounded-md mt-2 p-4 w-48">
                  <Link href="/services#web-development" className="block px-3 py-2 text-gray-800 hover:text-blue-600">Website Development</Link>
                  <Link href="/services#mobile-app" className="block px-3 py-2 text-gray-800 hover:text-blue-600">Mobile App Development</Link>
                  <Link href="/services#automation" className="block px-3 py-2 text-gray-800 hover:text-blue-600">Automation Software</Link>
                  <Link href="/services#blockchain" className="block px-3 py-2 text-gray-800 hover:text-blue-600">Blockchain Development</Link>
                  <Link href="/services#chatbot" className="block px-3 py-2 text-gray-800 hover:text-blue-600">Chatbot Development</Link>
                  <Link href="/services#ai" className="block px-3 py-2 text-gray-800 hover:text-blue-600">AI Solutions</Link>
                </div>
              )}
            </div>

            <Link href="/industries" className="text-gray-800 hover:text-blue-600 transition duration-300">Industries</Link>
            <Link href="/about" className="text-gray-800 hover:text-blue-600 transition duration-300">About Us</Link>
            <Link href="/blog" className="text-gray-800 hover:text-blue-600 transition duration-300">Blog</Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://wa.me/+2349162220402" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-green-600 transition duration-300">
              <i className="fab fa-whatsapp fa-lg"></i>
            </a>
            <a href="mailto:your-email@example.com?subject=Inquiry&body=Hello, I would like to... " className="text-gray-800 hover:text-blue-600 transition duration-300">
             <i className="fas fa-envelope fa-lg"></i>
            </a>

            <a href="https://t.me/Charlesoluwafemi2" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 transition duration-300">
              <i className="fab fa-telegram fa-lg"></i>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link href="/" onClick={toggleMenu} className="block px-3 py-2 text-gray-800 hover:text-blue-600">Home</Link>
            <Link href="/website" onClick={toggleMenu} className="block px-3 py-2 text-gray-800 hover:text-blue-600">Website Development</Link>
            <Link href="/mobile-app" onClick={toggleMenu} className="block px-3 py-2 text-gray-800 hover:text-blue-600">Mobile App Development</Link>
            <Link href="/services" onClick={toggleMenu} className="block px-3 py-2 text-gray-800 hover:text-blue-600">Services</Link>
            <Link href="/industries" onClick={toggleMenu} className="block px-3 py-2 text-gray-800 hover:text-blue-600">Industries</Link>
            <Link href="/about" onClick={toggleMenu} className="block px-3 py-2 text-gray-800 hover:text-blue-600">About Us</Link>
            <Link href="/blog" onClick={toggleMenu} className="block px-3 py-2 text-gray-800 hover:text-blue-600">Blog</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
