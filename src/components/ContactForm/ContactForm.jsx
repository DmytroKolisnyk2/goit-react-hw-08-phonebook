import "./ContactForm.scss";
import { nanoid } from "nanoid";
import { info } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addContact } from "../../redux/contacts/items/items-operations";
import { getContacts } from "../../redux/contacts/contacts-selectors";

import Input from "../Input/Input";
import SubmitBtn from "../SubmitBtn/SubmitBtn";

const INITIAL_STATE = {
  name: "",
  number: "",
};

class ContactForm extends Component {
  state = {
    ...INITIAL_STATE,
  };
  reset = () => this.setState({ ...INITIAL_STATE });

  onInputHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  addContact = (contactData) => {
    this.props.contacts.length >= 100
      ? info({ text: `Too many contacts now.`, delay: 700 })
      : this.props.addContact(contactData);
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const { contacts } = this.props;
    if (!contacts.find((item) => item.name === this.state.name)) {
      const contactData = { name: this.state.name, number: this.state.number, id: nanoid() };
      this.addContact(contactData);
      this.reset();
    } else {
      info({ text: `${this.state.name} is already in contacts.`, delay: 700 });
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmitHandler}>
        <Input
          headline="Name"
          inputPattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          inputTitle="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          inputType="text"
          inputName="name"
          value={this.state.name}
          onChange={this.onInputHandler}
        />
        <Input
          headline="Number"
          inputPattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          inputTitle="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          inputType="tel"
          inputName="number"
          value={this.state.number}
          onChange={this.onInputHandler}
        />
        <SubmitBtn>Add contact</SubmitBtn>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  addContact: (contact) => dispatch(addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
};
