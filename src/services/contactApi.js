import axios from "axios";

axios.defaults.baseURL = 'https://643906674660f26eb1a89314.mockapi.io/contacts';

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