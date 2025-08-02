import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUserInfo(userData);
    localStorage.setItem('userInfo', JSON.stringify(userData));
    localStorage.setItem('userToken', userData.token);
  };

  const logout = () => {
    setUserInfo(null);
    localStorage.removeItem('userInfo');
    localStorage.removeItem('userToken');
  };

  return (
    <UserContext.Provider value={{ userInfo, loading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};