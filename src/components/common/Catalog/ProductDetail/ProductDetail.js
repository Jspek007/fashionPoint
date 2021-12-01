import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router";
import "./ProductDetail.scss";
import AddToCartButton from "../../../Form/Buttons/AddToCartButton";
import ToggleWishlistIcon from "../ToggleWishlistIcon";
import ProductDetailSkeleton from "../../SkeletonLoader/ProductDetailSkeleton";

function ProductDetail() {

    const [loading, setLoading] = useState(false);
    const [productData, setProductData] = useState([]);
    const {productId} = useParams();
    const getSingleProductApi = `https://fakestoreapi.com/products/${productId}`
    const [addToCartMessage, setAddToCartMessage] = useState('');

    let cartArray = localStorage.getItem('currentCart');


    useEffect(() => {
        const fetchSpecificProduct = async () => {
            setLoading(true);
            try {
                const result = await axios.get(getSingleProductApi);
                setProductData(result.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchSpecificProduct().then(() => {
            setLoading(false);
        });
    }, [getSingleProductApi]);

    const addProductToCart = () => {
        cartArray = JSON.parse(localStorage.getItem('currentCart')) ?
            JSON.parse(localStorage.getItem('currentCart')) : [];
        let newCartProduct = {
            title: productData.title,
            price: productData.price,
            image: productData.image,
            id: productData.id
        }

        cartArray.push(newCartProduct);
        localStorage.setItem('currentCart', JSON.stringify(cartArray));
    }


    return (
        <>
            {loading && <ProductDetailSkeleton />}
            {!loading && (
                <section className="product-detail-container">
                    <section className="product-image-container">
                        <ToggleWishlistIcon productData={productData}/>
                        <img src={productData.image} className="product-image" alt={productData.title}/>
                    </section>
                    <section className="product-details">
                        <section className="product-detail-title">
                            {productData.title}
                        </section>
                        <section className="product-detail-description">
                            {productData.description}
                        </section>
                        <section className="bottom-detail-container">
                            <AddToCartButton clickHandler={addProductToCart} specificProductData={productData} />
                            <section className="product-rating-container">
                                <section className="rating">
                                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            )}
        </>
    );
}

export default ProductDetail;