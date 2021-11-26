import React from 'react';
import "./FullWidthBanner.scss";

const FullWidthBanner = (props) => {
    return (
        <section className="full-width-banner-content">
            <section className="full-width-left-container">
                <section className="call-to-action-container">
                    <h1 className="banner-text">{props.callToAction}</h1>
                    <h2 className="banner-paragraph">{props.paragraph}</h2>
                    <section className="buttons-container">
                        {props.children}
                    </section>
                </section>

            </section>
            <section className="full-width-banner-image">
                <img className="banner-image" src={props.imageSrc} alt="Your fashion outlet!"/>
            </section>
        </section>
    );
};

export default FullWidthBanner;