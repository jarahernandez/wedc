export default function Footer(){
  return (
    <footer className="footer">
      <div className="container" style={{ display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
        <small>© {new Date().getFullYear()} Wayne Economic Development Corporation</small>
        <small>Wayne, New Jersey • info@wayne-edc.org</small>
      </div>
    </footer>
  );
}
