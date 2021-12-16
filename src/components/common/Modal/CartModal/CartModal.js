import React from 'react';
import "./CartModal.scss";

const CartModal = (props) => {
    return (
        <>
            {props.show ?
                <section className="modal-container">
                    {props.children}
                </section>
                : null
            }
        </>
    );
};

export default CartModal;