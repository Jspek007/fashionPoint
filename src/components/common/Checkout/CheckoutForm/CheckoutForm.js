import React, { useState } from 'react';
import "./CheckoutForm.scss";
import InputField from "../../../Form/Forms/FormComponents/InputField";
import Subtitle from "../../Content/TextComponents/SubTitle/SubTitle";
import ShippingMethods from "../ShippingMethods";
import RedirectButton from "../../../Form/Buttons/RedirectButton/RedirectButton";
import { Link } from "react-router-dom";

const CheckoutForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [houseNumberAdition, setHouseNumberAdition] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setSetError] = useState('');

    const saveCheckoutData = () => {
        let newCheckoutData = {
            firstName,
            lastName,
            email,
            zipCode,
            houseNumber,
            houseNumberAdition,
            street,
            city,
            phoneNumber
        }
        localStorage.setItem("checkoutData", JSON.stringify(newCheckoutData));
    }

    return (
        <>
            <section className="checkout-form-container">
                <form>
                <Subtitle text="Voornaam" />
                <InputField
                    formSection="checkout"
                    inputType="text"
                    idValue="firstName"
                    placeholder="Voornaam"
                    eventHandler={(event) => setFirstName(event.target.value)}
                />
                <Subtitle text="Achternaam" />
                <InputField
                    formSection="checkout"
                    inputType="text"
                    idValue="lastName"
                    placeholder="Achternaam"
                    eventHandler={(event) => setLastName(event.target.value)}
                />
                <Subtitle text="E-mail adres" />
                <InputField
                    formSection="checkout"
                    inputType="text"
                    idValue="email"
                    placeholder="E-mail adres"
                    eventHandler={(event) => setEmail(event.target.value)}
                    required
                />
                <Subtitle text="Postcode" />
                <InputField
                    formSection="checkout"
                    inputType="text"
                    idValue="zipCode"
                    placeholder="Postcode"
                    eventHandler={(event) => setZipCode(event.target.value)}
                />
                <Subtitle text="Huisnummer & toevoeging" />
                <section className="side-by-side">
                    <InputField
                        formSection="checkout"
                        inputType="number"
                        idValue="houseNumber"
                        placeholder="Huisnummer"
                        eventHandler={(event) => setHouseNumber(event.target.value)}
                    />
                    <InputField
                        formSection="checkout"
                        inputType="text"
                        idValue="houseNumberAdition"
                        placeholder="Toevoeging"
                        eventHandler={(event) => setHouseNumberAdition(event.target.value)}
                    />
                </section>
                <Subtitle text="Straatnaam" />
                <InputField
                    formSection="checkout"
                    inputType="text"
                    idValue="streetName"
                    placeholder="Straatnaam"
                    eventHandler={(event) => setStreet(event.target.value)}
                />
                <Subtitle text="Plaatsnaam" />
                <InputField
                    formSection="checkout"
                    inputType="text"
                    idValue="city"
                    placeholder="Plaatsnaam"
                    eventHandler={(event) => setCity(event.target.value)}
                />
                <Subtitle text="Telefoonnummer" />
                <InputField
                    formSection="checkout"
                    inputType="number"
                    idValue="phoneNumber"
                    placeholder="Telefoonnummer"
                    eventHandler={(event) => setPhoneNumber(event.target.value)}
                />
                </form>
            </section>
            <ShippingMethods />

            <section className="cart-button">
                <Link exact="true" to="/checkout/payment">
                    <RedirectButton 
                    callToAction="Volgende" 
                    primary 
                    clickHandler={saveCheckoutData}
                    />
                </Link>
            </section>
            
        </>
    )
}

export default CheckoutForm
