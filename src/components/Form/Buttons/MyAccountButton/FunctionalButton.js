import React from "react";
import "../RedirectButton/RedirectButton.scss";

function FunctionalButton(props) {

    return (
            <button type="submit" className="functional-button" onClick={props.clickHandler}>
                {props.children}
            </button>
    );
}

export default FunctionalButton;
