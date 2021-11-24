import React from 'react';
import {SignedInMenu} from "../../../index";
import {UserControlButton} from "../../../../Form/Buttons";
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
                        <UserControlButton callToAction="Inloggen"/>
                    </Link>
                    <Link exact="true" to="/aanmelden">
                        <UserControlButton callToAction="Aanmelden" />
                    </Link>
                </>
            )}
        </>
    )
}

export default HeaderActionMenu;