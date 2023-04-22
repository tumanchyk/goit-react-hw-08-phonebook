import { Route, Routes } from 'react-router-dom';
import { Contacts } from 'pages/Contacts/Contacts';
import { Layout } from './Layout/Layout';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import { Home } from 'pages/Home/Home';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { getIsRefreshing } from 'redux/auth/selectors';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export function App (){
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]
  )
  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='/contacts' element={
            <PrivateRoute element={Contacts} redirectTo='/login'/>}/>
          <Route path='/login' element={
            <RestrictedRoute element={Login} redirectTo='/contacts'/>}/>
          <Route path='/register' element={
            <RestrictedRoute element={Register} redirectTo='/contacts'/>}/>
        </Route>
      </Routes>
    )
  )
};

