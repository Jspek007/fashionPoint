import React from "react";
import "./LegalTermsBanner.scss";

function LegalTermsBanner() {
  return (
    <section className="legal-container">
      <section className="legal-container-item legal-item-left">
        <span>© 2021-2021 FashionPoint</span>
      </section>
      <section className="legal-container-item legal-item-right">
        <span className="legal-row-items">Privacy</span>
        <span className="legal-row-items">Algemene voorwaarden</span>
        <span className="legal-row-items">Cookies</span>
      </section>
    </section>
  );
}

export default LegalTermsBanner;
