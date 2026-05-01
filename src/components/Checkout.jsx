function Checkout() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 20px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Checkout</h1>
      <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Order Summary</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span>Kora Workshop</span>
          <span>$49.00</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span>Cultural Preservation Fund Donation (5%)</span>
          <span>$2.45</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '1.2rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
          <span>Total</span>
          <span>$51.45</span>
        </div>
      </div>
      <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Payment Details</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input type="text" placeholder="Card Number" style={{ padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '8px' }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <input type="text" placeholder="Expiry Date" style={{ padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '8px' }} />
            <input type="text" placeholder="CVV" style={{ padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '8px' }} />
          </div>
          <button className="btn-primary" style={{ width: '100%' }}>Pay Now</button>
        </div>
      </div>
    </div>
  )
}

export default Checkout