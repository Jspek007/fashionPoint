import React from 'react';
import {ProductCards} from "../../components/common";
import "./Wishlist.scss";
import {Title} from "../../components/common/Content/TextComponents";

function Wishlist() {

    let wishlistArray = JSON.parse(localStorage.getItem('wishlist'))

    return (
        <>
            <section className="wishlist-title-container">
                <Title text="Mijn wishlist" />
            </section>
            <section className="wishlist-product-container">
                <ProductCards data={wishlistArray}/>
            </section>
        </>
    );
}

export default Wishlist;