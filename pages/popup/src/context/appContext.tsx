import React, { createContext, useState } from 'react';

export type UserInfo = {
  email?: string;
  login?: boolean;
  picture?: string;
  hd?: string;
};
// Define the shape of your context data
interface AppContextData {
  user?: UserInfo;
  setUser?: (user: UserInfo) => void;
}

// Create the context
const AppContext = createContext<AppContextData>({});

// Create a provider component
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserInfo>({});
  const Provider = AppContext.Provider;
  return <Provider value={{ user, setUser }}>{children}</Provider>;
};

export function useAppContext() {
  return React.useContext(AppContext);
}
