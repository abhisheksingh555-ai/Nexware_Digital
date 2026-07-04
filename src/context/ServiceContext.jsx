import React, { createContext, useContext, useState } from 'react';

const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
  // Global state
  const [activeServiceId, setActiveServiceId] = useState('services-web-app');

  return (
    <ServiceContext.Provider value={{ activeServiceId, setActiveServiceId }}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useService = () => useContext(ServiceContext);