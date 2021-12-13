import React from "react";
import "./RedirectButton.scss";

function RedirectButton({primary, callToAction}) {

    const renderContent = () => {
        if (!primary) {
            return (
                <button type="button" className="user-control-button">
                    {callToAction}
                </button>
            )
        }
        else {
            return (
                <button type="button" className="user-control-button-signup">
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
