import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <div className="container">
            <div className="hero__text">
              <span className="hero__subtitle">Welcome to</span>
              <h1 className="hero__title">Bella Vista</h1>
              <p className="hero__description">
                Experience culinary excellence in an atmosphere of refined elegance. 
                Where every dish tells a story and every moment is crafted to perfection.
              </p>
              <div className="hero__actions">
                <Link to="/reservations" className="btn btn-primary">Make a Reservation</Link>
                <Link to="/menu" className="btn btn-secondary">View Menu</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__scroll">
          <span>Scroll to discover</span>
          <div className="hero__scroll-arrow"></div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome section">
        <div className="container">
          <div className="welcome__content">
            <div className="welcome__text">
              <span className="text-accent">A Culinary Journey</span>
              <h2>Where Passion Meets Perfection</h2>
              <p>
                At Bella Vista, we believe dining is more than just a meal—it's an experience 
                that engages all your senses. Our award-winning chefs craft each dish with 
                locally-sourced ingredients and innovative techniques, creating flavors that 
                dance on your palate.
              </p>
              <p>
                From our elegant dining room overlooking the city to our carefully curated 
                wine selection, every detail is designed to create memories that last a lifetime.
              </p>
              <Link to="/about" className="btn btn-gold">Learn Our Story</Link>
            </div>
            <div className="welcome__image">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Elegant restaurant interior" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Bella Vista</h2>
          </div>
          <div className="features__grid">
            <div className="feature">
              <div className="feature__icon">
                <i className="fas fa-utensils"></i>
              </div>
              <h3>Exquisite Cuisine</h3>
              <p>Innovative dishes crafted by world-renowned chefs using the finest ingredients</p>
            </div>
            <div className="feature">
              <div className="feature__icon">
                <i className="fas fa-wine-glass-alt"></i>
              </div>
              <h3>Premium Wine Selection</h3>
              <p>Carefully curated wines from renowned vineyards around the world</p>
            </div>
            <div className="feature">
              <div className="feature__icon">
                <i className="fas fa-concierge-bell"></i>
              </div>
              <h3>Impeccable Service</h3>
              <p>Attentive staff dedicated to making your dining experience unforgettable</p>
            </div>
            <div className="feature">
              <div className="feature__icon">
                <i className="fas fa-city"></i>
              </div>
              <h3>Stunning Views</h3>
              <p>Breathtaking panoramic views of the city skyline from our elegant dining room</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section">
        <div className="container">
          <div className="cta__content">
            <span className="text-accent">Ready for an Unforgettable Experience?</span>
            <h2>Reserve Your Table Today</h2>
            <p>
              Join us for an extraordinary culinary journey that will delight your senses 
              and create lasting memories.
            </p>
            <Link to="/reservations" className="btn btn-primary">Book Your Table</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
