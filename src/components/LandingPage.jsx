import { useState } from 'react'
import ProverbWidget from './ProverbWidget'

function LandingPage() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    alert(`Subscribed ${email} to Discover Gambia updates!`)
    setEmail('')
  }

  return (
    <div>
      <section style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: "url('/images/hero-gambia.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}></div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 10, textAlign: 'center', color: 'white' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '1rem' }}>Discover Gambia</h1>
          <p style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>The Smiling Coast of Africa</p>
          <p style={{ fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>Where Africa smiles — experience rich culture, pristine beaches, and unforgettable adventures.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" style={{ fontSize: '1.1rem' }}>Explore Experiences</button>
            <button className="btn-secondary" style={{ fontSize: '1.1rem' }}>Plan Your Trip</button>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0', maxWidth: '1200px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, textAlign: 'center', marginBottom: '3rem' }}>Featured Experiences</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            { title: 'Kora Workshop', desc: 'Learn the soulful sounds of the kora with master griots', price: '$49' },
            { title: 'Cooking Class', desc: 'Master Domoda and Benachin with local chefs', price: '$35' },
            { title: 'Roots Tour', desc: 'Follow Alex Haley\'s journey to Juffure and James Island', price: '$89' }
          ].map((exp, idx) => (
            <div key={idx} style={{ border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
              <div style={{ height: '200px', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#6b7280' }}>Experience Image</span>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>{exp.title}</h3>
                <p style={{ color: '#4b5563', marginBottom: '1rem' }}>{exp.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--gambia-red)' }}>{exp.price}</span>
                  <button className="btn-primary">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '2rem 0', backgroundColor: 'var(--gambia-blue)', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <ProverbWidget />
        </div>
      </section>

      <section style={{ padding: '4rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Get 7-Day Gambia Itinerary Free</h2>
          <p style={{ color: '#4b5563', marginBottom: '2rem' }}>Sign up for our newsletter and receive our premium 7-day itinerary PDF, plus travel tips and exclusive offers.</p>
          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="Your email address"
              style={{ flex: 1, padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '8px', minWidth: '250px' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-primary">Subscribe Now</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default LandingPage