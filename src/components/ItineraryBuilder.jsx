function ItineraryBuilder() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 20px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Trip Itinerary Builder</h1>
      <p style={{ color: '#4b5563', marginBottom: '2rem' }}>Drag and drop experiences to build your perfect Gambia trip.</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Available Experiences</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {['Kora Workshop', 'Cooking Class', 'Roots Tour', 'Bird Watching'].map((item) => (
              <div key={item} style={{ padding: '1rem', border: '1px solid #d1d5db', borderRadius: '4px', cursor: 'move' }}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Your Itinerary</h3>
          <p style={{ color: '#6b7280' }}>Drag items here to build your trip</p>
        </div>
      </div>
    </div>
  )
}

export default ItineraryBuilder