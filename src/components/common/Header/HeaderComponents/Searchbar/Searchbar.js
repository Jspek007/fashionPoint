import React, { useRef, useState, useEffect, useCallback } from "react";
import "./Searchbar.scss";
import { GoSearch } from "react-icons/go";
import { useDetectOutsideClick } from "../../../../../helpers/useDetectOutsideClick/useDetectOutsideClick";
import axios from "axios";
import { Link } from "react-router-dom";

const Searchbar = () => {
  const searchbarRef = useRef(null);
  const [searchbar, setSearchBar] = useDetectOutsideClick(searchbarRef);
  const showSearchBar = useCallback(() => {
    setSearchValue("");
    setSearchBar(!searchbar);
  }, [searchbar, setSearchBar]);
  const fullCatalogApi = "https://fakestoreapi.com/products";
  const [catalog, setCatalog] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios.get(fullCatalogApi).then((res) => {
      setCatalog(res.data);
    });
  }, []);

  const handleSearchRedirect = useCallback(() => {
    showSearchBar();
    setSearchValue("");
  }, [showSearchBar]);

  const handleSearchValue = (event) => {
    let userInput = event.target.value;
    setSearchValue(userInput.toLowerCase());
  };

  return (
    <>
      <section className="menu-container-search" onClick={showSearchBar}>
        <section className="menu-trigger">
          <span>
            <GoSearch className="search-icon" />
          </span>
        </section>
      </section>

      {searchbar && (
        <section className="searchbar-container" ref={searchbarRef}>
          <input
            type="text"
            className={searchbar ? "searchbar active" : "searchbar"}
            placeholder="Zoek naar producten..."
            onChange={handleSearchValue}
            autoFocus
          />
          <section className="searchbar-item-container">
            {searchValue !== "" &&
              catalog
                .filter((item) => {
                  if (
                    (item.title &&
                      item.title.toLowerCase().includes(searchValue)) ||
                    (item.description && item.description.includes(searchValue))
                  ) {
                    return true;
                  }
                  return false;
                })
                .map((item) => (
                  <>
                    <Link
                      exact="true"
                      to={`/collectie/${item.category}/${item.id}`}
                      onClick={handleSearchRedirect}
                      key={item}
                    >
                      <section className="search-item">
                        <section className="search-image-container">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="search-image"
                          />
                        </section>
                        <span className="search-item-name">{item.title}</span>
                      </section>
                    </Link>
                  </>
                ))}
          </section>
        </section>
      )}
    </>
  );
};

export default Searchbar;
