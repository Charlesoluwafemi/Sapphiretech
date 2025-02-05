import { useState } from 'react';

export default function ConsultationForm() {
  // State for form inputs and submission status
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages
  const [successMessage, setSuccessMessage] = useState(''); // State for success messages
  //const [buttonClicked, setButtonClicked] = useState(false); // State to track button click
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track submitting

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Sanitize and trim input values
    const trimmedFullName = fullName.trim();
    const trimmedEmail = email.trim();
    const trimmedProjectDetails = projectDetails.trim();

    // Basic client-side validation
    if (!trimmedFullName || !trimmedEmail || !trimmedProjectDetails) {
      setErrorMessage('All fields are required.'); // Set error message if fields are empty
      return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedEmail)) {
      setErrorMessage('Please enter a valid email address.'); // Set error message for invalid email
      return;
    }

    const formData = { 
      fullName: trimmedFullName, 
      email: trimmedEmail, 
      projectDetails: trimmedProjectDetails 
    };

    // Send the data to your Django backend
    setIsSubmitting(true); // Set submitting state
    setErrorMessage(''); // Clear previous error messages
    try {
      const response = await fetch('http://127.0.0.1:8000/api/send-consultation/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true); // Handle success
        setSuccessMessage('Thank you! Your request has been submitted.'); // Success message
        setFullName(''); // Clear form fields
        setEmail('');
        setProjectDetails('');
      } else {
        const errorData = await response.json(); // Capture error response
        setErrorMessage(errorData.message || 'Form submission failed. Please try again.'); // Set error message
      }
    } catch (error) {
      setErrorMessage('An unexpected error occurred. Please try again.'); // Set error message
    } finally {
      setIsSubmitting(false); // Reset submitting state after processing
    }
  };

  return (
    <div className="fixed right-4 bottom-4 bg-white shadow-lg p-6 rounded-lg max-w-sm z-50">
      <h3 className="text-xl font-bold mb-4 text-gray-900">Free Consultation</h3>
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>} {/* Display error message */}
      {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>} {/* Display success message */}
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required // Ensures the field is required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required // Ensures the field is required
          />
          <textarea
            rows="4"
            placeholder="Tell us about your project"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={projectDetails}
            onChange={(e) => setProjectDetails(e.target.value)}
            required // Ensures the field is required
          ></textarea>
          <button
            type="submit"
            className={`bg-indigo-500 text-white px-6 py-2 rounded-md w-full transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-600'}`}
            disabled={isSubmitting} // Disable button during submission
          >
            {isSubmitting ? 'Submitting...' : 'Submit'} {/* Change button text during submission */}
          </button>
        </form>
      ) : (
        <p className="text-green-500">Thank you! We will get back to you soon.</p>
      )}
    </div>
  );
}
