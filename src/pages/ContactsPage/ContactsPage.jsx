import React from "react";

import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { TitleContact } from "components/ContactForm/styled";

const ContactsPage = () => {
  return (
    <>
      <ContactForm />
      <TitleContact>Contacts</TitleContact>
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsPage;
