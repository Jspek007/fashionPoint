import React from 'react';
import {useAuth} from "../../../contexts/AuthContext";

function SignedInMenu() {

    const { logout } = useAuth();

    return (
            <button className="login-action-button"
            onClick={logout}
            >Uitloggen</button>
    );
}

export default SignedInMenu;