import React from 'react';
import "./CartSummary.scss";
import {SubTitle} from "../../Content/TextComponents";

const CartSummary = ({cartData}) => {

    const getCartSubtotal = () => {
        return cartData.map(item => item.price).reduce((prev, curr) => prev + curr, 0);

    }

    const getShippingTotal = () => {
        if (getCartSubtotal() < 75) {
            return 7.95
        } else {
            return null;
        }
    }

    const getCartTotal = () => {
        if (getShippingTotal() != null) {
            return Number(getCartSubtotal()) + Number(getShippingTotal())
        } else {
            return Number(getCartSubtotal());
        }
    }


    return (
        <section className="cart-summary-container">
            <section className="cart-summary">
                <section className="summary-title">
                    <SubTitle text="Uw overzicht"/>
                </section>
                    <section className="summary-row">
                        <span>Subtotaal</span>
                        <span>€{getCartSubtotal().toFixed(2)}</span>
                    </section>
                    <section className="summary-row">
                        <span>Verzending</span>
                        <span>{getShippingTotal() == null && (
                            "Gratis"
                        )}
                            {getShippingTotal() !== null && (
                                "€" + getShippingTotal()
                            )}
                        </span>
                    </section>
                    <section className="summary-row total">
                        <span>Totaal</span>
                        <span>€{getCartTotal().toFixed(2)}</span>
                    </section>
            </section>
        </section>
    );
};

export default CartSummary;