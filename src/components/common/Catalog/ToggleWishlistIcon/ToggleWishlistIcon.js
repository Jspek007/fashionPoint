import React, { useEffect, useState } from "react";
import "./ToggleWishlistIcon.scss";
import { FaRegHeart, FaHeart } from "react-icons/all";

function ToggleWishlistIcon({ productData }) {
  const [inWishlist, setInWishlist] = useState(false);
  let wishlistArray = localStorage.getItem("wishlist");

  let checkItemInWishlist;
  checkItemInWishlist = () => {
    if (wishlistArray === null || wishlistArray === []) {
      setInWishlist(false);
    } else {
      let itemIsInWishlist = wishlistArray.includes(productData.title);

      if (itemIsInWishlist) {
        setInWishlist(true);
      } else {
        setInWishlist(false);
      }
    }
  };

  useEffect(() => {
    checkItemInWishlist();
  }, [checkItemInWishlist]);

  const addProductToLocalStorage = () => {
    wishlistArray = JSON.parse(localStorage.getItem("wishlist"))
      ? JSON.parse(localStorage.getItem("wishlist"))
      : [];

    let newWishlistProduct = {
      title: productData.title,
      price: productData.price,
      image: productData.image,
      id: productData.id,
    };

    wishlistArray.push(newWishlistProduct);
    localStorage.setItem("wishlist", JSON.stringify(wishlistArray));
    setInWishlist(true);
  };

  const removeProductFromLocalStorage = () => {
    wishlistArray = JSON.parse(localStorage.getItem("wishlist"))
      ? JSON.parse(localStorage.getItem("wishlist"))
      : [];
    const productPosition = wishlistArray
      .map(function (e) {
        return e.title;
      })
      .indexOf(productData.title);
    wishlistArray.splice(productPosition, 1);
    localStorage.setItem(`wishlist`, JSON.stringify(wishlistArray));
    setInWishlist(false);
  };

  return (
    <section className="wishlist-icon-container">
      {!inWishlist && (
        <FaRegHeart
          className="wishlist-icon"
          onClick={addProductToLocalStorage}
        />
      )}
      {inWishlist && (
        <FaHeart
          className="wishlist-icon"
          onClick={removeProductFromLocalStorage}
        />
      )}
    </section>
  );
}

export default ToggleWishlistIcon;
