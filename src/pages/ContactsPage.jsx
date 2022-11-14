import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
// import  Loader from "components/Loader/Loader";
// import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
// import { selectContacts } from "redux/contacts/selectors";

export default function ContactsPage() {
    // const { isLoading } = useSelector(selectContacts)    

    return (
        <div>
            <h1>PhoneBook</h1>
            <ContactForm />

            <h2>Find contact by name</h2>
            <Filter />
            <ContactList/>
            
            <Outlet/>
        </div>
    )
}

