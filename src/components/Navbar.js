import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
      <nav className="nav">
          <section className='logo'>
            <h1>STOCK SOAR</h1>
            <img src="https://icongr.am/jam/plane.svg?size=40&color=E0E1DD" alt="Avatar" border="0" />
          </section>
          <section className='navbar-links'>
                <a href="https://www.google.com/">HOME</a>
                <a href="https://www.google.com/">TRADE</a>
                <a href="https://www.google.com/">PORTFOLIO</a>
                <a href="https://www.google.com/">CONTACT</a>
          </section>
          <section className='profilejoin'>
            <a href="https://github.com/aaronle03" className="profile-link">
              <img src="https://icongr.am/clarity/avatar.svg?size=40&color=E0E1DD" alt="Avatar" border="0" />
            </a>
          </section>
      </nav>
  );
}

export default Navbar;
