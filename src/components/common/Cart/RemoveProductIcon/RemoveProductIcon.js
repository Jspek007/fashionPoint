import React from 'react';
import "./RemoveProductIcon.scss";
import {RiDeleteBin6Fill} from "react-icons/ri";

const RemoveProductIcon = ({cartData, specificProduct, updateCart}) => {

    const removeProductFromCart = () => {
        const cartIndex = cartData.map(function (e) {
            return e.title
        }).indexOf(specificProduct.title);
        cartData.splice(cartIndex, 1);
        localStorage.setItem('currentCart', JSON.stringify(cartData));
        let newCart = JSON.parse(localStorage.getItem('currentCart'));
        updateCart(newCart);
    }

    return (
        <RiDeleteBin6Fill className="cart-icon" onClick={removeProductFromCart}/>
    );
};

export default RemoveProductIcon;