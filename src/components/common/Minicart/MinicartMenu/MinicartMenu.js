import React from 'react';
import "./MinicartMenu.scss";
import {FaShoppingCart} from "react-icons/fa"

const MinicartMenu = () => {
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

export default MinicartMenu;