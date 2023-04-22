import ContactList from "components/ContactPage/ContactsList/ContactsList";
import Filter from "components/ContactPage/Filter/Filter";
import ContactForm from "components/ContactPage/Form/ContactForm";
import { Loader } from "components/Loader/Loader";
import { useEffect } from "react";
import { Title2 } from "components/ContactPage/Filter/Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/contactOperations";
import { getIsLoading } from "redux/selectors";

export function Contacts (){
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
  
    useEffect(() =>{ 
      dispatch(fetchContacts())
    }, [dispatch]);
  
    return (
      <>
        <ContactForm/>
  
        <Title2>Contacts</Title2>
        <Filter/> 
        <ContactList/>
        {isLoading && <Loader/>}
      </>
    )
  };