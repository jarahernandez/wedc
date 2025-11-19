export default function Resources(){
  return (
    <main className="section">
      <div className="container">
        <h1>Business Resources</h1>
        <div className="grid-3" style={{ marginTop:18 }}>
          {[
            { t:"Workshops", d:"Monthly sessions on marketing, storefront operations, and digital tools." },
            { t:"Mentor Network", d:"Connect with advisors across finance, legal, and technology." },
            { t:"Grants & Certifications", d:"Guidance and referrals for local and state programs." }
          ].map(x => (
            <article key={x.t} className="card">
              <h3 style={{ marginTop:0 }}>{x.t}</h3>
              <p style={{ color:"var(--muted)" }}>{x.d}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
