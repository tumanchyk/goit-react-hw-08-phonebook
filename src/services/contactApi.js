import axios from "axios";

export async function getContacts (){
    const  {data} = await axios.get('/contacts')
    return data
} 

export async function addNewContact(contact) {
    const { data } = await axios.post('/contacts', contact);
    return data;
};

export async function removeContact(contactId) {
    const { data } = axios.delete(`/contacts/${contactId}`);
    return data;
};