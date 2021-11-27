import S from "./ContactsPage.module.css"
import ContactForm from "../../components/ContactForm";
import ContactList from "../../components/ContactList";

const ContactsPage = () => {
    return (
      <div className={S.container}>
       <ContactForm />
       <ContactList />
      </div>
    )
}

export default ContactsPage;