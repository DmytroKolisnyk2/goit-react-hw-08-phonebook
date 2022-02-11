import React from "react";
import "./Message.scss";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ContactsCounter from "../ContactsCounter/ContactsCounter";
import {
  getFilter,
  getContactsLength,
  getFilteredContacts,
} from "../../redux/contacts/contacts-selectors";

function Message({ filter, filteredContacts, contactsLength }) {
  return (
    filter && (
      <div className="message__headline-wrapper">
        <h3 className="message__headline">
          {filteredContacts.length === 0 ? "Oops, no contacts found" : "Filtered results:"}
        </h3>
        {filter && <ContactsCounter first={filteredContacts.length} second={contactsLength} />}
      </div>
    )
  );
}

const mapStateToProps = (state) => ({
  filter: getFilter(state),
  filteredContacts: getFilteredContacts(state),
  contactsLength: getContactsLength(state),
});

export default connect(mapStateToProps, null)(Message);

Message.propTypes = {
  filter: PropTypes.string.isRequired,
  filteredContacts: PropTypes.array.isRequired,
  contactsLength: PropTypes.number.isRequired,
};
