import React from 'react';
import {SignedInMenu} from "../../../index";
import {RedirectButton} from "../../../../Form/Buttons";
import {useAuth} from "../../../../../contexts/AuthContext";
import {Link} from "react-router-dom";

function HeaderActionMenu() {

    const auth = useAuth();

    return (
        <>
            {auth.currentUser &&  (
                <SignedInMenu/>
            )}

            {!auth.currentUser && (
                <>
                    <Link exact="true" to="/login">
                        <RedirectButton callToAction="Inloggen"/>
                    </Link>
                    <Link exact="true" to="/aanmelden">
                        <RedirectButton callToAction="Aanmelden" />
                    </Link>
                </>
            )}
        </>
    )
}

export default HeaderActionMenu;