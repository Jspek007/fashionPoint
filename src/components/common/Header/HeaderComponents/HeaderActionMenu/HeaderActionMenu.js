import React, {useContext} from 'react';
import {SignedInMenu} from "../../../index";
import {LoginButton, SignupButton} from "../../../../Form/Buttons";
import {useAuth} from "../../../../../contexts/AuthContext";

function HeaderActionMenu() {

    const auth = useAuth();

    return (
        <>
            {auth.currentUser && (
                <SignedInMenu/>
            )}

            {!auth.currentUser && (
                <>
                    <LoginButton/>
                    <SignupButton/>
                </>
            )}
        </>
    )
}

export default HeaderActionMenu;