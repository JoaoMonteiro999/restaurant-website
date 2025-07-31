const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "An absolutely extraordinary dining experience! Every dish was a masterpiece, and the service was impeccable. Bella Vista has set a new standard for fine dining.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616c830588a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Michael Chen",
      text: "The ambiance is sophisticated yet welcoming. Chef Marco's creativity shines through in every bite. This is definitely our new favorite restaurant!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Emily Davis",
      text: "From the wine selection to the dessert, everything was perfect. The staff anticipated our every need. A truly memorable evening!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <div style={{ marginTop: '80px', padding: '60px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', color: '#8B4513', marginBottom: '20px' }}>Guest Reviews</h1>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>What our guests say about their Bella Vista experience</p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '40px' 
        }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{ 
              background: '#f5f5dc', 
              padding: '40px', 
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '50%', 
                  objectFit: 'cover',
                  marginBottom: '20px'
                }}
              />
              
              <div style={{ marginBottom: '20px' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ 
                    color: i < testimonial.rating ? '#D4AF37' : '#ddd',
                    fontSize: '1.5rem',
                    marginRight: '5px'
                  }}>★</span>
                ))}
              </div>
              
              <p style={{ 
                color: '#666', 
                fontSize: '1.1rem', 
                lineHeight: '1.6',
                fontStyle: 'italic',
                marginBottom: '20px'
              }}>
                "{testimonial.text}"
              </p>
              
              <h3 style={{ 
                color: '#8B4513', 
                marginBottom: '0',
                fontSize: '1.2rem'
              }}>
                {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
        
        <div style={{ 
          textAlign: 'center', 
          marginTop: '60px',
          background: '#8B4513',
          color: 'white',
          padding: '40px',
          borderRadius: '12px'
        }}>
          <h2 style={{ color: 'white', marginBottom: '20px' }}>Share Your Experience</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: '0.9' }}>
            We'd love to hear about your dining experience at Bella Vista!
          </p>
          <a 
            href="/contact" 
            style={{
              background: '#D4AF37',
              color: '#2C1810',
              padding: '15px 30px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }}
          >
            Leave a Review
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
