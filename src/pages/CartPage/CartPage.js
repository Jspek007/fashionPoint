import React from 'react';
import "./CartPage.scss";
import {SubTitle} from "../../components/common/Content/TextComponents";
import {RedirectButton} from "../../components/Form/Buttons";
import Link from "react-router-dom/es/Link";
import CartSummary from "../../components/common/CartSummary";

const CartPage = () => {

    let cartItems = JSON.parse(localStorage.getItem('currentCart'));

    return (
        <section className="cart-container">
            <section className="cart-header">
                <SubTitle text="Winkelwagen"/>
                <RedirectButton primary callToAction="Afrekenen"/>
            </section>
            {!cartItems && (
                <SubTitle text="Uw winkelwagen is leeg."/>
            )}
            {cartItems && (
                <section className="cart-table-wrapper">
                    <table className="cart-item-table">
                        <thead>
                        <tr>
                            <th className="table item">
                                <span>Product</span>
                            </th>
                            <th className="table price">
                                <span>Prijs</span>
                            </th>
                            <th className="table subtotal">
                                <span>Subtotaal</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="cart-item">
                        {cartItems.map((item) => {
                            return (
                                <tr className="item-info" key={item.id}>
                                    <td>
                                        <Link key={item.id} className="cart-link"
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
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </section>
            )}
            <CartSummary productData={cartItems} />
        </section>
    );
};

export default CartPage;