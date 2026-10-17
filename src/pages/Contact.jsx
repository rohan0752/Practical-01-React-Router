import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page contact-page">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p className="page-subtitle">We'd love to hear from you</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <span className="info-icon">📍</span>
            <h3>Address</h3>
            <p>123 React Street, Component City</p>
          </div>
          <div className="info-card">
            <span className="info-icon">📞</span>
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>
          <div className="info-card">
            <span className="info-icon">✉️</span>
            <h3>Email</h3>
            <p>hello@reactrouter.demo</p>
          </div>
        </div>

        <div className="contact-form-container">
          {submitted ? (
            <div className="success-message">
              <span className="success-icon">✅</span>
              <h3>Thank You, {formData.name}!</h3>
              <p>Your message has been received. We'll get back to you soon.</p>
              <button className="btn btn-primary" onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send us a Message</h2>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Type your message..." rows="5" required />
              </div>
              <button type="submit" className="btn btn-primary btn-full">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
