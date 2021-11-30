import React from 'react';
import "./Minicart.scss";
import {FaShoppingCart} from "react-icons/fa"

const Minicart = () => {
    return (
        <section className="menu-container">
            <button className="menu-trigger">
               <span>
                   <FaShoppingCart className="user-icon"/>
               </span>
            </button>
        </section>
    );
};

export default Minicart;