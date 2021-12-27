import React from 'react';
import "./InputField.scss";

const InputField = ({error, inputType, idValue, placeholder, eventHandler, value, formSection, required }) => {
    return (
        <fieldset>
                <input
                    className={`input-field ${formSection}`}
                    type={inputType}
                    id={idValue}
                    placeholder={placeholder}
                    onChange={eventHandler}
                    value={value}
                    required={required || false}
                />
            {error && <span className="error-message">{error}</span>}
        </fieldset>
    );
};

export default InputField;