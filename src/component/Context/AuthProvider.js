

import React, { createContext } from 'react';
import UseFirebase from '../../hooks/UseFirebase';
export  const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const  AllConrtext=UseFirebase()
    return (
        <AuthContext.Provider value={AllConrtext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;