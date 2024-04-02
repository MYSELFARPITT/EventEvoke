import React from 'react';
import '../css/Services.css';

const Service = () => {
  return (
    <div className="service">
      <div className="service__header">
        <h1>Services</h1>
        <hr />
        <h2>What We Offer</h2>
      </div>
      <div className="service__list">
        <div className="service__item">
          <img src="https://via.placeholder.com/300" alt="Service 1" />
          <div className="service__description">
            <h3>Wedding Planning</h3>
            <p>Customised Decor Themes</p>
            <p>Floral Arrangements</p>
            <p>Lighting Design</p>
            <p>Tablescapes and Centerpieces</p>
          </div>
          <a href="#">Check Out More</a>
        </div>
        <div className="service__item">
          <img src="https://via.placeholder.com/300" alt="Service 2" />
          <div className="service__description">
            <h3>Wedding Management</h3>
            <p>Vendor Management</p>
            <p>Timeline Coordination</p>
            <p>On-site Management</p>
            <p>Guest Assistance</p>
          </div>
          <a href="#">Check Out More</a>
        </div>
        <div className="service__item">
          <img src="https://via.placeholder.com/300" alt="Service 3" />
          <div className="service__description">
            <h3>Destination Weddings</h3>
            <p>Location Selection</p>
            <p>Travel Arrangements</p>
            <p>Local Vendor Coordination</p>
            <p>Cultural Integration</p>
          </div>
          <a href="#">Check Out More</a>
        </div>
        <div className="service__item">
          <img src="https://via.placeholder.com/300" alt="Service 4" />
          <div className="service__description">
            <h3>Wedding Decor</h3>
            <p>Thematic Concepts</p>
            <p>Stage Design</p>
            <p>Backdrop Arrangements</p>
            <p>Floral Decor</p>
          </div>
          <a href="#">Check Out More</a>
        </div>
        <div className="service__item">
          <img src="https://via.placeholder.com/300" alt="Service 5" />
          <div className="service__description">
            <h3>Photography & Videography</h3>
            <p>Candid Photography</p>
            <p>Pre-wedding Shoots</p>
            <p>Cinematic Wedding Films</p>
            <p>Drone Photography</p>
          </div>
          <a href="#">Check Out More</a>
        </div>
        <div className="service__item">
          <img src="https://via.placeholder.com/300" alt="Service 6" />
          <div className="service__description">
            <h3>Wedding Logistics Management</h3>
            <p>Transportation</p>
            <p>Accommodation</p>
            <p>Guest Hospitality</p>
            <p>Security Services</p>
          </div>
          <a href="#">Check Out More</a>
        </div>
      </div>
    </div>
  );
}

export default Service;
