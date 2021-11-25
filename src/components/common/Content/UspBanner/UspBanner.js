import React, {useState} from 'react';
import "./UspBanner.scss";
import {useInView} from "react-intersection-observer";

const UspBanner = ({imageSrc, textTitle, seoText, flipped}) => {

    const {ref, inView} = useInView({
        threshold: 0.4,
    });

    const renderContent = () => {
        if (!flipped) {
            return (
                    <section className="usp__content-container">
                        <img className="usp__image" src={imageSrc} alt="fashion-outlet"/>
                        <section className="usp__text">
                            <h2>{textTitle}</h2>
                            <p>{seoText}</p>
                        </section>
                    </section>
            );
        } else {
            return (
                    <section className="usp__content-container">
                        <section className="usp__text">
                            <h2>{textTitle}</h2>
                            <p>{seoText}</p>
                        </section>
                        <img className="usp__image" src={imageSrc} alt="fashion-outlet"/>
                    </section>
            )
        }
    }

    return (
        <div className={inView ? "usp__container usp__container--zoom" : "usp__container"} ref={ref}>
            {renderContent()}
        </div>
    )
};

export default UspBanner;