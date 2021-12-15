import React from 'react';
import "./MinicartItems.scss";
import {Link} from "react-router-dom";

const MinicartItems = ({cartData}) => {

    return (
        <section className="items-container">
            <section className="minicart-header">
                <span>Product</span>
                <span>SKU</span>
                <span>Prijs</span>
                <span>Aantal</span>
            </section>
            {cartData.map((item) => {
                return (
                        <Link key={item.id} className="minicart-link"
                              exact="true" to={`/collectie/${item.category}/${item.id}`}>
                            <img src={item.image} className="minicart-product-image" alt={item.title}/>
                            <section className="minicart-title">
                                {item.title}
                            </section>
                            <section className="minicart-price">
                                €{(item.price * item.qty)}
                            </section>
                            <section className="minicart-qty">
                                {item.qty}
                            </section>
                        </Link>
                )
            })}
        </section>

    );
};

export default MinicartItems;