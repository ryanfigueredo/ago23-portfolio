import React, { useState } from "react";
import "./Header.css";

const scrollToSection = (targetId: string) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
};

const Header: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <div className="header">
    <a href="/" className={`logo-link ${window.location.pathname === '/' ? 'active' : ''}`}>
      <img className="logo" src="/logoryan.svg" alt="Logo" />
    </a>
    <nav className="desktop-nav">
      <a href="/developer" className={`header-link ${window.location.pathname === '/developer' ? 'active' : ''}`} onClick={() => { scrollToSection("developer"); }}>
        Dev
      </a>
      <hr className="header-divider" />
      <a href="/designer" className={`header-link ${window.location.pathname === '/designer' ? 'active' : ''}`} onClick={() => { scrollToSection("designer"); }}>
        Posts
      </a>
      <hr className="header-divider" />
      <a href="/sports" className={`header-link ${window.location.pathname === '/sports' ? 'active' : ''}`} onClick={() => { scrollToSection("designer"); }}>
        Autoral
      </a>
      <hr className="header-divider" />
      <a href="/about" className={`header-link ${window.location.pathname === '/about' ? 'active' : ''}`} onClick={() => { scrollToSection("about"); }}>
        Sobre
      </a>

      {/* mailto:contato@ryanfigueredo.com?subject=Contato%20com%20Ryan%20Figueredo%20&body=Olá,%20vi%20o%20seu%20portfólio%20e%20tenho%20interesse%20em%20negociar%20uma%20proposta. */}
      <hr className="header-divider" /> 
      <a href="/contact" className={`header-link ${window.location.pathname === '/contact' ? 'active' : ''}`} onClick={() => { scrollToSection("contact"); }}>
        Contato
      </a>
        </nav>
        <div className={`sidebar-toggle ${sidebarOpen ? "open" : ""}`} onClick={toggleSidebar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        
      </div>

      

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <a href="./about" className="sidebar-link" onClick={() => { scrollToSection("about"); setSidebarOpen(false); }}>
            About
          </a>
          <a href="./developer" className="sidebar-link" onClick={() => { scrollToSection("developer"); setSidebarOpen(false); }}>
            Developer
          </a>
          <a href="./sports" className="sidebar-link" onClick={() => { scrollToSection("developer"); setSidebarOpen(false); }}>
            Sports
          </a>
          <a href="./designer" className="sidebar-link" onClick={() => { scrollToSection("designer"); setSidebarOpen(false); }}>
            Designer
          </a>
          <a
            href="mailto:ryancontatof8@gmail.com?subject=Contato%20com%20Ryan%20Figueredo%20&body=Olá,%20vi%20o%20seu%20portfólio%20e%20tenho%20interesse%20em%20negociar%20uma%20proposta."
            target="_blank"
            className="sidebar-link"
            onClick={() => { scrollToSection("contact"); setSidebarOpen(false); }}
            rel="noreferrer"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
