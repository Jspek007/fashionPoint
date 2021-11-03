import React from 'react';
import {NavLink} from "react-router-dom";
import {useHistory, useLocation} from "react-router";
import {HandleRedirectToOrBack} from "../../../../../helpers/HandleRedirectToOrBack/HandleRedirectToOrBack";

function Navigation() {

    const history = useHistory();
    const location = useLocation();

    const logoRedirect = (event) => {
        event.preventDefault();
        HandleRedirectToOrBack({ history, location});
    }

    return (

            <header className="main-header">
                <section className="left-header-section">
                    <NavLink to="/klantenservice" className="left-header-section-item"
                             activeClassName="section-item-active">
                        Klantenservice
                    </NavLink>

                    <NavLink to="/over-ons" className="left-header-section-item section-item"
                             activeClassName="section-item-active">
                        Over ons
                    </NavLink>

                    <NavLink to="/collectie" className="left-header-section-item section-item"
                             activeClassName="section-item-active">
                        Collectie
                    </NavLink>
                </section>

                <section className="main-header-logo">
                    <a href="/" draggable="false" className="main-header-logo"
                        onClick={logoRedirect}
                    >
                        FashionPoint
                    </a>
                </section>
            </header>
    );
}

export default Navigation;