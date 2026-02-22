import React, { useState } from 'react';
import './Quote.css';

const Quote = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    currentAddress: '',
    movingAddress: '',
    moveDate: '',
    movingProperty: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send form data directly to Google Apps Script
      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('currentAddress', formData.currentAddress);
      formDataToSend.append('movingAddress', formData.movingAddress);
      formDataToSend.append('moveDate', formData.moveDate);
      formDataToSend.append('movingProperty', formData.movingProperty);
      formDataToSend.append('message', formData.message);
      
      const response = await fetch('https://script.google.com/macros/s/AKfycbxN2afPyJKK-i90z1aouHDDvnO_UMfDuCt8CvkkvKapyozup_FDXkRxvBNQftMUnuzv/exec', {
        method: 'POST',
        body: formDataToSend,
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
        // Show success alert
        alert('Thank you for your submission! Get Set Moove Team will contact you shortly with a personalized quote.');
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          currentAddress: '',
          movingAddress: '',
          moveDate: '',
          movingProperty: '',
          message: ''
        });
        
        // Hide success message after 3 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      } else {
        alert('There was an error submitting your form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section className="quote-section" id="quote">
      <div className="quote-form">
        <h2>Get a Free Quote</h2>
        {submitSuccess && (
          <div className="success-message">
            Form submitted successfully!
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name" 
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name" 
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email" 
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number" 
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="currentAddress">Current Address</label>
            <input 
              type="text" 
              id="currentAddress" 
              value={formData.currentAddress}
              onChange={handleChange}
              placeholder="Enter your current address" 
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="movingAddress">Moving Address</label>
            <input 
              type="text" 
              id="movingAddress" 
              value={formData.movingAddress}
              onChange={handleChange}
              placeholder="Enter your moving address" 
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="moveDate">Moving Date</label>
            <input 
              type="date" 
              id="moveDate" 
              value={formData.moveDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="movingProperty">Moving Property</label>
            <select 
              id="movingProperty" 
              value={formData.movingProperty}
              onChange={handleChange}
              required
            >
              <option value="">Select property type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="office">Office</option>
              <option value="storage-unit">Storage Unit</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Additional Details</label>
            <textarea 
              id="message" 
              rows="4" 
              value={formData.message}
              onChange={handleChange}
              placeholder="Any special requirements?"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="btn btn-primary" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Get Quote'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Quote;