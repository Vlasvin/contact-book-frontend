import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Notiflix from "notiflix";

import { addContactAction } from "../../redux/Contacts/contactsOperations";

import { nanoid } from "nanoid";

import { ContForm, ContInput, AddButton } from "./styled";

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
      Notiflix.Report.failure(
        "Warning",
        "The phone number is too short.",
        "OK"
      );
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
      Notiflix.Report.failure(
        "Warning",
        `${newContact.name} is already in contacts.`,
        "OK"
      );
    } else {
      dispatch(addContactAction(newContact));
    }
    setName("");
    setNumber("");
  };

  return (
    <ContForm onSubmit={handleSubmit}>
      <ContInput
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Enter contacts name"
        required
      />

      <ContInput
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        placeholder="Enter contacts number"
        required
      />

      <AddButton type="submit">Add contact</AddButton>
    </ContForm>
  );
};
