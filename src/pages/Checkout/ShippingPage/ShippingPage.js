import React from 'react';
import "./ShippingPage.scss";
import CheckoutForm from '../../../components/common/Checkout/CheckoutForm';
import Title from "../../../components/common/Content/TextComponents/Title/Title";


const ShippingPage = () => {
    return (
        <>
            <section className="cart-container">
                <Title text="Adres gegevens" />
                <CheckoutForm />
            </section>
        </>
    )
}

export default ShippingPage
