import React, { useRef, useState, useEffect, useCallback } from "react";
import "./Searchbar.scss";
import { GoSearch } from "react-icons/go";
import { useDetectOutsideClick } from "../../../../../helpers/useDetectOutsideClick/useDetectOutsideClick";
import axios from "axios";
import { Link } from "react-router-dom";

const Searchbar = () => {
  const searchbarRef = useRef(null);
  const showSearchBar = () => setSearchBar(!searchbar);
  const [searchbar, setSearchBar] = useDetectOutsideClick(searchbarRef);
  const fullCatalogApi = "https://fakestoreapi.com/products";
  const [catalog, setCatalog] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios.get(fullCatalogApi).then((res) => {
      setCatalog(res.data);
    });
    console.log(catalog);
  }, []);

  const handleSearchRedirect = () => {
    showSearchBar();
    setSearchValue("");
  };

  const handleSearchValue = (event) => {
    let userInput = event.target.value;
    setSearchValue(userInput.toLowerCase());
  };

  return (
    <>
      <section className="menu-container-search">
        <section className="menu-trigger">
          <span>
            <GoSearch className="search-icon" onClick={showSearchBar} />
          </span>
        </section>
      </section>

      <section
        className={
          searchbar ? "searchbar-container active" : "searchbar-container"
        }
        ref={searchbarRef}
      >
        <input
          type="text"
          className={searchbar ? "searchbar active" : "searchbar"}
          placeholder="Zoek naar producten..."
          onChange={handleSearchValue}
        />
        <section className="searchbar-item-container">
          {searchValue !== "" &&
            catalog
              .filter((item) => {
                if (!searchValue) return true;
                if (
                  (item.title &&
                    item.title.toLowerCase().includes(searchValue)) ||
                  (item.description && item.description.includes(searchValue))
                ) {
                  return true;
                }
              })
              .map((item) => (
                <>
                  {!searchValue && <h1>Hello</h1>}
                  <section className="search-item">
                    <Link
                      exact="true"
                      to={`/collectie/${item.category}/${item.id}`}
                      onClick={handleSearchRedirect}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="search-image"
                      />
                    </Link>
                  </section>
                </>
              ))}
        </section>
      </section>
    </>
  );
};

export default Searchbar;
