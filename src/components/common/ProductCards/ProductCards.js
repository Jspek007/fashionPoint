import React from "react";
import "./ProductCards.scss";
import ViewProductDetailsButton from "../../Form/ProductButtons/ViewProductDetailsButton";

function ProductCards({productData}) {
    return (
        <section className="product-list-grid">
            <section className="product-container">
                {productData.map((item) => {
                    return (
                        <section className="product-item-container">
                            <section className="product-item-image-container">
                                <img src={item.image} className="product-item-image"/>
                            </section>
                            <section className="product-item-price">
                                <p>€{item.price}</p>
                            </section>
                            <section className="product-item-title">
                                <h5 className="item-title">{item.title}</h5>
                            </section>
                        </section>
                    );
                })}
            </section>
        </section>
    );
}

export default ProductCards;
