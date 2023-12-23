'use client'
import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userContext, setUserContext] = useState({ id: 0 });

 const updateUserContext = (userData) => {
    setUserContext(userData);
  };

  return (
    <AuthContext.Provider value={{ userContext, updateUserContext }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };