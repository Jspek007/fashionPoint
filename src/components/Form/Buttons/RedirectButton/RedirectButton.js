import React from "react";
import "./RedirectButton.scss";

function RedirectButton({primary, callToAction, clickHandler}) {

    const renderContent = () => {
        if (!primary) {
            return (
                <button type="button"
                        className="user-control-button"
                        onClick={clickHandler}
                >
                    {callToAction}
                </button>
            )
        }
        else {
            return (
                <button type="button"
                        className="user-control-button-signup"
                        onClick={clickHandler}
                >
                    {callToAction}
                </button>
            )
        }
    }

  return (
      <span>
          {renderContent()}
      </span>
  );
}

export default RedirectButton;
