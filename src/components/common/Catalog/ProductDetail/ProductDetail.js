import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "./ProductDetail.scss";
import AddToCartButton from "../../../Form/Buttons/AddToCartButton";
import ToggleWishlistIcon from "../ToggleWishlistIcon";
import ProductDetailSkeleton from "../../SkeletonLoader/ProductDetailSkeleton";
import CartModal from "../../Modal/CartModal";
import { SubTitle } from "../../Content/TextComponents";
import { FaShoppingCart } from "react-icons/fa";
import { RedirectButton } from "../../../Form/Buttons";
import { Link } from "react-router-dom";

function ProductDetail() {
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState([]);
  const { productId } = useParams();
  const getSingleProductApi = `https://fakestoreapi.com/products/${productId}`;
  let cartArray = localStorage.getItem("currentCart");
  const [modal, setModal] = useState(false);

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
  }, [getSingleProductApi]);

  const addProductToCart = () => {
    cartArray = JSON.parse(localStorage.getItem("currentCart"))
      ? JSON.parse(localStorage.getItem("currentCart"))
      : [];

    let objectIndex = cartArray.findIndex((obj) => obj.id === productData.id);
    if (objectIndex === -1) {
      let newCartProduct = {
        title: productData.title,
        price: productData.price,
        image: productData.image,
        id: productData.id,
        qty: 1,
      };
      cartArray.push(newCartProduct);
      localStorage.setItem("currentCart", JSON.stringify(cartArray));
    } else {
      cartArray[objectIndex].qty++;
      localStorage.setItem("currentCart", JSON.stringify(cartArray));
    }
    setModal(true);
  };

  return (
    <>
      {loading && <ProductDetailSkeleton />}
      {!loading && (
        <section className="product-detail-container">
          <section className="product-image-container">
            <ToggleWishlistIcon productData={productData} />
            <img
              src={productData.image}
              className="product-image"
              alt={productData.title}
            />
          </section>
          <section className="product-details">
            <section className="product-detail-title">
              {productData.title}
            </section>
            <section className="product-detail-description">
              {productData.description}
            </section>
            <section className="bottom-detail-container">
              <AddToCartButton
                clickHandler={addProductToCart}
                specificProductData={productData}
              />
              <CartModal show={modal} handleModal={setModal}>
                <section className="modal-content">
                  <FaShoppingCart className="modal-icon" />
                  <SubTitle text="Product is toegevoegd aan uw winkelwagen." />
                  <Link exact="true" to="/winkelwagen">
                    <RedirectButton callToAction="Bekijken" primary />
                  </Link>
                </section>
              </CartModal>
              <section className="product-rating-container">
                <section className="rating">
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                </section>
              </section>
            </section>
          </section>
        </section>
      )}
    </>
  );
}

export default ProductDetail;
