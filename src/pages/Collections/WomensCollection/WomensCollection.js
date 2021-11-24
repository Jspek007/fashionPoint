import React, {useEffect, useState} from 'react';
import "./WomensCollection.scss";
import axios from "axios";
import { CategoryBanners, CatalogFilter } from "../../../components/common";

function WomensCollection() {

    const womensCollectionApi = "https://fakestoreapi.com/products/category/women's%20clothing";
    const [loading, setLoading] = useState(false);
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const fetchWomensProductData = async () => {
            setLoading(true);
            try {
                const result = await axios.get(womensCollectionApi);
                setProductData(result.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchWomensProductData().then(() => {
            setLoading(false);
        });
    }, []);

    return (
        <>
            <CategoryBanners index={1} />
            <CatalogFilter productData={productData} />
        </>
    );
}

export default WomensCollection;