import React from 'react'

const ShippingMethodItem = (props) => {
    return (
        <section className="shipping-option">
        <input type="radio" />
        <img src={props.imageSource} className="shipping-option-image" />
        <span className="shipping-option-text">{props.shippingText}</span>
    </section>
    )
}

export default ShippingMethodItem
