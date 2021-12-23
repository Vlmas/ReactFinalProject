import React, { useContext, useState } from "react";

const AuthContext = React.createContext(false);
const AuthUpdateContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function useAuthUpdate() {
  return useContext(AuthUpdateContext);
}

export function AuthProvider({ children }) {
  const [isAuthed, setIsAuthed] = useState(false);

  return (
    <AuthContext.Provider value={isAuthed}>
      <AuthUpdateContext.Provider value={setIsAuthed}>
        {children}
      </AuthUpdateContext.Provider>
    </AuthContext.Provider>
  );
}