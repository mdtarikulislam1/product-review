import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthContext/AuthContext'
import { Navigate } from 'react-router';

export default function PrivateRoute({children}) {
const {user}=useContext(AuthContext)
if(user){
    return children
}
  return <Navigate to="/login" replace />;
 
}
