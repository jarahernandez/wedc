export default function Projects(){
  return (
    <main className="section">
      <div className="container">
        <h1>Projects</h1>
        <div className="grid-3" style={{ marginTop:18 }}>
          {[
            { t:"Wayne Buy-Local", d:"Marketing and neighborhood activations to boost downtown traffic." },
            { t:"Startup Studio", d:"Hands-on support for early-stage founders and retail concepts." },
            { t:"Small Biz Clinic", d:"Quarterly days of free advisory sessions." }
          ].map(p => (
            <article key={p.t} className="card">
              <h3 style={{ marginTop:0 }}>{p.t}</h3>
              <p style={{ color:"var(--muted)" }}>{p.d}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
