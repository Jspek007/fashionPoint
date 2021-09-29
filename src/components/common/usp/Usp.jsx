import React from "react";
import "./Usp.scss";
import { GiCheckMark } from "react-icons/gi";

function Usp() {
  return (
    <div id="usp-banner" className="usp">
      <span className="usp-item">
        <GiCheckMark className="usp-icon" /> Snelle levering
      </span>
      <span className="usp-item">
        <GiCheckMark className="usp-icon" /> Gratis verzenden vanaf €75,-
      </span>
      <span className="usp-item">
        <GiCheckMark className="usp-icon" /> Gratis retouren binnen 45 dagen
      </span>
    </div>
  );
}

export default Usp;
