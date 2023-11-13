import { createContext, ReactNode } from "react";

interface ContextosProps {
  defaultValue?: string;
  name?: string;
}

export const Contextos = createContext<ContextosProps>({});

interface ContextoProviderProps {
  children: ReactNode;
}

export const ContextoProvider = ({ children }: ContextoProviderProps) => {
  const value = { name: "black Moreno" }
  return <Contextos.Provider value={value}>{children}</Contextos.Provider>;
};
