import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import axios from 'axios';

const ConsultationScheduler = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [demoDate, setDemoDate] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !demoDate) {
      setMessage('All fields are required.');
      return;
    }

    // Validate email format
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    const demoDateObj = new Date(demoDate);
    if (isNaN(demoDateObj)) {
      setMessage('Invalid date format. Please select a valid date.');
      return;
    }

    const formattedDemoDate = demoDateObj.toISOString().split('T')[0];

    const formData = {
      name,
      email,
      phone: phone.replace(/\s+/g, ''), // Remove extra spaces from phone
      demoDate: formattedDemoDate,
    };

    setIsLoading(true); // Start loading
    try {
      await axios.post('http://127.0.0.1:8000/api/schedule-consultation/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setIsSubmitted(true);
      setMessage(`Thank you, ${name}. Your demo request for ${formattedDemoDate} has been submitted.`);
    } catch (error) {
      setMessage(
        error.response?.data?.message || 'Failed to submit demo request. Please try again later.'
      );
      console.error('Error submitting request:', error.response || error.message);
    } finally {
      setIsLoading(false); // End loading
    }
  };

  const handleClose = () => {
    setName('');
    setEmail('');
    setPhone('');
    setDemoDate('');
    setMessage('');
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-lg shadow-lg max-w-lg w-full mx-4">
        {isSubmitted ? (
          <p className="text-center text-white text-2xl">{message}</p>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center text-white mb-6">Request a Demo</h2>
            <p className="text-center text-gray-200 mb-8">
              Schedule Consultation and we'll reach out to you.
            </p>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-white" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full mt-1 px-4 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full mt-1 px-4 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="custom-phone-input block text-sm font-semibold text-white" htmlFor="phone">
                  Phone Number
                </label>
                <PhoneInput
                  country={'us'}
                  value={phone}
                  onChange={(phone, country) => {
                    const formattedPhone = `+${country.dialCode} ${phone.slice(country.dialCode.length)}`;
                    setPhone(formattedPhone);
                  }}
                  enableSearch={true}
                  inputClass="w-full mt-1 px-4 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                  containerStyle={{
                    width: '100%',
                    borderRadius: '8px',
                  }}
                  dropdownStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #ccc',
                    borderRadius: '0.375rem',
                    maxHeight: '200px',
                    zIndex: 999,
                    overflowY: 'auto',
                    color: 'black',
                  }}
                  searchStyle={{
                    width: '100%',
                    padding: '0.5rem',
                    borderBottom: '1px solid #e2e8f0',
                    backgroundColor: '#f9fafb',
                    fontSize: '14px',
                    height: '45px',
                    color: 'black',
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white" htmlFor="demoDate">
                  Preferred Demo Date
                </label>
                <input
                  id="demoDate"
                  type="date"
                  className="w-full mt-1 px-4 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                  value={demoDate}
                  onChange={(e) => setDemoDate(e.target.value)}
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-5 py-3 bg-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-400 transition focus:ring-2 focus:ring-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition focus:ring-2 focus:ring-blue-500"
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ConsultationScheduler;
