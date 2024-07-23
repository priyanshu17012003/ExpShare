import React, { createContext, useContext, useState } from 'react';
export const AuthContext = createContext()

export const AuthProvider=({ children })=> {

    const initalUserState=localStorage.getItem("user");

    const [authUser,setAuthUser]=useState(initalUserState?JSON.parse(initalUserState):undefined);

    return (
        <AuthContext.Provider value={[authUser,setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
  
}

export const useAuth=()=>useContext(AuthContext);