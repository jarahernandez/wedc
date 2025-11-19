export default function Events(){
  return (
    <main className="section">
      <div className="container">
        <h1>Events</h1>
        <p style={{ color:"var(--muted)" }}>Upcoming programs, clinics, and buy-local campaigns.</p>
        <div className="grid-3" style={{ marginTop:18 }}>
          {[1,2,3,4,5,6].map(n => (
            <article key={n} className="card">
              <div className="badge">Dec {5+n}, 2025 • Wayne, NJ</div>
              <h3 style={{ marginTop:6 }}>Small Business Clinic #{n}</h3>
              <p style={{ color:"var(--muted)" }}>Mentorship and resources for owners.</p>
              <a href="#" style={{ color:"var(--brand-sky)", fontWeight:600 }}>Details →</a>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
