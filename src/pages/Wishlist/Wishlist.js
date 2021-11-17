import React from 'react';
import {ProductCards} from "../../components/common";
import "./Wishlist.scss";

function Wishlist() {

    let wishlistArray = JSON.parse(localStorage.getItem('wishlist'))

    return (
        <>
            <section className="wishlist-title-container">
                <h1 className="wishlist-title">
                    Mijn wishlist
                </h1>
            </section>
            <section className="wishlist-product-container">
                <ProductCards data={wishlistArray}/>
            </section>
        </>
    );
}

export default Wishlist;