function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--gambia-blue)', color: 'white', padding: '3rem 0 1rem', marginTop: '4rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <h4 style={{ fontSize: '1.2rem', fontFamily: 'Playfair Display', marginBottom: '1rem' }}>Discover Gambia</h4>
            <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>The Smiling Coast of Africa — Your gateway to Gambian culture and tourism.</p>
          </div>
          <div>
            <h4 style={{ fontSize: '1.2rem', fontFamily: 'Playfair Display', marginBottom: '1rem' }}>Experiences</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="/experiences" style={{ color: 'white', opacity: 0.8, fontSize: '0.9rem' }}>Kora Workshops</a>
              <a href="/experiences" style={{ color: 'white', opacity: 0.8, fontSize: '0.9rem' }}>Cooking Classes</a>
              <a href="/experiences" style={{ color: 'white', opacity: 0.8, fontSize: '0.9rem' }}>Roots Tours</a>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: '1.2rem', fontFamily: 'Playfair Display', marginBottom: '1rem' }}>FORTIS Ecosystem</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="https://fortisinvicta.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', opacity: 0.8, fontSize: '0.9rem' }}>FORTIS INVICTA LTD — Corporate</a>
              <a href="https://fortisinvicta.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: 'white', opacity: 0.8, fontSize: '0.9rem' }}>FORTIS INVICTA UK</a>
              <a href="https://fortisos.cloud" target="_blank" rel="noopener noreferrer" style={{ color: 'white', opacity: 0.8, fontSize: '0.9rem' }}>FORTIS OS — Business Platform</a>
              <a href="https://ujris.org" target="_blank" rel="noopener noreferrer" style={{ color: 'white', opacity: 0.8, fontSize: '0.9rem' }}>UJRIS — Legal Intelligence</a>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '1rem', textAlign: 'center', fontSize: '0.9rem', opacity: 0.6 }}>
          © 2026 FORTIS INVICTA LTD. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer