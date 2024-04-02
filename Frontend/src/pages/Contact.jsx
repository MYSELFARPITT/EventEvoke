import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaWhatsapp, 
} from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import "../css/Contact.css";
import Navbar from "../components/header/navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="Main_Heading_Contact_Us">
        <h1>Contact Us!</h1>
      </div>
      <div>
        <div className="contact">
          <div className="contact__header">
            <h2>Plan Your Beautiful Day</h2>
            <p>
              Transform your special day into an unforgettable memory with
              EventEvoke. Contact us today for a personalized consultation and
              let us craft a celebration as unique as you.
            </p>
          </div>
          <div className="contact__details">
            <div className="contact__left">
              <div className="contact__item">
                <FaMapLocationDot className="icon" />
                <div>
                  <h3>Address</h3>
                  <p>
                    Ground Floor & 2nd Floor, #198, Industrial Area Phase 2,
                    Panchkula , Haryana 134113
                  </p>
                </div>
              </div>
              <div className="contact__item">
                <FaEnvelope className="icon" />
                <div>
                  <h3>Email</h3>
                  <p>event_evoke@example.com</p>
                </div>
              </div>
              <div className="contact__item">
                <FaPhone className="icon" />
                <div>
                  <h3>Phone Number</h3>
                  <p>+91 8607331801</p>
                </div>
              </div>
              <div className="contact__item">
                <FaWhatsapp className="icon" />
                <div>
                  <h3>Whatsapp Us</h3>
                  <p>+91 84567890</p>
                </div>
              </div>
            </div>
            <div className="contact__right">
              <form>
                <div className="form__group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" />
                </div>
                <div className="form__group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" />
                </div>

                <div className="form__group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" />
                </div>


                <div className="form__group">
                  <label htmlFor="days">Number of Days</label>
                  <input type="number" id="days" name="days" />
                </div>
                <div className="form__group">
                  <label htmlFor="events">Number of Events</label>
                  <input type="number" id="events" name="events" />
                </div>
                <div className="form__group">
                  <label htmlFor="guests">Number of Guests</label>
                  <input type="number" id="guests" name="guests" />
                </div>
                <div className="form__group">
                  <label htmlFor="rooms">Number of Rooms</label>
                  <input type="number" id="rooms" name="rooms" />
                </div>
                <div className="form__group">
                  <label htmlFor="budget">Budget (in lakhs)</label>
                  <input type="number" id="budget" name="budget" />
                </div>
                <div className="form__group">
                  <label htmlFor="service">Select Service</label>
                  <select id="service" name="service">
                    <option value="1">Service 1</option>
                    <option value="2">Service 2</option>
                    <option value="3">Service 3</option>
                    <option value="4">Service 4</option>
                  </select>
                </div>
                <div className="form__group">
                  <label htmlFor="special-request">Any Special Request</label>
                  <textarea
                    id="special-request"
                    name="special-request"
                  ></textarea>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

/*<div className="contact">
      <div className="contact__header">
        <h2>Plan Your Beautiful Day</h2>
        <p>Transform your special day into an unforgettable memory with EventEvoke. Contact us today for a personalized consultation and let us craft a celebration as unique as you.</p>
      </div>
      <div className="contact__details">
        <div className="contact__left">
          <div className="contact__item">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h3>Address</h3>
              <p>Ground Floor & 2nd Floor, #198, Industrial Area Phase 2, Panchkula, Haryana 134113</p>
            </div>
          </div>
          <div className="contact__item">
            <FaEnvelope className="icon" />
            <div>
              <h3>Email</h3>
              <p>event_evoke@example.com</p>
            </div>
          </div>
          <div className="contact__item">
            <FaPhone className="icon" />
            <div>
              <h3>Phone Number</h3>
              <p>+91 8607331801</p>
            </div>
          </div>
          <div className="contact__item">
            <FaWhatsapp className="icon" />
            <div>
              <h3>Whatsapp Us</h3>
              <p>+91 84567890</p>
            </div>
          </div>
        </div>
        <div className="contact__right">
          <form>
            <div className="form__group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form__group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <h2>Some details about Event</h2>

            <div className="form__group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="form__group">
              <label htmlFor="days">Number of Days</label>
              <input type="number" id="days" name="days" />
            </div>
            <div className="form__group">
              <label htmlFor="events">Number of Events</label>
              <input type="number" id="events" name="events" />
            </div>
            <div className="form__group">
              <label htmlFor="guests">Number of Guests</label>
              <input type="number" id="guests" name="guests" />
            </div>
            <div className="form__group">
              <label htmlFor="rooms">Number of Rooms</label>
              <input type="number" id="rooms" name="rooms" />
            </div>
            <div className="form__group">
              <label htmlFor="budget">Budget (in lakhs)</label>
              <input type="number" id="budget" name="budget" />
            </div>
            <div className="form__group">
              <label htmlFor="service">Select Service</label>
              <select id="service" name="service">
                <option value="1">Service 1</option>
                <option value="2">Service 2</option>
                <option value="3">Service 3</option>
                <option value="4">Service 4</option>
              </select>
            </div>
            <div className="form__group">
              <label htmlFor="special-request">Any Special Request</label>
              <textarea id="special-request" name="special-request"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>*/
