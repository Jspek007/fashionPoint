import React from 'react';
import "./CategoryInformation.scss";
import {CategoryData} from "./CategoryData";

function CategoryInformation({ index }) {

    return (
        <section className="category-banner-container">
            <h1 className="category-title">{CategoryData[index].seoTitle}</h1>
            <h5 className="category-description">{CategoryData[index].description}</h5>
        </section>
    );
}

export default CategoryInformation;