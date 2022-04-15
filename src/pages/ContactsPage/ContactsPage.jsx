import React from "react";

import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import Message from "../../components/Message/Message";
import ContactsCounter from "../../components/ContactsCounter/ContactsCounter";
import Loader from "../../components/Loader/Loader";

import { connect } from "react-redux";
import { getContactsLength, getError, getLoading } from "../../redux/contacts/contacts-selectors";

const ContactsPage = ({ contactsLength, loading, error }) => {
  return (
    <section className="phonebook__wrapper">
      <div className="form-wrapper">
        <h2>Add new contact</h2>
        <ContactForm />
      </div>
      <div className="list-wrapper">
        <div className="headline-wrapper">
          <h2>Contacts</h2>
          <ContactsCounter changeColor first={contactsLength} second={100} />
        </div>
        <Filter />
        <Message />

        <ContactList />
      </div>
      {loading && <Loader />}
      {error && <h2 className="error">{error}</h2>}
    </section>
  );
};

const mapStateToProps = (state) => ({
  contactsLength: getContactsLength(state),
  loading: getLoading(state),
  error: getError(state),
});

export default connect(mapStateToProps, null)(ContactsPage);
