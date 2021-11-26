import { StateTypes } from "../../types";

const getItems = (state: StateTypes) => state.contacts.items;
const getFilter = (state: StateTypes) => state.contacts.filter;
const getContacts = (state: StateTypes) => state.contacts;

const contactsSelectors = {
  getItems,
  getFilter,
  getContacts,
};
export default contactsSelectors;
