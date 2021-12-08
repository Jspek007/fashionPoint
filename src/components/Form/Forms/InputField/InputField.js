import React from 'react';
import "./InputField.scss";

const InputField = ({error, inputType, idValue, placeholder, eventHandler, value, myAccount }) => {
    return (
        <fieldset>
                <input
                    className={`input-field ${myAccount}`}
                    type={inputType}
                    id={idValue}
                    placeholder={placeholder}
                    onChange={eventHandler}
                    value={value}
                />
            {error && <span className="error-message">{error}</span>}
        </fieldset>
    );
};

export default InputField;