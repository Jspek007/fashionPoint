import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router";
import "./ProductDetail.scss";
import AddToCartButton from "../AddToCartButton";

function ProductDetail() {

    const [loading, setLoading] = useState(false);
    const [productData, setProductData] = useState([]);

    const {productId} = useParams();

    const getSingleProductApi = `https://fakestoreapi.com/products/${productId}`


    useEffect(() => {
        const fetchSpecificProduct = async () => {
            setLoading(true);
            try {
                const result = await axios.get(getSingleProductApi);
                setProductData(result.data);
                console.log(productData)
            } catch (error) {
                console.log(error);
            }
        };
        fetchSpecificProduct().then(() => {
            setLoading(false);
        });
    }, [getSingleProductApi]);


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
                <section className="bottom-detail-container">
                        <AddToCartButton specificProductData={productData}/>
                    <section className="product-rating-container">
                        <section className="rating">
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    );
}

export default ProductDetail;