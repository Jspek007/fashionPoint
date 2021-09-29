import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div className="header-container">
      <header className="main-header">
        <section className="left-header-section">
          <a href="/" className="left-header-section-item">
            Klantenservice
          </a>
          <a href="/" className="left-header-section-item">
            Over ons
          </a>
          <a href="/" className="left-header-section-item">
            Collectie
          </a>
        </section>

        <section className="main-header-logo">
          <a href="/" draggable="false">
            FashionPoint
          </a>
        </section>

        <section className="right-header-section">
          <button className="sign-up-action-button">Aanmelden</button>
          <button className="login-action-button">Inloggen</button>
        </section>
      </header>
    </div>
  );
}

export default Header;
