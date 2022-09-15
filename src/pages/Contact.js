import React from 'react';
import PizzaLeft from '../assets/pizzaLeft.jpg';
import '../styles/Contact.css';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className='contact'>
      <div
        className='leftSide'
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className='rightSide'>
        <h1> Contact Us</h1>

        <form id='contact-form' method='POST'>
          <label htmlFor='name'>Full Name</label>
          <input
            name='name'
            placeholder='Enter full name...'
            type='text'
            required
          />
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            placeholder='Enter email...'
            type='email'
            required
          />
          <label htmlFor='message'>Message</label>
          <textarea
            rows='6'
            placeholder='Enter message...'
            name='message'
            required
          ></textarea>
          <Link to='/Thankyou'>
            <button type='submit'> Send Message</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Contact;
