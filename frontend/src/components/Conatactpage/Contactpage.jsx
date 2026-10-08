
import React, { useState, } from "react";
import "./Contactpage.css";

function Contactpage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Thank you! Your message has been received.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section className="contact-page"  id="contact">
      {/* HERO */}
      <div className="contact-hero">
        <p>WE'D LOVE TO HEAR FROM YOU</p>
        <h1>
          Let's Start A
          <span> Conversation.</span>
        </h1>
        <p className="contact-intro">
          Have a question about a booking, hotel, partnership,
          or Stayora? We're here to help.
        </p>
      </div>
      {/* CONTACT CONTENT */}

      <div className="contact-container">
        {/* LEFT */}
        <div className="contact-info">
          <p className="info-label">
            GET IN TOUCH
          </p>
          <h2>
            We're here
            <span> for you.</span>
          </h2>
          <p className="info-text">
            Whether you need help planning your stay or want to
            know more about Stayora, send us a message and our
            team will get back to you.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <div className="detail-icon">
                ✉
              </div>
              <div>
                <small>Email</small>
                <p>hello@stayora.com</p>
              </div>
            </div>
            <div className="contact-detail">
              <div className="detail-icon">
                ☎
              </div>
            <div>
                <small>Phone</small>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="contact-detail">
              <div className="detail-icon">
                📍
              </div>
              <div>
                <small>Office</small>
                <p>Lucknow, India</p>
              </div>
            </div>
          </div>
          <div className="social-links">
            <span>Instagram</span>
            <span>LinkedIn</span>
            <span>Twitter</span>
          </div>
        </div>
        {/* FORM */}

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-group">
                <label>Your Name</label>
                <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required/>
              </div>

              <div className="input-group">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required/>
              </div>
            </div>
            <div className="input-group"> 
              <label>Subject</label>
              <input type="text" name="subject" placeholder="How can we help?" value={formData.subject}  onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label>Your Message</label>
              <textarea name="message"  placeholder="Write your message here..." rows="6" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="send-btn">
              Send Message <span>→</span>
            </button>
          </form>
        </div>
      </div>
      {/* FAQ */}
      <div className="faq-section">
        <div className="faq-heading">
          <p>COMMON QUESTIONS</p>
          <h2>
            Frequently Asked
            <span> Questions</span>
          </h2>
        </div>
        <div className="faq-grid">
          <div className="faq-card">
            <h3>How do I book a hotel?</h3>
            <p>
              Search for your destination, select your dates,
              choose a room and complete the booking process.
            </p>
          </div>
          <div className="faq-card">
            <h3>Can I cancel my booking?</h3>
            <p>
              Cancellation depends on the hotel's cancellation
              policy associated with your reservation.
            </p>
          </div>
          <div className="faq-card">
            <h3>Can I book for a group?</h3>
            <p>
              Yes. Stayora supports group bookings for families,
              friends and larger groups.
            </p>
          </div>
          <div className="faq-card">
            <h3>Can I order food?</h3>
            <p>
              Hotels using Stayora's restaurant module can provide
              food ordering and room-service options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contactpage;
