import React from 'react';
import '../../App.css';

export default function ContactDetails() {
  return (
    <div className="contact-details-container">
      <h2><p>Contact Details</p></h2>
      <ul className="contact-details-list">
        <li>
          <span className="contact-details-label">Email:</span>
          <span className="contact-details-value">support@kampilyafarms.com, kampilyafarms@gmail.com</span>
        </li>
        <li>
          <span className="contact-details-label">Phone:</span>
          <span className="contact-details-value">+91 7986510445</span>
        </li>
        <li>
          <span className="contact-details-label">Address:</span>
          <span className="contact-details-value">Village Kairai, Near Kampil, <br/>Tehsil Kaimgunj, District Farrukhabad, <br/>Uttar Pradesh, Pincode: 209505</span>
        </li>
        <li>
        <span className="contact-details-label">Facebook:</span>
          <span className="contact-details-value"><a href="https://www.facebook.com/kampilyafarm">Kampilya Farms</a></span>
        </li>
      </ul>

    </div>
    );
}
