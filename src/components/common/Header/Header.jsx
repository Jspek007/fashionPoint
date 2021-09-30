import React from "react";
import { LoginButton, SignupButton } from "../Form/Buttons";
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
          <SignupButton />
          <LoginButton />
        </section>
      </header>
    </div>
  );
}

export default Header;
