import React from 'react';
import "./CartSummary.scss";
import {SubTitle} from "../Content/TextComponents";

const CartSummary = ({cartData}) => {

    const getCartSubtotal = () => {
        return cartData.map(item => item.price).reduce((prev, curr) => prev + curr, 0);
    }

    const getShippingTotal = () => {
        if (getCartSubtotal() >= 75) {
            return null;
        }
        else {
            return 7.95;
        }
    }

    const getCartTotal = () => {
        let cartTotal = (getCartSubtotal() + getShippingTotal());
        return cartTotal.toFixed(2);
    }


    return (
        <section className="cart-summary-container">
            <section className="cart-summary">
                <section className="summary-title">
                    <SubTitle text="Uw overzicht"/>
                </section>
                    <section className="summary-row">
                        <span>Subtotaal</span>
                        <span>€{getCartSubtotal()}</span>
                    </section>
                    <section className="summary-row">
                        <span>Verzending</span>
                        <span>{getShippingTotal() == null && (
                            "Gratis"
                        )}
                            {getShippingTotal()}
                        </span>
                    </section>
                    <section className="summary-row total">
                        <span>Totaal</span>
                        <span>€{getCartTotal()}</span>
                    </section>
            </section>
        </section>
    );
};

export default CartSummary;