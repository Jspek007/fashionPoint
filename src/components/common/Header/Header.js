import React from "react";
import { LoginButton, SignupButton } from "../../Form/Buttons";
import "./Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header-container" id="sticky-header">
      <header className="main-header">
        <section className="left-header-section">
          <NavLink to="/klantenservice" className="left-header-section-item">
            Klantenservice
          </NavLink>

          <NavLink to="/over-ons" className="left-header-section-item section-item">
            Over ons
          </NavLink>

          <NavLink to="/collectie" className="left-header-section-item section-item">
            Collectie
          </NavLink>
        </section>

        <section className="main-header-logo">
          <a href="/" draggable="false" className="main-header-logo">
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
