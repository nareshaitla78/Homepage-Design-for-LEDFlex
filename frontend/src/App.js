import React, { useState } from 'react';
import './App.css';  
import logo from "../src/assets/ledflexgroup_logo.jpg"
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);  
  };
  

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="LEDFlex Logo" />
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a href="#about" onClick={() => scrollToSection('about')}>About Us</a></li>
          <li className="dropdown">
            <a href="#services" onClick={() => scrollToSection('services')}>Services</a>
            <ul className="dropdown-menu">
              <li><a href="#custom-led" onClick={() => scrollToSection('custom-led')}>Custom LED Solutions</a></li>
              <li><a href="#maintenance" onClick={() => scrollToSection('maintenance')}>LED Maintenance</a></li>
              <li><a href="#consulting" onClick={() => scrollToSection('consulting')}>Consulting</a></li>
            </ul>
          </li>
          <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
        <div className="hamburger" onClick={toggleMobileMenu}>
          &#9776;
        </div>
      </nav>

      <section id="home" className="banner">
        <div className="banner-content">
          <h1>Innovative LED Solutions for a Brighter Future</h1>
          <button className="cta-button" onClick={() => scrollToSection('services')}>Explore Our Services</button>
        </div>
      </section>

      <section id="about" className="about-us">
  <div className="about-content">
    <h2>About LEDFlex</h2>
    <h3>Mission</h3>
    <p>
      We manufacture well-engineered linear lighting systems that integrate with the dynamic demands of today’s market.
    </p>
    <h3>Vision</h3>
    <p>
      To be globally recognised for sustainable premium linear lighting systems that inspire creativity while raising the benchmark for customer service excellence.
    </p>
    <button className="learn-more-button" onClick={() => scrollToSection('services')}>Learn More</button>
  </div>
  <div className="about-image">
    {/* <img src="about-image.jpg" alt="About LEDFlex" /> */}
  </div>
</section>

      {/* Core Services Sections */}
      <section id="services" className="services">
        <h2>Our Core Services</h2>
        <div className="service-cards">
          <div id="custom-led" className="service-card">
            {/* <img src="custom-led-icon.png" alt="Custom LED Solutions" /> */}
            <h3>Custom LED Solutions</h3>
            <p>Tailored LED solutions for various industries.</p>
          </div>
          <div id="maintenance" className="service-card">
            {/* <img src="maintenance-icon.png" alt="LED Maintenance" /> */}
            <h3>LED Maintenance</h3>
            <p>Ensuring long-lasting performance for your LED systems.</p>
          </div>
          <div id="consulting" className="service-card">
            {/* <img src="consulting-icon.png" alt="Consulting" /> */}
            <h3>Consulting</h3>
            <p>Expert consulting for your LED projects.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
  <h2>Our Projects</h2>
  <div className="project-gallery">
    <div className="project-item">
      <div className="project-content">
        <h3>Aker Tech House</h3>
        <div className="project-details">
          <p><strong>Category:</strong> Workplace</p>
          <p><strong>Lighting Design:</strong> Void AS</p>
          <p><strong>Location:</strong> Fornebu, Norway</p>
          <p><strong>Completion:</strong> 2024</p>
        </div>
        <p className="project-description">
          Aker Tech House, a pioneering industrial investment company since 1841, stands at the forefront of innovation and sustainability. Within this visionary space, Khaosa series of six striking light installations seamlessly integrates with the building’s structure, redefining architectural lighting and transforming its interior into a dynamic, immersive experience.
        </p>
      </div>
    </div>
    <div className="project-item">
      <div className="project-content">
        <h3>Misk School</h3>
        <div className="project-details">
          <p><strong>Category:</strong> Infrastructure</p>
          <p><strong>Lighting Design:</strong> Light Alliance</p>
          <p><strong>Location:</strong> Riyadh, Saudi Arabia</p>
          <p><strong>Completion:</strong> 2024</p>
        </div>
        <p className="project-description">
        Misk School in Riyadh exemplifies the intersection of modern architecture and sustainable design, earning the coveted Sustainability Lighting Project of the Year award at the Light Middle East Awards 2025. 
        </p>
      </div>
    </div>
    <div className="project-item">
      <div className="project-content">
        <h3>Hyde London City</h3>
        <div className="project-details">
          <p><strong>Category:</strong> Hospitality</p>
          <p><strong>Lighting Design:</strong> Elektra Lighting</p>
          <p><strong>Location:</strong> London, UK</p>
          <p><strong>Completion:</strong> Running</p>
        </div>
        <p className="project-description">
        The newly opened Hyde London City is a sophisticated sanctuary in the heart of London, blending heritage with contemporary design to cater to the modern traveller. In collaboration with Elektra Lighting, LEDFlex played a pivotal role in transforming the interiors, enhancing the hotel’s design narrative with precision-engineered lighting solutions that elevate its refined and inviting atmosphere.        </p>
      </div>
    </div>
  </div>
</section>

<section className="newsletter">
  <h2>Subscribe to Our Newsletter</h2>
  <button className="newsletter-button" onClick={toggleModal}>
    Subscribe
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
      </div>
      <button className="close-button" onClick={toggleModal}>
        &times;
      </button>
    </div>
  </div>
)}

{/* Footer */}
<footer id="contact" className="footer">
  <div className="footer-content">
    <div className="footer-section">
      <h3>Contact Us</h3>
      <p>Email: info@ledflex.com</p>
    </div>
    <div className="footer-section">
      <h3>Follow Us</h3>
      <div className="social-icons">
        <a href="#"><img rel="icon" src="https://static.xx.fbcdn.net/rsrc.php/yx/r/e9sqr8WnkCf.ico" alt="Facebook" /></a>
        <a href="https://www.instagram.com/ledflexgroup/"><img rel="icon" sizes="192x192" src="https://static.cdninstagram.com/rsrc.php/v4/yI/r/VsNE-OHk_8a.png" /></a>
        <a href="https://www.linkedin.com/company/ledflexgroup/"><img  rel="icon" type="image/svg+xml" src="https://static.licdn.com/aero-v1/sc/h/akt4ae504epesldzj74dzred8" id="favicon-svg" /></a>
      </div>
    </div>
    <div className="footer-section">
      <h3>Location</h3>
      <p>Hyderabad</p>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; 2025 LEDFlex. All rights reserved.</p>
  </div>
</footer>
    </div>
  );
}

export default App;