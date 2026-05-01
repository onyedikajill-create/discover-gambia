function Experiences() {
  const experiences = [
    { id: 1, title: 'Kora Workshop', price: 49, desc: '2-hour session with master griot' },
    { id: 2, title: 'Cooking Class', price: 35, desc: 'Learn to make Domoda and Benachin' },
    { id: 3, title: 'Roots Tour', price: 89, desc: 'Full-day tour to Juffure and James Island' },
    { id: 4, title: 'Bird Watching', price: 65, desc: 'Guided tour along River Gambia' }
  ]

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 20px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Bookable Experiences</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {experiences.map((exp) => (
          <div key={exp.id} style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{exp.title}</h3>
            <p style={{ color: '#4b5563', marginBottom: '1rem' }}>{exp.desc}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--gambia-red)' }}>${exp.price}</span>
              <button className="btn-primary">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experiences