import React, {useState} from 'react';
import "./BurgerMenu.scss";
import {Link} from "react-router-dom";
import {FaBars} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";
import {IconContext} from "react-icons";
import { SidebarData } from "./SidebarData";

const BurgerMenu = () => {
    const [sidebar, setSitebar] = useState(false);

    const showSideBar = () => setSitebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{color: "#000000\\n"}}>
            <section className="navbar">
                <Link to="#" classname="menu-bars">
                    <FaBars onClick={showSideBar}/>
                </Link>
            </section>

            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSideBar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link exact="true" to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
                </IconContext.Provider>
        </>
    );
};

export default BurgerMenu;