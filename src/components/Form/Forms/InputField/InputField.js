import React from 'react';
import "./InputField.scss";

const InputField = ({error, labelName, inputType, idValue, placeholder, eventHandler, value }) => {
    return (
        <fieldset>
            <label htmlFor={labelName}>
                <input
                    className="input-field"
                    type={inputType}
                    id={idValue}
                    placeholder={placeholder}
                    onChange={eventHandler}
                    value={value}
                />
            </label>
            {error && <span className="error-message">{error}</span>}
        </fieldset>
    );
};

export default InputField;