import React from "react";
import Navbar from "../components/header/navbar.jsx";
import Footer from "../components/footer/footer.jsx";
import Contact from "./Contact.jsx";
// import About from './About.jsx';
// import Services from './Services.jsx';
// import Gallery from './Gallery.jsx';
import WeddingPlanning from "./Sub-Services/Wedding_Planning.jsx";
import "../css/Home.css";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="home-page">
        <div className="content">
          <div className="title">
            <h1 className="heading">" Crafting Dreams, Creating Memories "</h1>
            <br />
            <p className="subheading">Elevate Your Event to Extraordinary</p>
            <br />
            <br />
            <button className="get-started-btn">GET STARTED</button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="quote">WHY WE?</h1>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
