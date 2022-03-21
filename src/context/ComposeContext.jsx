import React from 'react'
import AuthState from './auth/AuthState';


const ComposeContext = ({children}) => {
  return (
    <AuthState>
        {children}
    </AuthState>
  )
}

export default ComposeContext