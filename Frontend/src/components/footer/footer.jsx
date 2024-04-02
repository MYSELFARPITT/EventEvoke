import React from 'react';
import './footer.css'; // Import CSS file relative to the component file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        <ul className="footer__links">
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
