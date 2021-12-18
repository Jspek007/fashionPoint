import React from 'react';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const ProductCardSkeleton = () => {
    return (
                <section className="product-container">
                    {Array(6)
                        .fill()
                        .map((item, index) => (
                            <section key={index} className="product-link">
                                <Skeleton width={400} height={500} />
                                <section className="product">
                                    <section className="product-item-price">
                                        <Skeleton width={100} />
                                    </section>
                                    <section className="product-item-title">
                                        <Skeleton width={300} />
                                    </section>
                                </section>
                            </section>
                        ))}
        </section>
    );
};

export default ProductCardSkeleton;