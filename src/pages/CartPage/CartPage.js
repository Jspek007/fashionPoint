import React, {useState} from 'react';
import "./CartPage.scss";
import {SubTitle} from "../../components/common/Content/TextComponents";
import {RedirectButton} from "../../components/Form/Buttons";
import CartSummary from "../../components/common/CartSummary";
import CartItem from "../../components/common/Cart/CartItem/CartItem";

const CartPage = () => {

    let cartArray = JSON.parse(localStorage.getItem('currentCart'));

    return (
        <section className="cart-container">
            {cartArray.length === 0 && (
                <section className="cart-title">
                    <SubTitle text="Uw winkelwagen is leeg."/>
                </section>
            )}
            {cartArray.length > 0 && (
                <>
                    <section className="cart-header">
                        <SubTitle text="Winkelwagen"/>
                        <RedirectButton primary callToAction="Afrekenen"/>
                    </section>
                    <section className="cart-table-wrapper">
                        <table className="cart-item-table">
                            <thead>
                            <tr>
                                <th className="table item">
                                    <span>Product</span>
                                </th>
                                <th className="table price">
                                    <span>Prijs</span>
                                </th>
                                <th className="table subtotal">
                                    <span>Subtotaal</span>
                                </th>
                            </tr>
                            </thead>
                            {cartArray.map((item, i) => {
                                return (
                                    <CartItem cartData={cartArray} key={i}/>
                                )
                            })}
                        </table>
                    </section>
                    <CartSummary cartData={cartArray}/>
                </>
            )}
        </section>
    );
};

export default CartPage;