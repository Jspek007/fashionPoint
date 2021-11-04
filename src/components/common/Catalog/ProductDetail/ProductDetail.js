import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router";
import "./ProductDetail.scss";
import AddToCartButton from "../AddToCartButton";

function ProductDetail() {

    const [loading, setLoading] = useState(false);
    const [productData, setProductData] = useState([]);

    const {productId} = useParams();
    console.log(productId);

    const getSingleProductApi = `https://fakestoreapi.com/products/${productId}`

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
    }, []);


    return (
        <section className="product-detail-container">
            <section className="product-image-container">
                <img src={productData.image} className="product-image" alt={productData.title}/>
            </section>
            <section className="product-details">
                <section className="product-detail-title">
                    {productData.title}
                </section>
                <section className="product-detail-description">
                    {productData.description}
                </section>
                <section className="add-to-cart-button-container">
                    <AddToCartButton specificProductData={productData}/>
                </section>
            </section>
        </section>
    );
}

export default ProductDetail;