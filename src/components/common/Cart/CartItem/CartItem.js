import React from 'react';
import "./CartItem.scss";
import {Link} from "react-router-dom";
import RemoveProductIcon from "../RemoveProductIcon/RemoveProductIcon";

const CartItem = ({cartData}) => {

    return (
        <>
            {cartData.map((item) => {
                    return (
                        <tbody className="cart-item" key={item.id}>
                        <tr className="item-info">
                            <td>
                                <Link className="cart-link"
                                      exact="true" to={`/collectie/${item.category}/${item.id}`}>
                                    <section className="cart-product-info">
                                        <img className="cart-image" src={item.image} alt={item.title}/>
                                        <span>{item.title}</span>
                                    </section>
                                </Link>
                            </td>
                            <td className="table">
                                <span>€{item.price}</span>
                            </td>
                            <td className="table">
                                <span>€{item.price}</span>
                            </td>
                            <td className="table">
                                <RemoveProductIcon productData={cartData}/>
                            </td>
                        </tr>
                        </tbody>
                    )
                }
            )}
        </>
    );
};

export default CartItem;