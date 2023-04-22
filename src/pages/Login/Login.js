import { Formik } from 'formik';
import { FormEl, Label, Input, Button, ErrorMessage  } from "components/ContactPage/Form/Form.styled";
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';


const initialValues = {
    email: '',
    password: ''
}

export const Login = () => {
   const dispatch = useDispatch()
    const onFormSubmit = ( user ) =>{
        dispatch(login(user))
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
                <Button type='submit'>Log in</Button>
            </FormEl>
            </Formik>
        
    </>
}