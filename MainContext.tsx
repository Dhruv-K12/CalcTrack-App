import { User } from "firebase/auth";
import { createContext, useContext, useState } from "react";

export const MainCtx = createContext({});

type props = {
  children: React.ReactNode;
};
export const CtxProvider = ({ children }: props) => {
  const [user, setUser] = useState<User>();
  const value = {
    user,
    setUser,
  };
  return (
    <MainCtx.Provider value={value}>
      {children}
    </MainCtx.Provider>
  );
};
export const useMainCtx = () => {
  const ctx = useContext(MainCtx);
  if (ctx) {
    return ctx;
  }
};
