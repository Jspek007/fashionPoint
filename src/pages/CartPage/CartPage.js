import React, {useState} from 'react';
import "./CartPage.scss";
import {Title, SubTitle} from "../../components/common/Content/TextComponents";
import {RedirectButton} from "../../components/Form/Buttons";
import CartSummary from "../../components/common/Cart/CartSummary";
import {Link} from "react-router-dom";
import RemoveProductIcon from "../../components/common/Cart/RemoveProductIcon/RemoveProductIcon";
import FormButtonContainer from "../../components/Form/Forms/FormComponents/FormButtonContainer";

const CartPage = () => {

    const cartArray = localStorage.getItem('currentCart');
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('currentCart')));

    if (cartArray === '[]' || !cartArray) {
        return (
            <section className="cart-container">
                <section className="cart-title">
                    <Title text="Uw winkelwagen is leeg."/>
                </section>
                <FormButtonContainer>
                    <Link exact="true" to="/collectie">
                        <RedirectButton primary callToAction="Begin met winkelen"/>
                    </Link>
                </FormButtonContainer>
            </section>
        )
    } else {
        return (
            <>
                <section className="cart-container">
                    <section className="cart-header">
                        <SubTitle text="Winkelwagen"/>
                        <section className="cart-action-buttons">
                            <Link exact="true" to="/collectie">
                                <RedirectButton callToAction="Verder winkelen"/>
                            </Link>
                            <RedirectButton primary callToAction="Afrekenen"/>
                        </section>
                    </section>
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
                        {cartItems.map((item) => {
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
                                            <RemoveProductIcon cartData={cartItems} specificProduct={item}
                                                               updateCart={setCartItems}/>
                                        </td>
                                    </tr>
                                    </tbody>
                                )
                            }
                        )}
                    </table>
                    <section className="cart-footer">
                        <CartSummary cartData={cartItems}/>
                    </section>
                </section>
            </>
        )
    }
};

export default CartPage;