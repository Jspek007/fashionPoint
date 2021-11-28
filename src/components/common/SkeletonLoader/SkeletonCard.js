import React from 'react';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCard = () => {
    return (
        <section className="product-list-container">
            <section className="product-list-grid">
                <section className="product-container">
                    {Array(6)
                        .fill()
                        .map((item, index) => (
                            <section key={index} className="product-link">
                                <Skeleton width={300} height={250} />
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
            </section>
        </section>
    );
};

export default SkeletonCard;