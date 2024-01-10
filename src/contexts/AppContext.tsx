import { createContext, ReactNode, useState, useContext } from "react";

export interface IApp {
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<IApp>({
  activeMenu: false,
  setActiveMenu: () => {},
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): IApp => {
  return useContext(AppContext);
};
