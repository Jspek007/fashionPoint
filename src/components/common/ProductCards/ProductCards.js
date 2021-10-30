import React from "react";
import "./ProductCards.scss";

function ProductCards({productData}) {
    return (
        <section className="product-list-grid">
            <section className="product-container">
                {productData.map((item, index) => {
                    return (
                        <section className="product-item-container">
                            <section className="product-item-image-container">
                                <img src={item.image} className="product-item-image"/>
                            </section>
                            <section className="product-item-title">
                                <h5>{item.title}</h5>
                            </section>
                        </section>
                    );
                })}
            </section>
        </section>
    );
}

export default ProductCards;
