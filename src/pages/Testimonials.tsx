const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Absolutely exceptional! The attention to detail in every dish was remarkable. Chef Marco truly is an artist.',
      date: 'January 2025'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'The wine pairing was perfect, and the service was impeccable. This is fine dining at its absolute best.',
      date: 'December 2024'
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'Celebrated our anniversary here and it was magical. The ambiance, food, and service exceeded all expectations.',
      date: 'November 2024'
    },
    {
      name: 'David Wilson',
      rating: 5,
      text: 'A culinary journey like no other. Each course was a masterpiece. Worth every penny and more.',
      date: 'October 2024'
    }
  ];

  return (
    <div style={{ marginTop: '80px', padding: '60px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', color: '#8B4513', marginBottom: '20px' }}>Testimonials</h1>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>What our guests say about their experience</p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px' 
        }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{ 
              background: '#f5f5dc', 
              padding: '30px', 
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ marginBottom: '20px' }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} style={{ color: '#D4AF37', fontSize: '1.5rem' }}>★</span>
                ))}
              </div>
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.6', 
                color: '#333', 
                marginBottom: '20px',
                fontStyle: 'italic'
              }}>
                "{testimonial.text}"
              </p>
              <div>
                <strong style={{ color: '#8B4513', fontSize: '1.1rem' }}>{testimonial.name}</strong>
                <p style={{ color: '#666', margin: '5px 0 0 0' }}>{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
