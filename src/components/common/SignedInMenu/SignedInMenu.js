import React, {useRef} from 'react';
import "./SignedInMenu.scss";
import {useAuth} from "../../../contexts/AuthContext";
import {FaUser} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useDetectOutsideClick} from "../../../helpers/UseDetectOutsideClick/UseDetectOutsideClick";

function SignedInMenu() {
    const auth = useAuth();
    const user = auth.currentUser;
    const displayName = user.displayName;
    const {logout} = useAuth();

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false)
    const onClick = () => setIsActive(!isActive);

    return (
        <section className="menu-container">
            <button onClick={onClick} className="menu-trigger">
               <span>
                   <FaUser className="user-icon"/>
                   {displayName}
               </span>
            </button>
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    <li><Link exact to="/my-account">Mijn account</Link></li>
                    <li><Link exact to="/my-account">Mijn account</Link></li>
                    <li><Link exact to="/" onClick={logout}>Uitloggen</Link></li>
                </ul>
            </nav>
        </section>
    );
}

export default SignedInMenu;