import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContactAction } from "../../redux/Contacts/contactsOperations";

import { nanoid } from "nanoid";

import {
  ContForm,
  ContLabel,
  ContInput,
  AddButton,
} from "./ContactForm.styled";

const formatPhoneNumber = (phoneNumber) => {
  if (phoneNumber.length < 10) return null;
  return phoneNumber.replace(/(\d{3})(\d{4})/, "$1-$2");
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    const trimmedValue = value.trim();

    if (name === "name") {
      const cleanedName = trimmedValue.replace(
        /[^a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ' ]/g,
        ""
      );

      setName(cleanedName);
    } else if (name === "number") {
      const cleanedNumber = trimmedValue.replace(/\D/g, "");
      const limitedNumber = cleanedNumber.slice(0, 10);
      const formattedNumber = limitedNumber.replace(
        /(\d{3})(\d{3})(\d{2})(\d{2})/,
        "($1)$2-$3-$4"
      );

      if (limitedNumber.length <= 10) {
        setNumber(formattedNumber);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formattedNumber = formatPhoneNumber(number);

    if (!formattedNumber) {
      alert("The phone number is too short.");
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number: formattedNumber,
    };

    const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (existingContact) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      dispatch(addContactAction(newContact));
    }
    setName("");
    setNumber("");
  };

  return (
    <ContForm onSubmit={handleSubmit}>
      <ContLabel>
        Name
        <ContInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </ContLabel>

      <ContLabel>
        Number
        <ContInput
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </ContLabel>

      <AddButton type="submit">Add contact</AddButton>
    </ContForm>
  );
};
