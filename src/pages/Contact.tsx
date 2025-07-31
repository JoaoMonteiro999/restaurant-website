import { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="contact__header">
          <h1>Contact Us</h1>
          <p>Get in touch for reservations, events, or inquiries. We'd love to hear from you!</p>
        </div>
        
        <div className="contact__content">
          {/* Contact Info */}
          <div className="contact__info">
            <h2>Get in Touch</h2>
            
            <div className="contact__info-item">
              <h3>
                <span className="icon">📍</span> Location
              </h3>
              <p>
                123 Gourmet Street<br />
                Culinary District<br />
                New York, NY 10001
              </p>
            </div>
            
            <div className="contact__info-item">
              <h3>
                <span className="icon">📞</span> Phone
              </h3>
              <p>(555) 123-4567</p>
            </div>
            
            <div className="contact__info-item">
              <h3>
                <span className="icon">✉️</span> Email
              </h3>
              <p>info@bellavista.com</p>
            </div>
            
            <div className="contact__info-item contact__info-hours">
              <h3>
                <span className="icon">🕒</span> Hours
              </h3>
              <div className="hours-list">
                <p><strong>Lunch:</strong> Mon - Fri, 11:30 AM - 2:30 PM</p>
                <p><strong>Dinner:</strong> Mon - Sun, 5:30 PM - 10:00 PM</p>
                <p><strong>Weekend Brunch:</strong> Sat - Sun, 10:00 AM - 3:00 PM</p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="contact__map">
              🗺️ Interactive Map Coming Soon
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="contact__form">
            <h2>Send a Message</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="contact__form-group">
                <label>Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>
              
              <div className="contact__form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="contact__form-group">
                <label>Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div className="contact__form-group">
                <label>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us more about your inquiry..."
                />
              </div>
              
              <button type="submit" className="contact__form-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
