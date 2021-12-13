import React from 'react';
import {ProductCards} from "../../components/common";
import "./Wishlist.scss";
import {SubTitle, Title} from "../../components/common/Content/TextComponents";

function Wishlist() {

    let wishlistArray = JSON.parse(localStorage.getItem('wishlist'))

    if (wishlistArray.length === 0) {
        return (
            <>
                <section className="wishlist-title-container">
                    <Title text="Mijn wishlist"/>
                </section>
                <section className="wishlist-content">
                    <SubTitle text="Geen producten gevonden in uw wishlist. Voeg items toe om ze hier te zien." />
                </section>
            </>
        )
    } else {
        return (
            <>
                <section className="wishlist-title-container">
                    <Title text="Mijn wishlist"/>
                </section>
                <section className="wishlist-product-container">
                    {!wishlistArray && (
                        <h1>Wishlist is leeg. Snel, voeg iets toe!</h1>
                    )}
                    {wishlistArray && (
                        <ProductCards data={wishlistArray}/>
                    )}
                </section>
            </>
        );
    }
}

export default Wishlist;