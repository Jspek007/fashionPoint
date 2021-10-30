import React, {useEffect, useState} from "react";
import "./MensCollection.scss";
import axios from "axios";
import {ProductCards} from "../../../components/common";

function MensCollection() {
    const [loading, setLoading] = useState(null);
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const fetchMensProductData = async () => {
            setLoading(true);
            try {
                const result = await axios.get(
                    "https://fakestoreapi.com/products/category/men's%20clothing"
                );
                setProductData(result.data);
            } catch (error) {
                console.log(error);
            }
        };
        setLoading(false);
        fetchMensProductData().then((r) => {
            console.log("Load on refresh");
        });
    }, []);

    return (
        <>
            <ProductCards productData={productData}/>
            <ProductCards productData={productData}/>
            <ProductCards productData={productData}/>
        </>
    );
}

export default MensCollection;
