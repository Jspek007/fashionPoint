import React, {useRef} from 'react';
import "./MinicartMenu.scss";
import {FaShoppingCart} from "react-icons/fa"
import {useDetectOutsideClick} from "../../../../helpers/UseDetectOutsideClick/UseDetectOutsideClick";

const MinicartMenu = () => {

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef);
    const onClick = () => setIsActive(!isActive);

    return (
        <section className="menu-container">
            <button className="menu-trigger" onClick={onClick}>
               <span>
                   <FaShoppingCart className="user-icon"/>
               </span>
                <section ref={dropdownRef} className={`minicart-menu ${isActive ? `active` : `inactive`}`}>
                    <h1>Hallo</h1>
                </section>
            </button>
        </section>
    );
};

export default MinicartMenu;