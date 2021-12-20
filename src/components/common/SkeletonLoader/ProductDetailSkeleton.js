import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductDetailSkeleton = () => {
    return (
        <>
            <section className="product-detail-title">
                <Skeleton width={1000} height={35} />
            </section>
            <section className="product-detail-container">
                <section className="product-image-container">
                    <Skeleton width={380} height={450}/>
                    <section className="bottom-detail-container">
                        <Skeleton width={380} height={100}/>
                    </section>
                </section>
                <section className="product-details">
                    <section className="product-detail-title">
                        <Skeleton width={550} height={585}/>
                    </section>
                </section>
            </section>
        </>
    );
};

export default ProductDetailSkeleton;
