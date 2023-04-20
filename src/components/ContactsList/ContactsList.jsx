import { useSelector, useDispatch } from "react-redux";
import { List, ContactItem, ButtonDelete } from "./Contacts.style";
import { deleteContact } from "redux/contacts/contactOperations";
import { getContactList, getFilter } from "redux/selectors";

export default function ContactList (){
    const filter = useSelector (getFilter);
    const contacts = useSelector (getContactList);
    const dispatch = useDispatch();
    
    const findContact = () => {
        if(!contacts) return
         return contacts.filter(contact => 
          contact.name.toLowerCase().includes(filter.toLowerCase())) 
      }

    const foundContacts = findContact();

    return (
        <List>
       { foundContacts.map(({id, name, number}) => 
        <ContactItem key={id}>{`${name}: ${number}`} 
            <ButtonDelete 
            type="button" 
            onClick={() => dispatch(deleteContact(id))}>
            Delete 
            </ButtonDelete>
        </ContactItem>)}
        </List>
    )
}
