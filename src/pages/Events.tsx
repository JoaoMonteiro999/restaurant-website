const Events = () => {
  return (
    <div style={{ marginTop: '80px', padding: '60px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', color: '#8B4513', marginBottom: '20px' }}>Events</h1>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>Special occasions deserve exceptional experiences</p>
        </div>
        
        <div style={{ display: 'grid', gap: '40px' }}>
          <div style={{ 
            background: '#f5f5dc', 
            padding: '40px', 
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h2 style={{ color: '#8B4513', marginBottom: '20px' }}>Wine Tasting Evenings</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Join us every Friday for an exclusive wine tasting experience featuring 
              selections from our award-winning cellar.
            </p>
            <p style={{ color: '#D4AF37', fontWeight: 'bold', marginTop: '20px' }}>Every Friday | 7:00 PM</p>
          </div>
          
          <div style={{ 
            background: '#f5f5dc', 
            padding: '40px', 
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h2 style={{ color: '#8B4513', marginBottom: '20px' }}>Chef's Table Experience</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.6' }}>
              An intimate dining experience where Chef Marco personally prepares 
              a seven-course tasting menu at our exclusive chef's table.
            </p>
            <p style={{ color: '#D4AF37', fontWeight: 'bold', marginTop: '20px' }}>Monthly | By Reservation</p>
          </div>
          
          <div style={{ 
            background: '#f5f5dc', 
            padding: '40px', 
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h2 style={{ color: '#8B4513', marginBottom: '20px' }}>Private Dining</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Host your special celebrations in our elegant private dining room, 
              accommodating up to 20 guests with personalized service.
            </p>
            <p style={{ color: '#D4AF37', fontWeight: 'bold', marginTop: '20px' }}>Available Daily | Contact for Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
