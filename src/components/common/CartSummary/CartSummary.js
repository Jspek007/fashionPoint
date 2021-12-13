import React from 'react';
import "./CartSummary.scss";
import {SubTitle} from "../Content/TextComponents";

const CartSummary = ({productData}) => {

    const getCartSubtotal = () => {
        return productData.map(item => item.price).reduce((prev, curr) => prev + curr, 0);
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
                <section className="cart-summary-data">
                    <table className="cart-totals">
                        <tr>
                            <th>Subtotaal</th>
                        </tr>
                        <td>
                            <span>€{getCartSubtotal()}</span>
                        </td>
                    </table>
                    <table className="cart-totals">
                        <tr>
                            <th>Verzending</th>
                        </tr>
                        <td>
                            {getCartSubtotal() >= 75 && (
                                <span>Gratis</span>
                            )}
                            {getCartSubtotal() <= 75 && (
                                <span>€7.95</span>
                            )}
                        </td>
                    </table>
                    <table className="cart-totals">
                        <tr>
                            <th>Totaal</th>
                        </tr>
                        <td>
                            <span>€{getCartTotal()}</span>
                        </td>
                    </table>
                </section>
            </section>
        </section>
    );
};

export default CartSummary;