import React, { useState } from 'react';
import './App.css'; // Import CSS for styling

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">LEDFlex</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li className="dropdown">
            <a href="#services">Services</a>
            <ul className="dropdown-menu">
              <li><a href="#custom-led">Custom LED Solutions</a></li>
              <li><a href="#maintenance">LED Maintenance</a></li>
              <li><a href="#consulting">Consulting</a></li>
            </ul>
          </li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="hamburger">&#9776;</div>
      </nav>

      {/* Banner Image */}
      <section className="banner">
        <div className="banner-content">
          <h1>Illuminating Your World with Advanced LED Solutions</h1>
          <button className="cta-button">Explore Our Services</button>
        </div>
      </section>

      {/* Core Services Sections */}
      <section className="services">
        <div className="service-card">
          <h2>Custom LED Solutions</h2>
          <p>Tailored LED solutions for various industries.</p>
        </div>
        <div className="service-card">
          <h2>LED Maintenance</h2>
          <p>Ensuring long-lasting performance for your LED systems.</p>
        </div>
        <div className="service-card">
          <h2>Consulting</h2>
          <p>Expert consulting for your LED projects.</p>
        </div>
      </section>

      {/* Newsletter Button */}
      <section className="newsletter">
        <button className="newsletter-button" onClick={toggleModal}>
          Subscribe to Newsletter
        </button>
      </section>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <h2>Subscribe to Our Newsletter</h2>
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <button type="submit">Subscribe</button>
              </form>
              <img src="newsletter-image.jpg" alt="Newsletter" />
            </div>
            <button className="close-button" onClick={toggleModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;