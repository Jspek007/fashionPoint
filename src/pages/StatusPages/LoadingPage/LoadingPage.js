import React from 'react';
import "./LoadingPage.scss";
import {Footer, Header} from "../../../components/common";
import LoadingGif from "../../../assets/loadingGif/6134707265a929f4cdfc1f6d_5.gif";

const LoadingPage = () => {
    return (
        <>
            <Header/>
            <section className="loading-container">
                <img className="loading-gif" src={LoadingGif} alt="Working on your fashion outlet!"/>
            </section>
            <Footer/>
        </>
    );
};

export default LoadingPage;