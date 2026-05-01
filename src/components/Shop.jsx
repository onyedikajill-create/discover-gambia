function Shop() {
  const products = [
    { id: 1, name: 'Handwoven Kora String', price: 15 },
    { id: 2, name: 'Gambian Batik Fabric', price: 30 },
    { id: 3, name: 'Wooden Kumpo Mask', price: 45 }
  ]

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 20px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Handicraft Marketplace</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1.5rem' }}>
            <div style={{ height: '150px', backgroundColor: '#f3f4f6', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#6b7280' }}>Product Image</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{product.name}</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 700, color: 'var(--gambia-red)' }}>${product.price}</span>
              <button className="btn-primary">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop