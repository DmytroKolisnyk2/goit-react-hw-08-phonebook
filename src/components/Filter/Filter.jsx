import React from "react";
import "./Filter.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/contacts/filter/filter-actions";
import { getFilter } from "../../redux/contacts/contacts-selectors";
import Input from "../Input/Input";

function Filter({ onChange, value }) {
  return (
    <Input
      onChange={onChange}
      value={value}
      headline="Find contact by name"
      inputName="filter"
      inputType="text"
    />
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  value: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: ({ target }) => dispatch(changeFilter(target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
