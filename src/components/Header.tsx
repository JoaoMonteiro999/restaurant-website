import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.nav__menu') && !target.closest('.nav__toggle')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = '0';
      document.body.style.left = '0';
      document.body.style.right = '0';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
    // Scroll to top immediately for better UX
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <Link to="/" className="nav__logo" onClick={handleNavClick}>
            <span className="nav__logo-text">Bella Vista</span>
            <span className="nav__logo-subtitle">Fine Dining</span>
          </Link>

          {/* Mobile overlay */}
          {isMenuOpen && (
            <div 
              className="nav__overlay" 
              onClick={closeMenu}
            />
          )}

          <ul className={`nav__menu ${isMenuOpen ? 'nav__menu--open' : ''}`}>
            <li><Link to="/" className={`nav__link ${isActive('/') ? 'active' : ''}`} onClick={handleNavClick}>Home</Link></li>
            <li><Link to="/about" className={`nav__link ${isActive('/about') ? 'active' : ''}`} onClick={handleNavClick}>About</Link></li>
            <li><Link to="/menu" className={`nav__link ${isActive('/menu') ? 'active' : ''}`} onClick={handleNavClick}>Menu</Link></li>
            <li><Link to="/gallery" className={`nav__link ${isActive('/gallery') ? 'active' : ''}`} onClick={handleNavClick}>Gallery</Link></li>
            <li><Link to="/events" className={`nav__link ${isActive('/events') ? 'active' : ''}`} onClick={handleNavClick}>Events</Link></li>
            <li><Link to="/testimonials" className={`nav__link ${isActive('/testimonials') ? 'active' : ''}`} onClick={handleNavClick}>Reviews</Link></li>
            <li><Link to="/contact" className={`nav__link ${isActive('/contact') ? 'active' : ''}`} onClick={handleNavClick}>Contact</Link></li>
            <li><Link to="/reservations" className={`nav__link nav__link--cta ${isActive('/reservations') ? 'active' : ''}`} onClick={handleNavClick}>Reserve</Link></li>
          </ul>

          <button 
            className={`nav__toggle ${isMenuOpen ? 'nav__toggle--open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
