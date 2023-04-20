import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, addNewContact, removeContact } from 'services/contactApi';

export const fetchContacts =  createAsyncThunk(
    'сontacts/fetchAll',
    async () => {
      try {
        const contacts = await getContacts();
        return contacts;
      } catch (error) {
        console.log(error);;
      }
    },
  );
  export const addContact = createAsyncThunk(
    'contacts/addContact',
    async(contact) => {
      try{
      const newContact = await addNewContact(contact);
      return newContact
    } catch (error) {
      console.log(error);;
    }
    }
  )

  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async(contactId) => {
      try{
      await removeContact(contactId);
      return contactId
    } catch (error) {
      console.log(error);;
    }
    }
  )