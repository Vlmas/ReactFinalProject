import React, { useContext } from 'react';

const EndPointContext = React.createContext('');

export function useBaseUrl() {
  return useContext(EndPointContext);
}

export function EndpointProvider({ children }) {
  const url = 'https://fakestoreapi.com';

  return (
    <EndPointContext.Provider value={url}>
      {children}
    </EndPointContext.Provider>
  );
}