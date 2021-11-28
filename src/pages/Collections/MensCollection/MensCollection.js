import React, {useEffect, useState} from "react";
import "./MensCollection.scss";
import axios from "axios";
import {CategoryInformation, CatalogFilter} from "../../../components/common";
import SkeletonCard from "../../../components/common/SkeletonLoader/SkeletonCard";

function MensCollection() {
    const mensCollectionApi =
        "https://fakestoreapi.com/products/category/men's%20clothing";
    const [loading, setLoading] = useState(false);
    const [productData, setProductData] = useState([]);

    const fetchMensProductData = async () => {
        setLoading(true);
        try {
            const result = await axios.get(mensCollectionApi);
            setProductData(result.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMensProductData();
    }, []);

    return (
        <>
            <CategoryInformation index={0}/>
            <CatalogFilter productData={productData}/>
            {loading && <SkeletonCard />}
        </>
    )
}

export default MensCollection;
