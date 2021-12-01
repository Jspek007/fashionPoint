import React from 'react';
import "./MinicartItemCount.scss";

const MinicartItemCount = ({count}) => {

    if (!count) {
        return null;
    }
    else {
        return (
            <section key={count} className="cart-counter-container">
                {count}
            </section>
        )
    }
};

export default MinicartItemCount;