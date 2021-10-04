import React from "react";
import { NavLink } from "react-router-dom";
import ScrollToTop from "../../../helpers/ScrollToTop/ScrollToTop";
import "./LegalTermsBanner.scss";

function LegalTermsBanner() {
  return (
    <section className="legal-container">
      <section className="legal-container-item legal-item-left">
        <span>© 2021-2021 FashionPoint</span>
      </section>
      <section className="legal-container-item legal-item-right">
        <ScrollToTop />
        <NavLink to="/privacy" draggable="false" className="footer-link">
          <span className="legal-row-items" draggable="false">
            Privacy
          </span>
        </NavLink>

        <ScrollToTop />
        <NavLink
          to="/algemene-voorwaarden"
          draggable="false"
          className="footer-link"
        >
          <span className="legal-row-items">Algemene voorwaarden</span>
        </NavLink>

        <ScrollToTop />
        <NavLink to="/cookie-policy" draggable="false" className="footer-link">
          <span className="legal-row-items">Cookies</span>
        </NavLink>
      </section>
    </section>
  );
}

export default LegalTermsBanner;
