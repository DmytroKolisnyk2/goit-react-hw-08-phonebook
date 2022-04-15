import React from "react";
import "./Input.scss";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

export default function Input({
  headline,
  value,
  onChange,
  inputTitle,
  required,
  inputType,
  inputName,
  inputPattern,
}) {
  const inputId = nanoid();

  return (
    <label className="filter__title" htmlFor={inputId}>
      <h3 className="phonebook__headline">{headline}</h3>
      {inputPattern ? (
        <input
          value={value}
          onChange={onChange}
          className="form__input"
          type={inputType}
          name={inputName}
          id={inputId}
          required={required}
          pattern={inputPattern}
          autoComplete="off"
        />
      ) : (
        <input
          value={value}
          onChange={onChange}
          className="form__input"
          type={inputType}
          name={inputName}
          id={inputId}
          required={required}
          autoComplete="off"
        />
      )}
    </label>
  );
}

Input.defaultProps = {
  inputPattern: "",
  required: false,
  inputTitle: "",
};
Input.propTypes = {
  headline: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  inputTitle: PropTypes.string,
  required: PropTypes.bool,
  inputType: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputPattern: PropTypes.string,
};
