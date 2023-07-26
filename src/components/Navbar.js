import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
      <nav className="nav">
          <section className='logo'>
            <section className='logo-title'>
              <h1>SOAR STOCK</h1>
              <h3>CRYPTOEXCHANGE</h3>
            </section>
            <img src="https://icongr.am/entypo/rocket.svg?size=70&color=921e25" alt="Avatar" border="0" />
          </section>
          <section className='navbar-links'>
                <a href="https://www.google.com/">HOME</a>
                <a href="https://www.google.com/">MARKETS</a>
                <a href="https://www.google.com/">ASSETS</a>
                <a href="https://www.google.com/">ACCOUNT</a>
                <a href="https://www.google.com/">DISCOVER</a>
                <a href="https://www.google.com/">SUPPORT</a>
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
