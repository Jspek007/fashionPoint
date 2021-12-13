import React, {useRef} from 'react';
import "./MinicartMenu.scss";
import {FaShoppingCart} from "react-icons/fa"
import {useDetectOutsideClick} from "../../../../helpers/UseDetectOutsideClick/UseDetectOutsideClick";
import MinicartItems from "../MinicartItems";
import {RedirectButton} from "../../../Form/Buttons";
import FormButtonContainer from "../../../Form/Forms/FormComponents/FormButtonContainer";
import Link from "react-router-dom/es/Link";

const MinicartMenu = () => {

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef);
    const onClick = () => setIsActive(!isActive);
    let cartItems = JSON.parse(localStorage.getItem('currentCart'));

    return (
        <section className="menu-container">
            <button className="menu-trigger" onClick={onClick}>
               <span>
                   <FaShoppingCart className="user-icon"/>
               </span>
                <section ref={dropdownRef} className={`minicart-menu ${isActive ? `active` : `inactive`}`}>
                    <h1>Jouw winkelwagen</h1>
                    {!cartItems && (
                        <h1>Uw winkelwagen is leeg!</h1>
                    )}
                    {cartItems && (
                        <>
                            <MinicartItems cartData={cartItems}/>
                            <FormButtonContainer>
                                <Link exact to="/winkelwagen">
                                    <RedirectButton primary callToAction="Winkelwagen"/>
                                </Link>
                            </FormButtonContainer>
                        </>
                    )}
                </section>
            </button>
        </section>
    );
};

export default MinicartMenu;