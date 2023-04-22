import { Formik } from 'formik';
import { FormEl, Label, Input, Button, ErrorMessage  } from "components/ContactPage/Form/Form.styled";
import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

const initialValues = {
    name: '',
    email: '',
    password: ''
}

export const Register = () => {
    const dispatch = useDispatch()
  
    const onFormSubmit = ( user ) =>{
        dispatch(register(user))
      }
      
    const handleSubmit = (values, actions) => {
        onFormSubmit({
            ...values,
            });
       actions.resetForm();
    }
   
    return <>
            <Formik 
            initialValues={initialValues}
            onSubmit={handleSubmit}>
            <FormEl>
                <Label>
                    Username
                    <Input
                    type="text"
                    name="name"
                    />
                    <ErrorMessage name="name" component="span" />
                </Label>
                <Label>
                    Mail
                    <Input
                    type="email"
                    name="email"
                    />
                    <ErrorMessage name="email" component="span" />
                </Label>
                <Label>
                    Password
                    <Input
                    type="password"
                    name="password"
                    />
                    <ErrorMessage name="password" component="span" />
                </Label>
                <Button type='submit'>Register</Button>
            </FormEl>
            </Formik>
        
    </>
}

