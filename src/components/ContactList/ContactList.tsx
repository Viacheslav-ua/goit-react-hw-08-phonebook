import React, { useEffect, useState } from "react";

import { connect, useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import contactsOperations from "../../redux/contacts/contacts-operations";
import contactsSelectors from "../../redux/contacts/contacts-selector";
import { ItemTypes } from "../../types"
import Filter from "../Filter/Filter";
import S from "./ContactList.module.css";

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/DeleteForeverSharp';


const ContactList: React.FC = () => {
  const [filter, setFilter] = useState<string>("");

  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const token = useSelector(authSelectors.getToken);

  useEffect(() => dispatch(contactsOperations.getContacts(token)), [dispatch]);

  const changeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.currentTarget.value);
  };

  const handleDeleteContact = (id: string) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("is delete contact" + id)) {
      dispatch(contactsOperations.removeContacts(id));
    }
  };

  return (
    <>
    
      <Filter filterValue={filter} onChangeFilter={changeFilter} />
      <ul className={S.list}>
        {contacts.items.map(
          ({ id, name, number }: ItemTypes) =>
            name.toLowerCase().includes(filter.toLowerCase()) && (

              <li key={id} className={S.row}>
                <p className={S.text}>
                  {name}: {number}
                </p>
                {/* <button className={S.btn} onClick={() => handleDeleteContact(id)}>
                  Удалить
                </button> */}
                <Fab  size="small" color="secondary" aria-label="delete" onClick={() => handleDeleteContact(id)}>
                  <AddIcon sx={{ fontSize: 18}}/>
                </Fab>
              </li>

            )
        )}
      </ul>
    
    
    </>
  );
};
export default ContactList;
