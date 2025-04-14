import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    name: 'John Smith',
    status: 'Online',
    avatar: 'https://via.placeholder.com/40'
  });

  const logout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      setUser(null);
    }
  };

  const value = {
    user,
    setUser,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}