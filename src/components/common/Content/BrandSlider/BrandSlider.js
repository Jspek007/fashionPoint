import React from 'react';
import "./BrandSlider.scss";
import Adidas from "../../../../assets/images/brandImages/adidas.jpg"
import Chanel from "../../../../assets/images/brandImages/chanel.jpg"
import Nike from "../../../../assets/images/brandImages/nike.jpg"
import NoLabel from "../../../../assets/images/brandImages/nolabel.jpg"
import Reiss from "../../../../assets/images/brandImages/reiss.jpg"
import Rivers from "../../../../assets/images/brandImages/rivers.jpg"
import StApe from "../../../../assets/images/brandImages/st-ape.jpg"
import Supreme from "../../../../assets/images/brandImages/supreme.jpg"



function BrandSlider() {


    return (
        <section className="slider-container">
            <section className="slider-item">
                <img src={Adidas} alt="Adidas" className="slider-image"/>
            </section>

            <section className="slider-item">
                <img src={Chanel} alt="Chanel" className="slider-image"/>
            </section>

            <section className="slider-item">
                <img src={Nike} alt="Nike" className="slider-image"/>
            </section>

            <section className="slider-item">
                <img src={NoLabel} alt="NoLabel" className="slider-image"/>
            </section>

            <section className="slider-item">
                <img src={Reiss} alt="Reiss" className="slider-image"/>
            </section>

            <section className="slider-item">
                <img src={Rivers} alt="Rivers" className="slider-image"/>
            </section>

            <section className="slider-item">
                <img src={StApe} alt="St.Ape" className="slider-image"/>
            </section>

            <section className="slider-item">
                <img src={Supreme} alt="Supreme" className="slider-image"/>
            </section>

        </section>
    );
}

export default BrandSlider;
