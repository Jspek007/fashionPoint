import React, { useEffect, useState } from "react";
import "./MensCollection.scss";
import axios from "axios";
import { CategoryBanners, CatalogFilter } from "../../../components/common";

function MensCollection() {
  const mensCollectionApi =
    "https://fakestoreapi.com/products/category/men's%20clothing";
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchMensProductData = async () => {
      setLoading(true);
      try {
        const result = await axios.get(mensCollectionApi);
        setProductData(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMensProductData().then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      <CategoryBanners index={0} />
      <CatalogFilter productData={productData} />
    </>
  );
}

export default MensCollection;
