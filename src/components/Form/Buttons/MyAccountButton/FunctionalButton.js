import React from "react";
import "../RedirectButton/RedirectButton.scss";

function FunctionalButton(props) {

    return (
            <button type="button"
                    className="functional-button"
                    onClick={props.clickHandler}
                    disabled={props.disabled || false}
            >
                {props.children}
            </button>
    );
}

export default FunctionalButton;
