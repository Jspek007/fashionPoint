import React from 'react';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const ProductDetailSkeleton = () => {
    return (
        <section className="product-detail-container">
            <section className="product-image-container">
                <Skeleton width={300} height={400} />
            </section>
            <section className="product-details">
                <section className="product-detail-title">
                    <Skeleton width={500} height={80} />
                </section>
                <section className="product-detail-description">
                    <Skeleton width={500} height={120}/>
                </section>
                <section className="bottom-detail-container">
                    <Skeleton width={500} height={100}/>
                </section>
            </section>
        </section>
    );
};

export default ProductDetailSkeleton;