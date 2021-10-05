import React from "react";
import "./CategoryBanner.scss";
import Jewellery from "../../../assets/images/categoryImages/jewellery.jpg";
import { NavLink } from "react-router-dom";

function CategoryBanner() {
  return (
    <section className="category-container">
      <section className="category-items-side-by-side">
        <NavLink to="/heren-collectie" className="category-link">
          <section className="category-item category-item-left">
            <h2 className="category-text category-text-left" draggable="false">
              Alles voor heren
            </h2>
          </section>
        </NavLink>

        <NavLink to="/dames-collectie" className="category-link">
          <section className="category-item category-item-right">
            <h2 className="category-text category-text-right" draggable="false">
              Alles voor dames
            </h2>
          </section>
        </NavLink>
      </section>
    </section>
  );
}

export default CategoryBanner;
