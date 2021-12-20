import React from 'react';
import {SignedInMenu} from "../../../index";
import {RedirectButton} from "../../../../Form/Buttons";
import {useAuth} from "../../../../../contexts/AuthContext";
import {Link} from "react-router-dom";
import MinicartMenu from "../../Minicart/MinicartMenu";
import {FaShoppingCart, FaUser} from "react-icons/fa";

function HeaderActionMenu() {

    const auth = useAuth();

    return (
        <>
            {auth.currentUser && (
                <>
                    <MinicartMenu/>
                    <SignedInMenu/>
                </>
            )}

            {!auth.currentUser && (
                <>
                    <section className="mobile-header-menu">
                        <Link exact="true" to={"login"}>
                            <FaUser />
                        </Link>
                    </section>
                    <section className="header-menu">
                        <Link exact="true" to="/login">
                            <RedirectButton callToAction="Inloggen"/>
                        </Link>
                        <Link exact="true" to="/aanmelden">
                            <RedirectButton callToAction="Aanmelden" primary/>
                        </Link>
                    </section>
                </>
            )}
        </>
    )
}

export default HeaderActionMenu;