import { createContext, useState } from "react";

export const IdContext = createContext();

export const IdContextProvider = ({ children }) => {
  const [id, setId] = useState(null); // You can initialize it as you see fit

  return (
    <IdContext.Provider value={{ id, setId }}>{children}</IdContext.Provider>
  );
};
