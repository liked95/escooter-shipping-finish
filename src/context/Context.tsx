import { createContext, useState } from "react";

const initUsers = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [];

export const Context = createContext();

export default function AppProvider({ children }) {
  const [users, setUsers] = useState(initUsers);
  return (
    <Context.Provider value={{ users, setUsers }}>{children}</Context.Provider>
  );
}
