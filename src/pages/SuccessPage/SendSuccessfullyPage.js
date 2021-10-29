import React from 'react';
import "./SendSuccessfullyPage.scss";
import EmailIsSend from "../../assets/images/animationImages/07_4x.webp"

function SendSuccessfullyPage() {
    return (
        <section className="success-page-container">
            <section className="success-page-header">
                <h1>De machines draaien... </h1>
                <h5>Nog even geduld!</h5>
            </section>
            <section className="success-page-image-container">
                <img src={EmailIsSend} alt="We zijn onderweg!" className="success-page-image" draggable={"false"}/>
            </section>
        </section>
    );
}

export default SendSuccessfullyPage;