"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextType = {
    user: any;
    setUser: (user: any) => void;
  };

export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const parseJson = (json: string | null): any => {
      if (!json) {
        return null;
      }
      return JSON.parse(json);
    };
    const userSaved = localStorage.getItem("user");
    const userContent = parseJson(userSaved);
    setUser(userContent)
  }, []);

  return (
    <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>
  );
}
