import './About.scss';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>Our Story</h1>
          <p>A legacy of culinary excellence spanning generations</p>
        </div>
      </section>

      <section className="about-content section">
        <div className="container">
          <div className="about__grid">
            <div className="about__text">
              <span className="text-accent">Since 1985</span>
              <h2>A Passion for Perfection</h2>
              <p>
                Bella Vista was born from a simple dream: to create a dining experience 
                that transcends the ordinary. Founded by Chef Marco Bellacorte, our 
                restaurant has been a beacon of culinary excellence for nearly four decades.
              </p>
              <p>
                Every dish tells the story of our commitment to quality, creativity, and 
                the celebration of fine dining. We source our ingredients from local farms 
                and artisanal producers, ensuring that each meal is not just delicious, 
                but also sustainable and ethically prepared.
              </p>
            </div>
            <div className="about__image">
              <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Chef in kitchen" />
            </div>
          </div>
        </div>
      </section>

      <section className="team section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Team</h2>
          </div>
          <div className="team__grid">
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Chef Marco" />
              <h3>Chef Marco Bellacorte</h3>
              <p>Executive Chef & Founder</p>
            </div>
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sous Chef Isabella" />
              <h3>Isabella Rodriguez</h3>
              <p>Sous Chef</p>
            </div>
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Sommelier James" />
              <h3>James Wellington</h3>
              <p>Head Sommelier</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
