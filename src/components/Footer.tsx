import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <div className="footer__logo">
              <span className="footer__logo-text">Bella Vista</span>
              <span className="footer__logo-subtitle">Fine Dining</span>
            </div>
            <p className="footer__description">
              Experience exceptional cuisine in an elegant atmosphere. 
              Where every meal is a celebration of flavor and artistry.
            </p>
            <div className="footer__social">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          <div className="footer__section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4>Contact Info</h4>
            <div className="footer__contact">
              <p><i className="fas fa-map-marker-alt"></i> 123 Gourmet Street, Culinary District</p>
              <p><i className="fas fa-phone"></i> (555) 123-4567</p>
              <p><i className="fas fa-envelope"></i> info@bellavista.com</p>
            </div>
          </div>

          <div className="footer__section">
            <h4>Hours</h4>
            <div className="footer__hours">
              <p><strong>Lunch</strong><br />Mon - Fri: 11:30 AM - 2:30 PM</p>
              <p><strong>Dinner</strong><br />Mon - Sun: 5:30 PM - 10:00 PM</p>
              <p><strong>Weekend Brunch</strong><br />Sat - Sun: 10:00 AM - 3:00 PM</p>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; 2025 Bella Vista Fine Dining. All rights reserved.</p>
          <div className="footer__links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
