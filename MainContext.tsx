import { User } from "firebase/auth";
import React, {
  createContext,
  useContext,
  useState,
} from "react";

type ctxType = {
  user: User | null;
  setUser: React.Dispatch<
    React.SetStateAction<User | null>
  >;
  items: any;
  setItems: React.Dispatch<React.SetStateAction<any>>;
  ateCalories: number;
  setAteCalories: React.Dispatch<
    React.SetStateAction<number>
  >;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  totalCalories: number | null;
  setTotalCalories: React.Dispatch<
    React.SetStateAction<number | null>
  >;
};
export const MainCtx = createContext<undefined | ctxType>(
  undefined
);

type props = {
  children: React.ReactNode;
};
export const CtxProvider = ({ children }: props) => {
  const [user, setUser] = useState<User | null>(null);
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [ateCalories, setAteCalories] = useState(0);
  const [totalCalories, setTotalCalories] = useState<
    number | null
  >(null);
  const value = {
    user,
    setUser,
    items,
    setItems,
    ateCalories,
    setAteCalories,
    loading,
    setLoading,
    totalCalories,
    setTotalCalories,
  };
  return (
    <MainCtx.Provider value={value}>
      {children}
    </MainCtx.Provider>
  );
};
export const useMainCtx = () => {
  const ctx = useContext(MainCtx);
  if (!ctx) {
    throw new Error("ctx not working");
  }
  return ctx;
};
