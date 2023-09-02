import { createContext, useState } from "react";

export const RoleContext = createContext();

export const RoleContextProvider = ({ children }) => {
  const [role, setRole] = useState(null); // You can initialize it as you see fit

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};
