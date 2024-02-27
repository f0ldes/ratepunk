"use client";

import { createContext, useState, useEffect, ReactNode } from "react";
import { updateEmailAndReferral } from "./emailHandler/saveEmail";

export interface AppContextType {
  isMobile: boolean;
  email: string;
  referalCode: string,
  setIsMobile: (isMobile: boolean) => void;
  setEmail: (email: string) => void;
  setReferalCode: (referalCode: string) => void;
  updateEmailAndReferral: (email: string) => Promise<void>;
}

const defaultContextValue: AppContextType = {
  isMobile: false,
  email: '',
  referalCode: '',
  setIsMobile: () => {},
  setEmail: () => {},
  setReferalCode: () => {},
  updateEmailAndReferral: async () => {}
};

const AppContext = createContext<AppContextType>(defaultContextValue);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [referalCode, setReferalCode] = useState<string>('');

  const handleUpdateEmailAndReferral = async (email: string) => {
    await updateEmailAndReferral(email, setReferalCode);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AppContext.Provider value={{ 
      isMobile, setIsMobile,
      email, setEmail,
      referalCode, setReferalCode,
      updateEmailAndReferral: handleUpdateEmailAndReferral }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
