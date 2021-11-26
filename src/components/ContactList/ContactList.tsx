import React, { useEffect } from "react";

import { connect, useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import * as actions from "../../redux/contacts/contacts-actions";
import contactsOperations from "../../redux/contacts/contacts-operations";
import contactsSelectors from "../../redux/contacts/contacts-selector";
import S from "./ContactList.module.css";
type listType = {
  id: string;
  name: string;
  number: string;
};

// interface PropsType {
//   contacts: listType[];
//   onDeleteContact: string;
// }

// const ContactList: React.FC<any> = ({ contacts, onDeleteContact }) => {
const ContactList: React.FC = () => {
  // console.log(contacts);
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const token = useSelector(authSelectors.getToken);

  useEffect(() => dispatch(contactsOperations.getContacts(token)), [dispatch]);

  const handleDeleteContact = (id: string) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("is delete contact" + id)) {
      dispatch(contactsOperations.removeContacts(id));
    }
  };

  return (
    <ul className={S.list}>
      {contacts.items.map(
        ({ id, name, number }: listType) =>
          name.toLowerCase().includes(contacts.filter.toLowerCase()) && (
            <li key={id} className={S.row}>
              <p className={S.text}>
                {name}: {number}
              </p>
              <button className={S.btn} onClick={() => handleDeleteContact(id)}>
                Удалить
              </button>
            </li>
          )
      )}
    </ul>
  );
};
//getContacts;
// const mapStateToProps = (state: any) => {
//   return {
//     contacts: state.contacts,
//   };
// };

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     onDeleteContact: (id: string) => dispatch(actions.removeContact(id)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
export default ContactList;
