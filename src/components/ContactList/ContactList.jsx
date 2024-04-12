import React, { useEffect } from "react";
import { useAuth } from "hooks/useAuth";
import { useSelector, useDispatch } from "react-redux";

import {
  deleteContactAction,
  getAllContactsAction,
} from "../../redux/Contacts/contactsOperations";
import {
  selectVisibleContacts,
  selectIsLoading,
  selectError,
} from "../../redux/Selectors/selectors";
import { Contact } from "components/Contact/Contact";

import { ContList } from "components/ContactList/ContactList.styled";

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getAllContactsAction());
    }
  }, [dispatch, isLoggedIn]);

  const handleDeleteContact = (id) => {
    dispatch(deleteContactAction(id));
  };

  const visibleContacts = useSelector(selectVisibleContacts);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  return (
    <ContList>
      {visibleContacts.map((contact) => {
        const formattedName = contact.name
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

        return (
          <Contact
            key={contact.id}
            contact={contact}
            formattedName={formattedName}
            deleteContact={() => handleDeleteContact(contact.id)}
          ></Contact>
        );
      })}
    </ContList>
  );
};
