import React, { useState } from "react";
import "./RemoveProductIcon.scss";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Modal from "../../Modal/Modal";
import { RedirectButton } from "../../../Form/Buttons";

const RemoveProductIcon = ({ cartData, specificProduct, updateCart }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const deRemoveProduct = () => {
    setModalOpen(false);
    removeProductFromCart();
  };

  const removeProductFromCart = () => {
    const cartIndex = cartData
      .map(function (e) {
        return e.title;
      })
      .indexOf(specificProduct.title);
    cartData.splice(cartIndex, 1);
    localStorage.setItem("currentCart", JSON.stringify(cartData));
    let newCart = JSON.parse(localStorage.getItem("currentCart"));
    updateCart(newCart);
  };

  return (
    <>
      {modalOpen && (
        <Modal ModalBody="Weet u zeker dat u dit artikel wilt verwijderen?">
          <RedirectButton
            clickHandler={() => deRemoveProduct()}
            callToAction="Ja"
          />
          <RedirectButton
            clickHandler={() => setModalOpen(false)}
            callToAction="Nee"
            primary
          />
        </Modal>
      )}
      <RiDeleteBin6Fill
        className="cart-icon"
        onClick={() => setModalOpen(true)}
      />
    </>
  );
};

export default RemoveProductIcon;
