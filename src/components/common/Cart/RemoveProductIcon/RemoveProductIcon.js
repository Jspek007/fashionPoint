import React from 'react';
import "./RemoveProductIcon.scss";
import {RiDeleteBin6Fill} from "react-icons/ri";

const RemoveProductIcon = ({productData}) => {

    const removeProductFromCart = () => {
        let cartArray = JSON.parse(localStorage.getItem('currentCart')) ? JSON.parse(localStorage.getItem('currentCart')) : [];
        const cartIndex = cartArray.map(function (e) {return e.title}).indexOf(productData.title);
        cartArray.splice(cartIndex, 1);
        localStorage.setItem('currentCart', JSON.stringify(cartArray));
    }

    return (
            <RiDeleteBin6Fill onClick={removeProductFromCart} />
    );
};

export default RemoveProductIcon;