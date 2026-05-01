function CulturalHub() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 20px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Gambian Culture Hub</h1>
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ethnic Groups</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {['Mandinka', 'Wolof', 'Fula', 'Jola', 'Serahule'].map((group) => (
            <div key={group} style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{group}</h3>
              <p style={{ color: '#4b5563' }}>Learn about the traditions, language, and history of the {group} people.</p>
            </div>
          ))}
        </div>
      </section>
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Music & Dance</h2>
        <p style={{ color: '#4b5563' }}>Explore kora music, kumpo masquerades, and traditional dance forms.</p>
      </section>
      <section>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Festivals</h2>
        <p style={{ color: '#4b5563' }}>Discover Gambia's vibrant cultural festivals throughout the year.</p>
      </section>
    </div>
  )
}

export default CulturalHub