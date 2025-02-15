import React, { useState } from 'react';
import './App.css'; // Import CSS for styling

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
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <img src="ledflex-logo.png" alt="LEDFlex Logo" />
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

      {/* Banner Image */}
      <section id="home" className="banner">
        <div className="banner-content">
          <h1>Innovative LED Solutions for a Brighter Future</h1>
          <button className="cta-button" onClick={() => scrollToSection('services')}>Explore Our Services</button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about-us">
        <div className="about-content">
          <h2>About LEDFlex</h2>
          <p>LEDFlex is a leading provider of innovative LED solutions, offering customized lighting designs, maintenance, and consulting services to meet the needs of various industries.</p>
          <button className="learn-more-button" onClick={() => scrollToSection('services')}>Learn More</button>
        </div>
        <div className="about-image">
          <img src="about-image.jpg" alt="About LEDFlex" />
        </div>
      </section>

      {/* Core Services Sections */}
      <section id="services" className="services">
        <h2>Our Core Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src="custom-led-icon.png" alt="Custom LED Solutions" />
            <h3>Custom LED Solutions</h3>
            <p>Tailored LED solutions for various industries.</p>
          </div>
          <div className="service-card">
            <img src="maintenance-icon.png" alt="LED Maintenance" />
            <h3>LED Maintenance</h3>
            <p>Ensuring long-lasting performance for your LED systems.</p>
          </div>
          <div className="service-card">
            <img src="consulting-icon.png" alt="Consulting" />
            <h3>Consulting</h3>
            <p>Expert consulting for your LED projects.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Our Projects</h2>
        <div className="project-gallery">
          <div className="project-item">
            <img src="project1.jpg" alt="Project 1" />
            <p>Commercial LED Installation</p>
          </div>
          <div className="project-item">
            <img src="project2.jpg" alt="Project 2" />
            <p>Residential LED Solutions</p>
          </div>
          <div className="project-item">
            <img src="project3.jpg" alt="Project 3" />
            <p>Industrial LED Systems</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
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
              <img src="newsletter-image.jpg" alt="Newsletter" />
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
            <p>Phone: +123 456 7890</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><img src="facebook-icon.png" alt="Facebook" /></a>
              <a href="#"><img src="twitter-icon.png" alt="Twitter" /></a>
              <a href="#"><img src="linkedin-icon.png" alt="LinkedIn" /></a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Location</h3>
            <p>123 LED Street, Tech City, World</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 LEDFlex. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;