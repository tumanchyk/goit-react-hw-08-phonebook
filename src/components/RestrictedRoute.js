import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/selectors'

export const RestrictedRoute = ({element: Component, redirectTo}) =>{
const isLoggedIn = useSelector(getIsLoggedIn)
return isLoggedIn ? <Navigate to={redirectTo} /> : <Component/>
}