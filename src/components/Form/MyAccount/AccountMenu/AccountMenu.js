import React from 'react';
import "./AccountMenu.scss";

function AccountMenu() {
    return (
        <section className="my-account-menu-container">
            <h5 className="my-account-menu-title">Mijn Account</h5>
            <ul className="my-account-menu">
                <li className="my-account-menu-item">Mijn profiel</li>
                <li className="my-account-menu-item">Mijn bestellingen</li>
                <li className="my-account-menu-item">Retourneren</li>
                <li className="my-account-menu-item">Klantenservice</li>
            </ul>
        </section>
    );
}

export default AccountMenu;