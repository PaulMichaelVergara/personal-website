import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import './ContactForm.css';

const ContactForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        form.current,
        EMAILJS_CONFIG.publicKey
      )
      .then(
        (result) => {
          console.log('Email sent successfully!', result.text);
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error('Error sending email:', error.text);
          alert('Failed to send message. Please try again.');
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <div className="form-group">
        <input 
          type="text" 
          name="from_name" 
          placeholder="Name" 
          required 
          className="form-input"
        />
      </div>
      <div className="form-group">
        <input 
          type="email" 
          name="from_email" 
          placeholder="Email" 
          required 
          className="form-input"
        />
      </div>
      <div className="form-group">
        <textarea 
          name="message" 
          placeholder="Your message" 
          required
          className="form-textarea"
        ></textarea>
      </div>
      <button 
        type="submit" 
        className="submit-btn"
        disabled={isSending}
      >
        {isSending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
