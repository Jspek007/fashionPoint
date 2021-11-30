import React from 'react';
import "./MinicartItems.scss";

const MinicartItems = (props) => {
    return (
        <section className="items-container">
            {props.children}
        </section>
    );
};

export default MinicartItems;