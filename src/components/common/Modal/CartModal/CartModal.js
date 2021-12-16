import React from 'react';
import "./CartModal.scss";

const CartModal = (props) => {
    return (
        <section className={`modal-container ${props.show ? 'modal-container-shown' : `modal-container-hidden`}`}
                 onTransitionEnd={() => props.handleModal(false)}
        >
            {props.children}
        </section>
    );
};

export default CartModal;