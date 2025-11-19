import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Resources from "./pages/Resources.jsx";
import Events from "./pages/Events.jsx";
import Projects from "./pages/Projects.jsx";
import Donate from "./pages/Donate.jsx";
import Contact from "./pages/Contact.jsx";

export default function App(){
  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/business-resources" element={<Resources />} />
        <Route path="/events" element={<Events />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </main>
      <Footer />
    </div>
  );
}
