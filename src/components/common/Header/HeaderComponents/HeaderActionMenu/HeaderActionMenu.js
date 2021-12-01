import React, {useEffect, useState} from 'react';
import {SignedInMenu} from "../../../index";
import {RedirectButton} from "../../../../Form/Buttons";
import {useAuth} from "../../../../../contexts/AuthContext";
import {Link} from "react-router-dom";
import MinicartMenu from "../../../Minicart/MinicartMenu";
import MinicartItemCount from "../../../Minicart/MinicartItemCount/MinicartItemCount";

function HeaderActionMenu() {

    const auth = useAuth();
    const [count, setCount] = useState('');

    const checkCurrentCart = () => {
        let currentCart = JSON.parse(localStorage.getItem('currentCart'));
        if (currentCart != null) {
            setCount(currentCart.length);
        }
    }

    useEffect(() => {
        checkCurrentCart();
    }, [])

    return (
        <>
            {auth.currentUser && (
                <>
                    <MinicartMenu />
                    <MinicartItemCount count={count} />
                    <SignedInMenu/>
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