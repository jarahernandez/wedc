export default function Donate(){
  return (
    <main className="section">
      <div className="container">
        <h1>Donate</h1>
        <p style={{ color:"var(--muted)", maxWidth:720 }}>
          Your support powers mentorship, workshops, and community campaigns that help small
          businesses thrive. Until we finalize a payment processor, please contact us to make
          a pledge or sponsor a program.
        </p>
        <a className="btn btn-primary" href="/contact" style={{ marginTop:16 }}>Get in touch</a>
      </div>
    </main>
  );
}
