function PhotoContest() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 20px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Gambia Photo Contest</h1>
      <p style={{ color: '#4b5563', marginBottom: '2rem' }}>Upload your best Gambia travel photos and vote for your favorites.</p>
      <div style={{ border: '2px dashed #d1d5db', borderRadius: '8px', padding: '3rem', textAlign: 'center', marginBottom: '2rem' }}>
        <p style={{ color: '#6b7280' }}>Drag and drop your photo here, or click to upload</p>
        <button className="btn-primary" style={{ marginTop: '1rem' }}>Upload Photo</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {[1,2,3,4].map((item) => (
          <div key={item} style={{ height: '150px', backgroundColor: '#f3f4f6', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#6b7280' }}>Photo {item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PhotoContest