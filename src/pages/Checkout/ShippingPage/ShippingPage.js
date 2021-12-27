import React from 'react';
import "../CheckoutPages.scss";
import CheckoutForm from '../../../components/common/Checkout/CheckoutForm';
import Title from "../../../components/common/Content/TextComponents/Title/Title";


const ShippingPage = () => {
    return (
        <>
            <section className="checkout-container">
                <Title text="Adres gegevens" />
                <CheckoutForm />
            </section>
        </>
    )
}

export default ShippingPage
