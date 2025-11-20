import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import wedcLogo from "../assets/logo.jpeg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const navItems = [
    { to: "/", label: "HOME" },
    { to: "/about-us", label: "ABOUT US" },
    { to: "/business-resources", label: "BUSINESS RESOURCES" },
    { to: "/events", label: "EVENTS" },
    { to: "/projects", label: "PROJECTS" },
    { to: "/donate", label: "DONATE" },
    { to: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="site-header">
      <div className="container nav-wrap">

        {/* LOGO + BRAND */}
        <div className="brand">
          <img src={wedcLogo} alt="WEDC Logo" style={{ height: "42px" }} />
        </div>

        {/* HAMBURGER BUTTON (MOBILE) */}
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <div className={open ? "bar bar1 open" : "bar bar1"}></div>
          <div className={open ? "bar bar2 open" : "bar bar2"}></div>
          <div className={open ? "bar bar3 open" : "bar bar3"}></div>
        </button>

        {/* NAV LINKS */}
        <nav className={open ? "nav mobile-open" : "nav"}>
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`tab nav-link ${pathname === item.to ? "active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}
