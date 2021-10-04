import React from "react";
import "./Footer.scss";
import { GrInstagram, GrFacebook, GrYoutube } from "react-icons/gr";
import LegalTermsBanner from "../LegalTermsBanner";
import { Fragment } from "react";
import PaymentMethods from "../PaymentMethods";
import DeliveryInformation from "../DeliveryInformation";

function Footer() {
  return (
    <Fragment>
      <DeliveryInformation />
      <PaymentMethods />
      <section className="footer-container">
        <section className="footer-items">
          <section className="footer-section footer-section-one">
            <h3 className="footer-header">FashionPoint</h3>
            <ul className="footer-list">
              <li>Over ons</li>
              <li>Blog</li>
              <li>Werken bij</li>
            </ul>
          </section>
          <section className="footer-section footer-section-two">
            <h3 className="footer-header">Klantenservice</h3>
            <ul className="footer-list">
              <li>Contact</li>
              <li>Veelgestelde vragen</li>
              <li>Betaalmogelijkheden</li>
              <li>Hulp</li>
            </ul>
          </section>
          <section className="footer-section footer-section-three">
            <h3 className="footer-header">Volg ons</h3>
            <section className="socials-container">
              <GrInstagram className="social-icon" />
              <GrFacebook className="social-icon" />
              <GrYoutube className="social-icon" />
            </section>
          </section>
        </section>
      </section>
      <LegalTermsBanner />
    </Fragment>
  );
}

export default Footer;
