import React from 'react';
import "./AddToCartButton.scss";

function AddToCartButton({ specificProductData }) {
    return (
            <button className="add-to-cart-button">
                <span className="product-price">€{specificProductData.price}</span>
                <span className="add-to-cart-message">In winkelwagen</span>
            </button>
        );
}

export default AddToCartButton;