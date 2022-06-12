import { Box } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

export const AuthWrapper = ({children}) => {

    const authStatus = useSelector((store) => store.authReducer.auth);
    console.log("authStatus",authStatus)

    if(!authStatus){
        return <Navigate to='/login' replace='true'></Navigate>
    }

  return (
    <Box>
        {children}
    </Box>
  )
}

 