import React from 'react';
import "./CartQtyController.scss";
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"

const CartQtyController = ({increase}) => {
    if (!increase) {
        return (
                <AiOutlineMinus className="cart-button"/>

        )
    } else {
        return (
                <AiOutlinePlus className="cart-button"/>
        )
    }
};

export default CartQtyController;