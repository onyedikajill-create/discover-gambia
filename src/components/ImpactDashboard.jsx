function ImpactDashboard() {
  const impact = {
    totalBenefit: 12500,
    jobsCreated: 12,
    treesPlanted: 450,
    griotApprentices: 8,
    kumpoPerformances: 15
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 20px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Community Impact Dashboard</h1>
      <p style={{ color: '#4b5563', marginBottom: '3rem' }}>5% of every booking goes to Gambian cultural preservation and community development.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
        <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '8px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--gambia-red)', fontWeight: 700 }}>${impact.totalBenefit.toLocaleString()}</h3>
          <p style={{ color: '#4b5563' }}>Total Community Benefit</p>
        </div>
        <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '8px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--gambia-blue)', fontWeight: 700 }}>{impact.jobsCreated}</h3>
          <p style={{ color: '#4b5563' }}>Jobs Created</p>
        </div>
        <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '8px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--fortis-teal)', fontWeight: 700 }}>{impact.treesPlanted}</h3>
          <p style={{ color: '#4b5563' }}>Trees Planted</p>
        </div>
        <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '8px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--fortis-gold)', fontWeight: 700 }}>{impact.griotApprentices}</h3>
          <p style={{ color: '#4b5563' }}>Griot Apprentices Funded</p>
        </div>
      </div>
    </div>
  )
}

export default ImpactDashboard