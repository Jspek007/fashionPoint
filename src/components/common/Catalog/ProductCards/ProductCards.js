import React from "react";
import "./ProductCards.scss";
import {Link} from "react-router-dom";

function ProductCards({data}) {
    return (
        <>
            <section className="product-list-container">
                <section className="product-list-grid">
                    <section className="product-container">
                        {data.map((item) => {
                            return (
                                <Link key={item.id} className="product-link"
                                      exact="true" to={`/product/${item.id}`}>
                                    <section className="product-item-container">
                                        <section className="product-item-image-container">
                                            <img src={item.image} className="product-item-image" alt={`$item.title`}/>
                                        </section>
                                        <section className="product-item-price">
                                            <p>€{item.price}</p>
                                        </section>
                                        <section className="product-item-title">
                                            <h5 className="item-title">{item.title}</h5>
                                        </section>
                                    </section>
                                </Link>
                            );
                        })}
                    </section>
                </section>
            </section>
        </>
    );
}

export default ProductCards;
