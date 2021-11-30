import React from 'react';
import {SignedInMenu} from "../../../index";
import {RedirectButton} from "../../../../Form/Buttons";
import {useAuth} from "../../../../../contexts/AuthContext";
import {Link} from "react-router-dom";
import Minicart from "../../../Minicart";

function HeaderActionMenu() {

    const auth = useAuth();

    return (
        <>
            {auth.currentUser && (
                <>
                    <SignedInMenu/>
                    <Minicart />
                </>
            )}

            {!auth.currentUser && (
                <>
                    <Link exact="true" to="/login">
                        <RedirectButton callToAction="Inloggen"/>
                    </Link>
                    <Link exact="true" to="/aanmelden">
                        <RedirectButton callToAction="Aanmelden" signup/>
                    </Link>
                </>
            )}
        </>
    )
}

export default HeaderActionMenu;