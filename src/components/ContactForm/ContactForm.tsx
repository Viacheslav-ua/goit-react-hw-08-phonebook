import React, { useState } from "react";
import Modal from "../Modal";
import S from "./ContactForm.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useDispatch, useSelector } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";
import contactsSelectors from "../../redux/contacts/contacts-selector";
import { ItemTypes } from "../../types"

const ContactForm: React.FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const items = useSelector(contactsSelectors.getItems)

  const handleAddInput =
    (i: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const b = new RegExp(i);
      if (b.test(e.currentTarget.value)) {
        if (e.currentTarget.name === "name") setName(e.currentTarget.value);
        if (e.currentTarget.name === "number") setNumber(e.currentTarget.value);
      }
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isName = items.find((item: ItemTypes) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );

    if (isName) {
      toggleModal();
      return;
    }
    dispatch(contactsOperations.addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const toggleModal = (): void => {
    setShowModal((state) => !state);
  };

  return (
    <>
      {showModal && (
        <Modal onClose={toggleModal}>
          <Alert severity="warning" onClose={toggleModal}>
            <AlertTitle>Warning</AlertTitle>
            {name} is already in contacts
          </Alert>
        </Modal>
      )}
      
      <form className={S.contactsForm} onSubmit={handleSubmit}>
        <h2 className={S.title}>Add contact</h2>
        <TextField
          label="Name"
          variant="standard"
          id="component-simple"
          name="name"
          value={name}
          onChange={handleAddInput("^$|^[$a-zA-Z??-????-?? -']*$")}
          title="?????? ?????????? ???????????????? ???????????? ???? ????????, ??????????????????, ???????? ?? ????????????????. ???????????????? Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan ?? ??. ??."
          required
        />
        <TextField
          label="Phone number"
          variant="standard"
          id="component-simple"
          type="tel"
          name="number"
          value={number}
          onChange={handleAddInput("^$|^\\+|^\\d[\\d\\s-.]*$")}
          title="?????????? ???????????????? ???????????? ???????????????? ???????? ?? ?????????? ?????????????????? ??????????????, ????????, ?????????????? ???????????? ?? ?????????? ???????????????????? ?? +"
          required
        />

        <Button type="submit" className={S.btn} variant="contained">
          Add contact
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
