function ProverbWidget() {
  const proverbs = [
    { text: 'An empty bag cannot stand.', origin: 'Mandinka' },
    { text: 'The lizard that jumps from the roof to the ground does not complain of the distance.', origin: 'Wolof' },
    { text: 'A single hand cannot tie a bundle.', origin: 'Fula' }
  ]

  const today = new Date().getDate()
  const proverb = proverbs[today % proverbs.length]

  return (
    <div style={{ padding: '1rem' }}>
      <h3 style={{ fontSize: '1.5rem', fontFamily: 'Playfair Display', marginBottom: '0.5rem' }}>Daily Gambian Proverb</h3>
      <p style={{ fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '0.5rem' }}>"{proverb.text}"</p>
      <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>— {proverb.origin} Proverb</p>
      <button style={{ marginTop: '1rem', backgroundColor: 'transparent', border: '1px solid white', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>Share on WhatsApp</button>
    </div>
  )
}

export default ProverbWidget