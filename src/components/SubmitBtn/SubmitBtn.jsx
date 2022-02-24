import React from "react";
import "./SubmitBtn.scss";
import PropTypes from "prop-types";

const SubmitBtn = ({ children }) => {
  return (
    <button className="form__submit" type="submit">
      {children}
    </button>
  );
};

SubmitBtn.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SubmitBtn;
