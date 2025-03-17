import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  user: any;
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (email: string, password: string, role: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  const login = (email: string, password: string) => {
    setUser({ email });
  };

  const logout = () => {
    setUser(null);
  };

  const register = (email: string, password: string, role: string) => {
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
