import { createContext, useContext, useMemo, useState } from "react";
import { NavigationContextProps, TabsOfSectionSupport } from "./type";

type NavigationProviderProps = {
  children: React.ReactNode;
};

export const NavigationContext = createContext<NavigationContextProps>(
  {} as NavigationContextProps
);

export function NavigationProvider({ children }: NavigationProviderProps) {
  const [tabOfSectionSupport, setTabOfSectionSuport] =
    useState<TabsOfSectionSupport>();

  const contextValue: NavigationContextProps = useMemo(
    () => ({
      tabOfSectionSupport,
      setTabOfSectionSuport
    }),
    [tabOfSectionSupport]
  );

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  );
}

export const useNavigationContext = () => useContext(NavigationContext);
