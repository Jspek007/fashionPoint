import React, {useRef} from 'react';
import "./MinicartMenu.scss";
import {FaShoppingCart} from "react-icons/fa"
import {useDetectOutsideClick} from "../../../../helpers/UseDetectOutsideClick/UseDetectOutsideClick";
import MinicartItems from "../MinicartItems";
import {RedirectButton} from "../../../Form/Buttons";
import FormButtonContainer from "../../../Form/Forms/FormComponents/FormButtonContainer";
import {Link} from "react-router-dom";
import SubTitle from "../../Content/TextComponents/SubTitle/SubTitle";

const MinicartMenu = () => {

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef);
    const onClick = () => setIsActive(!isActive);
    let cartItems = JSON.parse(localStorage.getItem('currentCart'));
    let cartArray = localStorage.getItem('currentCart');

    return (
        <section className="menu-container">
            <section className="menu-trigger" onClick={onClick}>
               <span>
                   <FaShoppingCart className="user-icon"/>
               </span>
                <section ref={dropdownRef} className={`minicart-menu ${isActive ? `active` : `inactive`}`}>
                    <SubTitle text="Jouw winkelwagen" />
                    {(!cartArray || cartArray === '[]' ) && (
                        <SubTitle text="Uw winkelwagen is leeg."/>
                    )}
                    {cartArray !== null && (
                        <>
                            <MinicartItems cartData={cartItems}/>
                            <FormButtonContainer>
                                <Link exact="true" to="/winkelwagen">
                                    <RedirectButton primary callToAction="Winkelwagen"/>
                                </Link>
                            </FormButtonContainer>
                        </>
                    )}
                </section>
            </section>
        </section>
    );
};

export default MinicartMenu;