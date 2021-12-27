import React from 'react';
import "./CheckoutSummary.scss";
import {RedirectButton} from "../../../Form/Buttons";
import {Link} from "react-router-dom";
import {Title} from "../../Content/TextComponents";

const CheckoutSummary = (props) => {

    return (
        <>
        <section className="summary-container">
            <section className="customer-data-container">
                <span>{(props.cartData.firstName + " " + props.cartData.lastName)}</span>
                <span>{(props.cartData.street + " " + props.cartData.houseNumber) + " " + props.cartData.houseNumberAdition}</span>
                <span>{(props.cartData.zipCode + ", " + props.cartData.city)}</span>
                <span>{props.cartData.phoneNumber}</span>
            </section>
                <Link exact="true" to="/checkout/shipping">
                    <RedirectButton callToAction="Bewerken"/>
                </Link>
        </section>
            <Title text="Verzendmethode" />
            <section className="summary-container">
                <section className="shipping-summary-container">
                    <span>{("Verzending door: " + props.shippingMethod.shippingMethod)}</span>
                </section>
                <Link exact="true" to="/checkout/shipping">
                    <RedirectButton callToAction="Bewerken"/>
                </Link>
            </section>
        </>
    );
};

export default CheckoutSummary;