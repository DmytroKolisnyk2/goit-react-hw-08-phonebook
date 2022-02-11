import React, { Component } from "react";

import { connect } from "react-redux";

import { sendUserData } from "./statistic/sendUserData";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import Message from "./components/Message/Message";
import LoaderModal from "./components/LoaderModal/LoaderModal";
import ContactsCounter from "./components/ContactsCounter/ContactsCounter";

import "./styles/App.scss";
import { getContactsLength, getError, getLoading } from "./redux/contacts/contacts-selectors";

class App extends Component {
  componentDidMount() {
    sendUserData(); // Для збору статистики
  }

  render() {
    const { error, loading, contactsLength } = this.props;

    return (
      <>
        {loading && <LoaderModal />}
        {error && <h2 className="error">{error}</h2>}
        <div className="phonebook__wrapper">
          <div className="form-wrapper">
            <h1 className="headline">Phonebook</h1>
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
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: getLoading(state),
  error: getError(state),
  contactsLength: getContactsLength(state),
});

export default connect(mapStateToProps, null)(App);
