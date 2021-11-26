import S from "./ContactsPage.module.css"
import ContactForm from "../../components/ContactForm";
import ContactList from "../../components/ContactList";
import Filter from "../../components/Filter";

const ContactsPage = () => {
    return (
        <div className={S.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2 className={S.title}>Contacts</h2>
      {/* <Filter /> */}
      <ContactList />
    </div>
    )
}

export default ContactsPage;