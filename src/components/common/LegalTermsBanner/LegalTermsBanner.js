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
        <span className="legal-row-items">Privacy</span>

        <ScrollToTop />
        <NavLink to="/algemene-voorwaarden" className="footer-link">
          <span className="legal-row-items">Algemene voorwaarden</span>
        </NavLink>
        <span className="legal-row-items">Cookies</span>
      </section>
    </section>
  );
}

export default LegalTermsBanner;
