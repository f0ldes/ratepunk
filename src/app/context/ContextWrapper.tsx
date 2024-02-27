"use client";

import { AppContextProvider } from "./AppContext";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <AppContextProvider>{children}</AppContextProvider>;
};

export default Provider;
