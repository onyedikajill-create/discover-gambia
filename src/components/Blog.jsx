function Blog() {
  const posts = [
    { id: 1, title: 'Complete Guide to Gambia', date: '2026-04-15', excerpt: 'Everything you need to know before traveling to The Smiling Coast.' },
    { id: 2, title: '7-Day Gambia Itinerary', date: '2026-04-10', excerpt: 'The perfect week-long trip to experience Gambia\'s best.' },
    { id: 3, title: 'Kora Music: The Soul of Mandinka', date: '2026-04-05', excerpt: 'Learn about the history and significance of the kora instrument.' }
  ]

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 20px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Travel Blog</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {posts.map((post) => (
          <div key={post.id} style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{post.title}</h3>
            <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{post.date}</p>
            <p style={{ color: '#4b5563', marginBottom: '1rem' }}>{post.excerpt}</p>
            <button className="btn-secondary">Read More</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog