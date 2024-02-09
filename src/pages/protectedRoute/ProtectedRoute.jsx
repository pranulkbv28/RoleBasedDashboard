import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth} from '../../firebase.init'
import { Navigate } from 'react-router-dom';
import LoadingPage from '../loadingPage/LoadingPage';

const ProtectedRoute = ({children}) => {
  let [user, isLoading] = useAuthState(auth);

  if(isLoading){
    return <LoadingPage />
  }

  if(!user){
    return <Navigate to='/login' />
  }
  return children;
}

export default ProtectedRoute
