import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthContext/AuthContext'
import { Navigate, useLocation } from 'react-router';
import Loading from './Loading';

export default function PrivateRoute({children}) {
const {user,loading}=useContext(AuthContext)
const location = useLocation()
console.log(location)
if (loading) {
  return <Loading />;
}
if(user){
    return children
}
  return <Navigate state={location?.pathname} to="/login" replace />;
 
}
