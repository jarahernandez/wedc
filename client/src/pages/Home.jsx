import { Link } from "react-router-dom";
import hero from "../assets/hero.webp"; // replace with your image

export default function Home(){
  return (
    <main>

      {/* HERO */}
      <section
        className="hero"
        style={{
          backgroundImage: `
  linear-gradient(
    rgba(5, 5, 47, 0.55),   /* based on --wedc-navy */
    rgba(5, 5, 47, 0.82)
  ),
  url(${hero})
`,

          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="hero-inner">
            <h1>Wayne Economic Development Corporation</h1>
            <p>
              Founded in 2025, WEDC strengthens community vitality and helps local businesses
              grow through outreach, education, and strategic partnerships.
            </p>
            <div style={{ marginTop: 16, display:"flex", gap:12 }}>
              <Link className="btn btn-primary" to="/donate">Donate</Link>
              <Link className="btn btn-secondary" to="/business-resources">Explore Resources</Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section">
        <div className="container">
          <h2>What we do</h2>
          <div className="grid-3" style={{ marginTop: "18px" }}>
            {[
              { t:"Business Support", d:"Workshops, mentoring, and practical guidance for small businesses." },
              { t:"Community Campaigns", d:"Buy-local initiatives and events that bring foot traffic back to Wayne." },
              { t:"Partnerships", d:"Connecting entrepreneurs with city, state, and private partners." }
            ].map(card => (
              <article key={card.t} className="card">
                <h3 style={{ marginTop: 0 }}>{card.t}</h3>
                <p style={{ color: "var(--muted)" }}>{card.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS RESOURCES PREVIEW */}
      <section className="section" style={{ background:"#fff" }}>
        <div className="container">
          <h2>Business Resources</h2>
          <div className="grid-3" style={{ marginTop: "18px" }}>
            {[
              { t:"Workshops", d:"Marketing, e-commerce, storefront basics." },
              { t:"Mentor Network", d:"Advisors in finance, technology, operations." },
              { t:"Grants & Certifications", d:"Guidance to local/state programs." }
            ].map(card => (
              <article key={card.t} className="card">
                <h3 style={{ marginTop: 0 }}>{card.t}</h3>
                <p style={{ color: "var(--muted)" }}>{card.d}</p>
                <Link to="/business-resources" style={{ color:"var(--brand-sky)", fontWeight:600 }}>Learn more →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS PREVIEW */}
      <section className="section">
        <div className="container">
          <h2>Upcoming Events</h2>
          <div className="grid-3" style={{ marginTop: "18px" }}>
            {[1,2,3].map(n => (
              <article key={n} className="card">
                <div className="badge">Nov {10+n}, 2025 • Wayne, NJ</div>
                <h3 style={{ marginTop: 6 }}>Small Business Clinic #{n}</h3>
                <p style={{ color:"var(--muted)" }}>One-on-one mentorship and quick wins for local owners.</p>
                <Link to="/events" style={{ color:"var(--brand-sky)", fontWeight:600 }}>RSVP →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:"var(--brand-primary)", color:"#fff", padding:"28px 0" }}>
        <div className="container" style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, flexWrap:"wrap" }}>
          <h3 style={{ margin:0 }}>Be part of Wayne’s renewal.</h3>
          <div style={{ display:"flex", gap:12 }}>
            <Link className="btn" style={{ background:"#fff", color:"var(--brand-primary)" }} to="/donate">Donate</Link>
            <Link className="btn" style={{ border:"1px solid #fff", color:"#fff" }} to="/contact">Volunteer</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
