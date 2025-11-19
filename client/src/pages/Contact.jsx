export default function Contact(){
  function onSubmit(e){ e.preventDefault(); alert("Thanks! We’ll follow up shortly."); }
  return (
    <main className="section">
      <div className="container" style={{ display:"grid", gap:24, gridTemplateColumns:"1fr" }}>
        <div>
          <h1>Contact</h1>
          <p style={{ color:"var(--muted)" }}>
            Email <strong>info@wayne-edc.org</strong> or send us a note:
          </p>
        </div>
        <form onSubmit={onSubmit} className="card" style={{ maxWidth:640 }}>
          <label style={{ display:"block", fontWeight:600 }}>Name
            <input required name="name" style={inputStyle} placeholder="Your name" />
          </label>
          <label style={{ display:"block", fontWeight:600, marginTop:12 }}>Email
            <input required type="email" name="email" style={inputStyle} placeholder="you@email.com" />
          </label>
          <label style={{ display:"block", fontWeight:600, marginTop:12 }}>Message
            <textarea name="message" style={{ ...inputStyle, height:140, resize:"vertical" }} placeholder="How can we help?" />
          </label>
          <button className="btn btn-primary" type="submit" style={{ marginTop:14 }}>Send</button>
        </form>
      </div>
    </main>
  );
}
const inputStyle = {
  width:"100%", marginTop:6, padding:".7rem .8rem",
  border:"1px solid #e2e8f0", borderRadius:"12px", background:"#fff"
};
