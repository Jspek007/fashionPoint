import React from 'react';
import "./ShippingMethods.scss";
import PostNLImage from "../../../../assets/images/shippingMethods/PostNL_logo.svg.png";
import DPDImage from "../../../../assets/images/shippingMethods/DPD.jpeg"
import DHLImage from "../../../../assets/images/shippingMethods/DHL.png"
import ShippingMethodItem from './ShippingMethodItem';

const ShippingMethods = () => {
    return (
        <section className="shippingmethods-container">
            <ShippingMethodItem imageSource={PostNLImage} shippingText={"Verzending door PostNL"} />
            <ShippingMethodItem imageSource={DPDImage} shippingText={"Verzending door DPD"} />
            <ShippingMethodItem imageSource={DHLImage} shippingText={"Verzending door DHL"} />
        </section>
    )
}

export default ShippingMethods;
