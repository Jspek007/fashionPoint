import React from "react";
import "./Header.scss";
import Navigation from "./HeaderComponents/Navigation/Navigation";
import HeaderActionMenu from "./HeaderComponents/HeaderActionMenu/HeaderActionMenu";

function Header() {

    return (
        <>
            <div className="header-container">
                <Navigation/>
                <section className="right-header-section">
                    <HeaderActionMenu/>
                </section>
            </div>
        </>
    );
}

export default Header;
