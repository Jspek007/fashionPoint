import React, {useEffect, useState} from 'react';
import "./AddToWishlistIcon.scss";
import {FaRegHeart, FaHeart} from "react-icons/all";

function AddToWishlistIcon({productData}) {

    const [inWishlist, setInWishlist] = useState(false);
    let wishlistArray = localStorage.getItem('wishlist');

    const checkItemInWishlist = () => {
        if (wishlistArray === null || wishlistArray === []) {
            setInWishlist(false);
        } else {

            let itemIsInWishlist = wishlistArray.includes(productData.title)

            if (itemIsInWishlist) {
                setInWishlist(true)
            } else {
                setInWishlist(false);
            }
        }
    }

    useEffect(() => {
        checkItemInWishlist();
    }, [])

    const addProductToLocalStorage = () => {
        setInWishlist(true);
        wishlistArray = JSON.parse(localStorage.getItem('wishlist')) ?
            JSON.parse(localStorage.getItem('wishlist')) : [];

        let newWishlistProduct = {
            title: productData.title,
            price: productData.price,
            image: productData.image
        }

        wishlistArray.push(newWishlistProduct);
        localStorage.setItem('wishlist', JSON.stringify(wishlistArray));
    }

    const removeProductFromLocalStorage = () => {
        wishlistArray = JSON.parse(localStorage.getItem('wishlist')) ?
            JSON.parse(localStorage.getItem('wishlist')) : [];
        const productPosition = wishlistArray.map(function (e) {return e.title}).indexOf(productData.title);
        wishlistArray.splice(productPosition, 1);
        localStorage.setItem(`wishlist`, JSON.stringify(wishlistArray));
        setInWishlist(false);
    }

    return (
        <section className="wishlist-icon-container">
            {!inWishlist && <FaRegHeart className="wishlist-icon" onClick={addProductToLocalStorage}/>}
            {inWishlist && <FaHeart className="wishlist-icon" onClick={removeProductFromLocalStorage}/>}
        </section>
    )
}

export default AddToWishlistIcon;