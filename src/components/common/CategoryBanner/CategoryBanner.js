import React from "react";
import "./CategoryBanner.scss";
import {Link} from "react-router-dom";
import CategoryActionButton from "../../Form/Buttons/CategoryActionButton";

function CategoryBanner() {
  return (
    <section className="category-container">
      <section className="category-items-side-by-side">
        <Link to="/heren-collectie" className="category-link">
          <section className="category-item category-item-left">
            <h2 className="category-text category-text-left" draggable="false">
              Alles voor heren
                <CategoryActionButton />
            </h2>
          </section>
        </Link>

        <Link to="/dames-collectie" className="category-link">
          <section className="category-item category-item-right">
            <h2 className="category-text category-text-right" draggable="false">
              Alles voor dames
                <CategoryActionButton />
            </h2>
          </section>
        </Link>
      </section>
    </section>
  );
}

export default CategoryBanner;
