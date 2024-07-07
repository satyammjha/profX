import React, { createContext, useState } from 'react';

const UserLoggedInContext = createContext();

const ContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <UserLoggedInContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </UserLoggedInContext.Provider>
  );
};

export default ContextProvider;
export { UserLoggedInContext };