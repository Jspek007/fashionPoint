import React, {useRef, useState} from "react";
import "./Searchbar.scss";
import {GoSearch} from "react-icons/go";
import {useDetectOutsideClick} from "../../../../../helpers/useDetectOutsideClick/useDetectOutsideClick";

function Searchbar() {

    const searchbarRef = useRef(null);
    const showSearchBar = () => setSearchBar(!searchbar)
    const [searchbar, setSearchBar] = useDetectOutsideClick(searchbarRef);

    return (
        <>
            <section className="menu-container-search">
                <section className="menu-trigger">
            <span>
            <GoSearch className="search-icon" onClick={showSearchBar}/>
                </span>
                </section>
            </section>

            <section className="searchbar-container"
                     ref={searchbarRef}
            >
                <input type="text"
                       className={searchbar ? "searchbar active" : "searchbar"}
                       placeholder="Zoek naar producten..."
                />
            </section>
        </>
    );
}

export default Searchbar;
