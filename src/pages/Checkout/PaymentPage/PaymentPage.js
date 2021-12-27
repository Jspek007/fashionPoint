import React from "react";
import Title from "../../../components/common/Content/TextComponents/Title/Title";
import CheckoutSummary from "../../../components/common/Checkout/CheckoutSummary/CheckoutSummary";
import CheckoutInputItem from "../../../components/common/Checkout/CheckoutInputs/CheckoutInputItem";
import Klarna from "../../../assets/images/paymentMethods/Klarna.svg";
import ApplePay from "../../../assets/images/paymentMethods/ApplePay.svg";
import GooglePay from "../../../assets/images/paymentMethods/Google_pay.svg";
import MasterCard from "../../../assets/images/paymentMethods/Mastercard.svg";
import Paypal from "../../../assets/images/paymentMethods/Paypal.svg";
import FormButtonContainer from "../../../components/Form/Forms/FormComponents/FormButtonContainer";
import { RedirectButton } from "../../../components/Form/Buttons";
import { Link } from "react-router-dom";

const PaymentPage = () => {
  let cartData = JSON.parse(localStorage.getItem("checkoutData"))
    ? JSON.parse(localStorage.getItem("checkoutData"))
    : [];
  let shippingMethod = JSON.parse(localStorage.getItem("shippingMethod"))
    ? JSON.parse(localStorage.getItem("shippingMethod"))
    : [];

  const createOrder = () => {
    localStorage.removeItem("currentCart");
    localStorage.removeItem("shippingMethod");
  };

  return (
    <section className="checkout-container">
      <Title text="Verzenden naar: " />

      <CheckoutSummary cartData={cartData} shippingMethod={shippingMethod} />

      <Title text="Betaalmethode: " />
      <section className="inputs-container">
        <CheckoutInputItem
          imageSource={Klarna}
          inputText="Klarna"
          payment="payment"
          inputName="payment"
        />
        <CheckoutInputItem
          imageSource={ApplePay}
          inputText="ApplePay"
          payment="payment"
          inputName="payment"
        />
        <CheckoutInputItem
          imageSource={GooglePay}
          inputText="GooglePay"
          payment="payment"
          inputName="payment"
        />
        <CheckoutInputItem
          imageSource={MasterCard}
          inputText="MasterCard"
          payment="payment"
          inputName="payment"
        />
        <CheckoutInputItem
          imageSource={Paypal}
          inputText="PayPal"
          payment="payment"
          inputName="payment"
        />
      </section>
      <FormButtonContainer>
        <Link exact="true" to="/checkout/success">
          <RedirectButton
            callToAction="Afrekenen"
            primary
            clickHandler={createOrder}
          />
        </Link>
      </FormButtonContainer>
    </section>
  );
};

export default PaymentPage;
